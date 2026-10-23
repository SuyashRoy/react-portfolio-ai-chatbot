import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

/*
 * Full-viewport canvas: a parallax starfield with nebula haze, a large comet that
 * sweeps across on a curved path (ion tail + dust tail + shedding sparks), and the
 * odd shooting star. `intensity="hero"` is used on the home page; "calm" elsewhere.
 */

const PALETTES = {
  dark: {
    stars: ['255,255,255', '186,230,253', '221,214,254', '254,243,199'],
    starAlpha: 0.9,
    coma: ['255,255,255', '207,250,254', '125,211,252'],
    ion: '125,211,252',
    dust: '167,139,250',
    sparks: ['186,230,253', '221,214,254', '240,171,252', '255,255,255'],
    nebula: [['124,58,237', 0.13], ['14,165,233', 0.1], ['192,38,211', 0.07]],
    blend: 'lighter',
  },
  light: {
    stars: ['92,74,46', '3,105,161', '91,33,182'],
    starAlpha: 0.32,
    coma: ['255,255,255', '125,211,252', '2,132,199'],
    ion: '14,165,233',
    dust: '124,58,237',
    sparks: ['14,165,233', '124,58,237', '192,38,211'],
    nebula: [['251,191,36', 0.1], ['56,189,248', 0.07], ['244,114,182', 0.06]],
    blend: 'source-over',
  },
};

const MODES = {
  hero: { cometGap: [2.5, 5], firstComet: 0.4, meteorGap: [1.4, 3.5], starScale: 1 },
  calm: { cometGap: [10, 18], firstComet: 2.5, meteorGap: [4, 9], starScale: 0.7 },
};

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const bez = (a, b, c, t) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
const bezD = (a, b, c, t) => 2 * (1 - t) * (b - a) + 2 * t * (c - b);
const smooth = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function makeStars(w, h) {
  const count = Math.min(420, Math.round((w * h) / 2600));
  return Array.from({ length: count }, () => {
    const z = Math.random() ** 2 * 0.9 + 0.1; // most stars far away
    return {
      x: Math.random(),
      y: Math.random(),
      z,
      r: 0.35 + z * 1.25,
      a: 0.25 + z * 0.75,
      tw: rand(0.6, 2.2),
      ph: rand(0, Math.PI * 2),
      c: Math.random() < 0.8 ? 0 : 1 + ((Math.random() * 3) | 0),
    };
  });
}

function makeComet(w, h, big) {
  const diag = Math.hypot(w, h);
  if (big) {
    const ltr = Math.random() < 0.6;
    const sx = ltr ? -0.12 * w : 1.12 * w;
    const sy = rand(-0.12, 0.28) * h;
    const ex = ltr ? 1.15 * w : -0.15 * w;
    const ey = rand(0.55, 1.05) * h;
    const bow = rand(0.06, 0.16) * diag * (Math.random() < 0.5 ? -1 : 1);
    const mx = (sx + ex) / 2, my = (sy + ey) / 2;
    const len = Math.hypot(ex - sx, ey - sy);
    return {
      big, t: 0, dur: rand(6.5, 9),
      p: [sx, sy, mx + (-(ey - sy) / len) * bow, my + ((ex - sx) / len) * bow, ex, ey],
      trail: [], tail: 1.7, width: Math.max(3, diag / 340), ion: diag * 0.34, size: Math.max(1.1, diag / 1150),
    };
  }
  const sx = rand(0.05, 0.95) * w;
  const sy = rand(-0.05, 0.45) * h;
  const ang = (Math.random() < 0.5 ? 1 : -1) * rand(0.35, 0.75) + Math.PI / 2;
  const L = rand(0.18, 0.32) * diag;
  const ex = sx + Math.cos(ang) * L, ey = sy + Math.sin(ang) * L;
  return {
    big, t: 0, dur: rand(0.55, 0.95),
    p: [sx, sy, (sx + ex) / 2, (sy + ey) / 2, ex, ey],
    trail: [], tail: 0.28, width: 1.6, ion: 0, size: 0.6,
  };
}

