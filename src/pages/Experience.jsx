import React from 'react';
import profile from '../data/profile.json';
import { Card, Container, NextPage, PageHeader, Reveal, Tag } from '../components/ui';

const Experience = () => (
  <>
    <PageHeader eyebrow="Experience" title="Where I've built things">
      Four-plus years across enterprise SaaS, consulting analytics, ML research and production AI.
    </PageHeader>

    <Container className="max-w-5xl">
      <ol className="relative">
        {/* The timeline rail fades out like a comet tail */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-accent via-accent-2/50 to-transparent md:left-[calc(12rem+7px)]"
        />
        {profile.experience.map((job, i) => (
          <Reveal as="li" key={job.company + job.role} delay={i * 60} className="relative pb-10 pl-10 md:grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-0 md:pl-0">
            <div className="mb-3 md:mb-0 md:pr-10 md:pt-6 md:text-right">
              <p className="whitespace-nowrap font-mono text-xs text-fg-muted">{job.dates}</p>
              <p className="mt-1 text-xs text-fg-subtle">{job.location}</p>
            </div>

            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 grid h-[15px] w-[15px] place-items-center rounded-full border md:left-[12rem] md:top-7 ${
                job.current ? 'border-accent bg-bg shadow-[0_0_14px_var(--glow)]' : 'border-line-strong bg-bg'
              }`}
            >
              <span className={`h-[5px] w-[5px] rounded-full ${job.current ? 'bg-accent' : 'bg-fg-subtle'}`} />
            </span>

            <Card as="article" className="p-6 sm:p-7 md:ml-10">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">{job.role}</h2>
                  <p className="mt-1 text-accent-text">{job.company}</p>
                </div>
                {job.current && (
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-300/10 px-2.5 py-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-300">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-fg sm:text-base">{job.summary}</p>

              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-fg-muted">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </ol>
    </Container>

    <NextPage to="/projects" label="Projects" hint={`${profile.projects.length} things I've built, from agents to geospatial forecasting.`} />
  </>
);

export default Experience;
