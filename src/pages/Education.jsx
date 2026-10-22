import React from 'react';
import profile from '../data/profile.json';
import { Card, Container, Eyebrow, NextPage, PageHeader, Reveal, Tag } from '../components/ui';

const Education = () => (
  <>
    <PageHeader eyebrow="Education" title="Where I learned it">
      A master's at USC focused on ML, NLP and retrieval, built on an IT degree from KIIT.
    </PageHeader>

    <Container className="max-w-5xl space-y-6">
      {profile.education.map((edu, i) => (
        <Reveal key={edu.school} delay={i * 100}>
          <Card as="article" className="overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <div className="relative h-48 md:h-auto">
                <img src={edu.image} alt={`${edu.school} campus`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-bg/40" />
                <span className="absolute bottom-4 left-5 font-display text-4xl font-semibold tracking-tight text-white drop-shadow-lg">
                  {edu.short}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <Eyebrow>{edu.dates}</Eyebrow>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">{edu.degree}</h2>
                    <p className="mt-1 text-fg-muted">
                      {edu.school} · {edu.location}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface px-4 py-3 text-right">
                    <p className="font-display text-2xl font-semibold leading-none tracking-tight text-fg">{edu.gpa.split(' / ')[0]}</p>
                    <p className="mt-1 font-mono text-[11px] text-fg-subtle">GPA / {edu.gpa.split(' / ')[1]}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-fg-muted sm:text-base">{edu.summary}</p>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Key coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <Tag key={c.name} className="gap-2 px-3 py-1.5 text-xs text-fg">
                      {c.code && <span className="text-accent">{c.code}</span>}
                      {c.name}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      ))}
    </Container>

    <NextPage to="/experience" label="Experience" hint="From enterprise Java to production LLM systems." />
  </>
);

export default Education;