function cometPos(c) {
  const [x0, y0, x1, y1, x2, y2] = c.p;
  return {
    x: bez(x0, x1, x2, c.t), y: bez(y0, y1, y2, c.t),
    vx: bezD(x0, x1, x2, c.t) / c.dur, vy: bezD(y0, y1, y2, c.t) / c.dur,
  };
}

function drawComet(ctx, c, pal, now) {
  const head = c.trail[c.trail.length - 1];
  if (!head) return;
  const fade = c.big ? smooth(0, 0.08, c.t) * (1 - smooth(0.9, 1, c.t)) : Math.sin(Math.PI * Math.min(1, c.t));

  // Dust tail: the curved path the head has actually travelled, tapering to nothing
  const n = c.trail.length;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 1; i < n; i++) {
      const a = c.trail[i - 1], b = c.trail[i];
      const f = 1 - (now - b.t) / c.tail;
      if (f <= 0) continue;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      if (pass === 0) {
        ctx.lineWidth = c.width * 4.5 * f;
        ctx.strokeStyle = `rgba(${pal.dust},${0.07 * f * fade})`;
      } else {
        ctx.lineWidth = c.width * f ** 1.4;
        ctx.strokeStyle = `rgba(${pal.coma[1]},${0.65 * f * f * fade})`;
      }
      ctx.stroke();
    }
  }

  // Ion tail: straight, narrow plume pointing back along the velocity, angled slightly off the dust tail
  if (c.ion) {
    const { vx, vy } = head;
    const sp = Math.hypot(vx, vy) || 1;
    const rot = 0.07;
    const ux = -(vx * Math.cos(rot) - vy * Math.sin(rot)) / sp;
    const uy = -(vx * Math.sin(rot) + vy * Math.cos(rot)) / sp;
    const tx = head.x + ux * c.ion, ty = head.y + uy * c.ion;
    const hw = c.width * 1.6;
    const g = ctx.createLinearGradient(head.x, head.y, tx, ty);
    g.addColorStop(0, `rgba(${pal.ion},${0.5 * fade})`);
    g.addColorStop(0.35, `rgba(${pal.ion},${0.16 * fade})`);
    g.addColorStop(1, `rgba(${pal.ion},0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(head.x - uy * hw, head.y + ux * hw);
    ctx.lineTo(tx, ty);
    ctx.lineTo(head.x + uy * hw, head.y - ux * hw);
    ctx.closePath();
    ctx.fill();
  }

  // Coma: layered glow around a bright nucleus
  const R = (c.big ? 26 : 7) * c.size * (1 + 0.06 * Math.sin(now * 9));
  const g = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, R);
  g.addColorStop(0, `rgba(${pal.coma[0]},${fade})`);
  g.addColorStop(0.18, `rgba(${pal.coma[1]},${0.75 * fade})`);
  g.addColorStop(0.5, `rgba(${pal.coma[2]},${0.18 * fade})`);
  g.addColorStop(1, `rgba(${pal.coma[2]},0)`);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(head.x, head.y, R, 0, Math.PI * 2);
  ctx.fill();
}

const CometSky = ({ intensity = 'calm' }) => {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pal = PALETTES[isDarkMode ? 'dark' : 'light'];
    const mode = MODES[intensity] || MODES.calm;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, dpr = 1, stars = [], nebula = null;
    let comets = [], sparks = [];
    let nextComet = mode.firstComet, nextMeteor = rand(...mode.meteorGap);
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0, last = performance.now(), clock = 0;

    const buildNebula = () => {
      nebula = document.createElement('canvas');
      nebula.width = Math.ceil(w / 2);
      nebula.height = Math.ceil(h / 2);
      const n = nebula.getContext('2d');
      const spots = [[0.12, 0.18, 0.7], [0.88, 0.3, 0.6], [0.55, 0.95, 0.75]];
      spots.forEach(([x, y, r], i) => {
        const [rgb, a] = pal.nebula[i];
        const R = r * Math.max(nebula.width, nebula.height);
        const g = n.createRadialGradient(x * nebula.width, y * nebula.height, 0, x * nebula.width, y * nebula.height, R);
        g.addColorStop(0, `rgba(${rgb},${a})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        n.fillStyle = g;
        n.fillRect(0, 0, nebula.width, nebula.height);
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      stars = makeStars(w, h);
      buildNebula();
    };

    const drawFrame = (now) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const scroll = window.scrollY || 0;

      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(nebula, -mouse.x * 8 - 10, -mouse.y * 8 - 10, w + 20, h + 20);

      ctx.globalCompositeOperation = pal.blend;
      for (const s of stars) {
        const px = ((s.x * w - mouse.x * s.z * 16) % w + w) % w;
        const py = ((s.y * h - mouse.y * s.z * 10 - scroll * s.z * 0.08) % h + h) % h;
        const twinkle = 0.6 + 0.4 * Math.sin(now * s.tw + s.ph);
        ctx.fillStyle = `rgba(${pal.stars[s.c % pal.stars.length]},${s.a * twinkle * pal.starAlpha * mode.starScale})`;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineCap = 'round';
      for (const c of comets) drawComet(ctx, c, pal, now);

      for (const p of sparks) {
        const f = p.life / p.max;
        ctx.fillStyle = `rgba(${p.c},${0.8 * f})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.4 + 0.6 * f), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (dt) => {
      clock += dt;
      nextComet -= dt;
      nextMeteor -= dt;
      if (nextComet <= 0 && !comets.some((c) => c.big)) {
        comets.push(makeComet(w, h, true));
        nextComet = rand(...mode.cometGap);
      }
      if (nextMeteor <= 0) {
        comets.push(makeComet(w, h, false));
        nextMeteor = rand(...mode.meteorGap);
      }

      for (const c of comets) {
        while (c.trail.length && clock - c.trail[0].t > c.tail) c.trail.shift();
        if (c.t >= 1) continue;
        c.t = Math.min(1, c.t + dt / c.dur);
        const pos = cometPos(c);
        c.trail.push({ ...pos, t: clock });

        if (c.big && c.t < 0.95) {
          const sp = Math.hypot(pos.vx, pos.vy) || 1;
          const ux = pos.vx / sp, uy = pos.vy / sp;
          for (let k = 0, n = Math.round(dt * 110); k < n; k++) {
            const back = rand(20, 70), side = rand(-28, 28);
            const max = rand(0.6, 1.7);
            sparks.push({
              x: pos.x + rand(-2, 2), y: pos.y + rand(-2, 2),
              vx: -ux * back - uy * side, vy: -uy * back + ux * side,
              r: rand(0.4, 1.5) * c.size, life: max, max, c: pick(pal.sparks),
            });
          }
        }
      }
      // Keep a finished comet around until its tail has drained off-screen
      comets = comets.filter((c) => c.t < 1 || c.trail.length > 1);

      for (const p of sparks) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.life -= dt;
      }
      sparks = sparks.filter((p) => p.life > 0);
    };

    const loop = (t) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      step(dt);
      drawFrame(clock);
      raf = requestAnimationFrame(loop);
    };

    // Reduced motion: one still frame with a comet frozen mid-flight
    const drawStill = () => {
      const c = makeComet(w, h, true);
      const end = 0.5;
      for (let t = end - c.tail / c.dur; t <= end; t += 1 / 120) {
        c.t = Math.max(0, t);
        clock += 1 / 120 * c.dur;
        c.trail.push({ ...cometPos(c), t: clock });
      }
      comets = [c];
      drawFrame(clock);
    };

    const onMove = (e) => {
      mouse.tx = (e.clientX / w) * 2 - 1;
      mouse.ty = (e.clientY / h) * 2 - 1;
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    const onResize = () => {
      resize();
      if (reduced) drawStill();
    };

    resize();
    window.addEventListener('resize', onResize);
    if (reduced) {
      drawStill();
    } else {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [isDarkMode, intensity]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
};

export default CometSky;
