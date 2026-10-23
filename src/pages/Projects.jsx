import React, { useEffect, useRef } from 'react';
import profile from '../data/profile.json';
import { Container, ExternalIcon, GitHubIcon, NextPage, PageHeader, Reveal, Tag } from '../components/ui';

const statusStyles = {
  'In progress': 'border-amber-300/50 bg-amber-950/60 text-amber-200',
  Live: 'border-emerald-300/50 bg-emerald-950/60 text-emerald-200',
  Completed: 'border-white/25 bg-black/50 text-white/85',
};

// Journey milestones are labelled by the year each project started
const startYear = (dates) => (dates.match(/\d{4}/) || [''])[0];

// Fills the rail as the page scrolls and lights each marker once the comet head passes it.
// Writes straight to the DOM so scrolling never re-renders React.
const useJourneyProgress = () => {
  const railRef = useRef(null);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const nodes = [...rail.parentElement.querySelectorAll('[data-journey-node]')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rail.style.setProperty('--fill', '1');
      nodes.forEach((n) => n.setAttribute('data-lit', ''));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = rail.getBoundingClientRect();
      const tip = window.innerHeight * 0.6;
      const fill = Math.min(1, Math.max(0, (tip - r.top) / r.height));
      rail.style.setProperty('--fill', fill.toFixed(4));
      const tipY = r.top + fill * r.height;
      nodes.forEach((n) => n.toggleAttribute('data-lit', n.getBoundingClientRect().top + 8 <= tipY));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return railRef;
};

const LinkPill = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-xs font-medium text-fg transition-colors hover:border-accent hover:text-accent-text"
  >
    {children}
  </a>
);

const JourneyCard = ({ project, index }) => {
  const { image } = project;
  return (
    <article className="glass group overflow-hidden rounded-2xl transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_60px_-24px_var(--glow)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          width="1280"
          height="720"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className={`absolute left-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[11px] backdrop-blur-md ${statusStyles[project.status] || statusStyles.Completed}`}>
          {project.status}
        </span>
        <a
          href={image.credit.source}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-3 rounded-full bg-black/45 px-2 py-0.5 text-[10px] text-white/75 backdrop-blur-sm transition-colors hover:text-white"
        >
          Photo: {image.credit.photographer} / Unsplash
        </a>
      </div>

      <div className="p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
          {project.dates} · {project.role}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-[15px]">{project.oneLiner}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {(project.github || project.live) && (
          <div className="mt-5 flex gap-2">
            {project.github && (
              <LinkPill href={project.github}>
                <GitHubIcon className="h-3.5 w-3.5" /> Code
              </LinkPill>
            )}
            {project.live && (
              <LinkPill href={project.live}>
                <ExternalIcon /> Live
              </LinkPill>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const journey = [...profile.projects].sort((a, b) => a.step - b.step);
  const railRef = useJourneyProgress();

  return (
    <>
      <PageHeader eyebrow="Projects" title="The journey so far">
        From a college capstone to production agents: each project picked up where the last one left off.
      </PageHeader>

      <Container className="max-w-6xl">
        <ol className="relative">
          {/* Rail: faint track, a glowing fill driven by --fill, and a comet head riding its tip */}
          <div
            ref={railRef}
            aria-hidden="true"
            className="journey-rail pointer-events-none absolute bottom-0 left-[11px] top-0 w-[2px] md:left-1/2 md:-translate-x-1/2"
          >
            <span className="absolute inset-0 rounded-full bg-line" />
            <span className="journey-fill absolute inset-x-0 top-0 rounded-full" />
            <span className="journey-head absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </div>

          {journey.map((project, i) => {
            const right = i % 2 === 1;
            return (
              <li key={project.title} className="relative pb-14 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-x-20 md:pl-0 md:pb-20">
                <span
                  data-journey-node
                  aria-hidden="true"
                  className="journey-node absolute left-[12px] top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 md:left-1/2 md:top-10"
                />

                {/* Step label sits opposite the card on desktop, above it on mobile */}
                <Reveal
                  className={`mb-3 flex items-baseline gap-3 md:mb-0 md:flex-col md:gap-1 md:pt-8 ${
                    right ? 'md:col-start-1 md:row-start-1 md:items-end md:text-right' : 'md:col-start-2 md:row-start-1'
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent-text">Step {String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-2xl font-semibold tracking-tight text-fg-subtle md:text-5xl">{startYear(project.dates)}</span>
                </Reveal>

                <Reveal
                  delay={80}
                  className={`journey-card ${right ? 'from-right md:col-start-2' : 'from-left md:col-start-1'} md:row-start-1`}
                >
                  <JourneyCard project={project} index={i} />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>

      <NextPage to="/contact" label="Let's talk" hint="Hiring, collaborating, or just curious about something here." />
    </>
  );
};

export default Projects;
