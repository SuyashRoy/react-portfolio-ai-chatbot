import React from 'react';
import profile from '../data/profile.json';
import { Card, Container, Eyebrow, NextPage, PageHeader, Reveal, SectionTitle, Tag } from '../components/ui';

const About = () => (
  <>
    <PageHeader eyebrow="About" title="Hi, I'm Suyash.">
      An engineer who likes the whole path from messy data to a tool people use every day.
    </PageHeader>

    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
            <div className="glass overflow-hidden rounded-[2rem] p-2">
              <img
                src="/DSC_0278 copy.JPG"
                alt="Portrait of Suyash Roy"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
              />
            </div>
            <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs text-fg-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              {profile.location}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {profile.focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <Card className="h-full p-5">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-base font-semibold text-fg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-24">
        <Reveal>
          <SectionTitle eyebrow="Toolkit" title="Technical skills" />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 80}>
              <Card className="h-full p-6">
                <Eyebrow className="text-fg-subtle">{s.group}</Eyebrow>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Tag key={item} className="px-3 py-1.5 text-xs text-fg">
                      {item}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={160}>
            <Card className="h-full p-6">
              <Eyebrow className="text-fg-subtle">Off the clock</Eyebrow>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                Reading (The Count of Monte Cristo is the favourite), movies and TV, most major sports, and an
                unreasonable amount of Manchester United.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </Container>

    <NextPage to="/education" label="Education" hint="USC, KIIT, and the coursework in between." />
  </>
);

export default About;
