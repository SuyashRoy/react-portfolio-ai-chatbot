import React from 'react';
import { Card, Tag, ExternalIcon, GitHubIcon } from './ui';

const statusStyles = {
  'In progress': 'text-amber-700 dark:text-amber-300 border-amber-400/40 bg-amber-300/10',
  Live: 'text-emerald-700 dark:text-emerald-300 border-emerald-400/40 bg-emerald-300/10',
  Completed: 'text-fg-muted border-line bg-surface',
};

// Generated cover art: a comet streak in the project's hue over a faint star grid
const ProjectCover = ({ title, hue, tall }) => {
  const id = title.replace(/\W/g, '');
  const tilt = (hue % 60) - 30;
  return (
    <div
      className={`relative overflow-hidden rounded-t-2xl ${tall ? 'h-48 sm:h-56' : 'h-36'}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, hsl(${hue} 90% 60% / 0.28), transparent 60%),
                     radial-gradient(90% 80% at 0% 100%, hsl(${(hue + 60) % 360} 80% 55% / 0.18), transparent 60%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: 'var(--line-strong)',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`tail-${id}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={`hsl(${hue} 90% 70%)`} stopOpacity="0" />
            <stop offset="1" stopColor={`hsl(${hue} 95% 75%)`} stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id={`head-${id}`}>
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.35" stopColor={`hsl(${hue} 95% 80%)`} stopOpacity="0.8" />
            <stop offset="1" stopColor={`hsl(${hue} 95% 70%)`} stopOpacity="0" />
          </radialGradient>
        </defs>
        <g transform={`rotate(${tilt} 200 100)`}>
          <path d="M-20 190 Q 170 150 320 52" stroke={`url(#tail-${id})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M-20 190 Q 170 150 320 52" stroke={`url(#tail-${id})`} strokeWidth="14" fill="none" opacity="0.15" />
          <circle cx="320" cy="52" r="26" fill={`url(#head-${id})`} />
          <circle cx="320" cy="52" r="3.5" fill="#fff" />
        </g>
      </svg>
    </div>
  );
};

const ProjectCard = ({ project, tall = false, showHighlights = true }) => (
  <Card as="article" className="flex h-full flex-col">
    <ProjectCover title={project.title} hue={project.hue} tall={tall} />
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-fg-subtle">
        <span className={`rounded-full border px-2 py-0.5 font-mono text-[11px] ${statusStyles[project.status] || statusStyles.Completed}`}>
          {project.status}
        </span>
        <span className="font-mono">{project.dates}</span>
        <span aria-hidden="true">·</span>
        <span>{project.role}</span>
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.summary}</p>

      {showHighlights && (
        <ul className="mt-4 space-y-2 text-sm text-fg-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-xs font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface-hover"
          >
            <GitHubIcon className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-xs font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface-hover"
          >
            <ExternalIcon /> Live
          </a>
        )}
      </div>
    </div>
  </Card>
);

export default ProjectCard;
