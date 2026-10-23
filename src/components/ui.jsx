import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const cx = (...c) => c.filter(Boolean).join(' ');

// Fades children up the first time they scroll into view
export const Reveal = ({ as: Tag = 'div', delay = 0, className, children, ...rest }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cx('reveal', className)} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
};

// Tracks the cursor so .spotlight cards can light their border toward it
const trackSpotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export const Card = ({ as: Tag = 'div', className, children, ...rest }) => (
  <Tag
    onPointerMove={trackSpotlight}
    className={cx(
      'glass spotlight rounded-2xl transition-[background-color,border-color,transform] duration-300 hover:bg-surface-hover',
      className
    )}
    {...rest}
  >
    {children}
  </Tag>
);

export const Eyebrow = ({ children, className }) => (
  <p className={cx('font-mono text-xs uppercase tracking-[0.22em] text-accent-text', className)}>{children}</p>
);

export const PageHeader = ({ eyebrow, title, children }) => (
  <header className="mx-auto max-w-3xl pb-12 pt-32 text-center sm:pb-16 sm:pt-40">
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {children && <p className="mx-auto mt-5 max-w-2xl text-base text-fg-muted sm:text-lg">{children}</p>}
    </Reveal>
  </header>
);

export const SectionTitle = ({ eyebrow, title, action }) => (
  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div>
      {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
    </div>
    {action}
  </div>
);

export const Tag = ({ children, className }) => (
  <span
    className={cx(
      'inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] leading-none text-fg-muted',
      className
    )}
  >
    {children}
  </span>
);

const buttonStyles = {
  primary:
    'bg-fg text-bg hover:shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_25%,transparent),0_8px_30px_var(--glow)]',
  ghost: 'glass text-fg hover:border-line-strong hover:bg-surface-hover',
};

export const Button = ({ to, href, variant = 'primary', className, children, ...rest }) => {
  const classes = cx(
    'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-300',
    buttonStyles[variant],
    className
  );
  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>;
  return <button className={classes} {...rest}>{children}</button>;
};

export const ArrowIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={cx(className, 'transition-transform duration-300 group-hover:translate-x-0.5')} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExternalIcon = ({ className = 'h-3.5 w-3.5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M8 4H4v12h12v-4M11 3h6v6M17 3l-8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GitHubIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const MailIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// "Up next" card that replaces the old full-screen "Ready to learn more?" sections
export const NextPage = ({ to, label, hint }) => (
  <Reveal className="mx-auto mt-24 max-w-5xl px-4 sm:px-6">
    <Link
      to={to}
      onPointerMove={trackSpotlight}
      className="glass spotlight group flex items-center justify-between gap-6 rounded-3xl p-6 transition-colors duration-300 hover:bg-surface-hover sm:p-10"
    >
      <div>
        <Eyebrow>Up next</Eyebrow>
        <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl">{label}</p>
        {hint && <p className="mt-2 text-sm text-fg-muted sm:text-base">{hint}</p>}
      </div>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-all duration-300 group-hover:border-accent group-hover:text-accent-text sm:h-16 sm:w-16">
        <ArrowIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
    </Link>
  </Reveal>
);

export const Container = ({ className, children }) => (
  <div className={cx('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>{children}</div>
);
