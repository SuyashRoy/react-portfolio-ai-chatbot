import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../data/profile.json';
import ProjectCard from '../components/ProjectCard';
import { ArrowIcon, Button, Card, Container, Eyebrow, NextPage, Reveal, SectionTitle } from '../components/ui';

const focusWords = ['retrieval systems', 'LLM agents', 'ML pipelines', 'RAG products'];

// Cycles through focusWords with a soft vertical swap
const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % focusWords.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span key={i} className="word-in inline-block font-medium text-fg">
      {focusWords[i]}
    </span>
  );
};

const current = [
  { kind: 'Work', title: profile.experience[0].company, sub: profile.experience[0].role, text: profile.experience[0].summary, to: '/experience' },
  { kind: 'Research', title: 'USC Research', sub: profile.experience[1].role, text: profile.experience[1].summary, to: '/experience' },
  { kind: 'Building', title: profile.projects[0].title, sub: profile.projects[0].role, text: profile.projects[0].summary, to: '/projects' },
];

const Home = () => {
  const featured = profile.projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-24 pt-28 text-center">
        <Reveal className="flex flex-col items-center">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs text-fg-muted sm:text-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            {profile.availability} · {profile.status.split(' · ')[1]}
          </span>

          <h1 className="mt-8 font-display text-[clamp(3.25rem,13vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-accent sm:text-sm">
            {profile.headline} · MS CS @ USC
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-fg-muted sm:text-xl">
            I build <RotatingWord />
            <br className="sm:hidden" /> that hold up in production.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button to="/projects">
            View my work <ArrowIcon />
          </Button>
          <Button href={profile.resume} download="Suyash_Roy_Resume.pdf" variant="ghost">
            Download résumé
          </Button>
          <Button to="/contact" variant="ghost">
            Get in touch
          </Button>
        </Reveal>

        <Reveal delay={300} className="mt-16 w-full max-w-4xl">
          <dl className="glass grid grid-cols-2 divide-line overflow-hidden rounded-2xl sm:grid-cols-4 sm:divide-x">
            {profile.stats.map((s) => (
              <div key={s.label} className="px-4 py-5 sm:py-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-fg-subtle sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <a
          href="#now"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-fg-subtle transition-colors hover:text-fg"
        >
          Scroll
          <span className="relative h-9 w-5 rounded-full border border-line-strong">
            <span className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-fg-muted" />
          </span>
        </a>
      </section>

      {/* Right now */}
      <section id="now" className="scroll-mt-24 py-16">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Right now" title="What I'm working on" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {current.map((c, i) => (
              <Reveal key={c.kind} delay={i * 100}>
                <Card as={Link} to={c.to} className="group flex h-full flex-col p-6">
                  <Eyebrow>{c.kind}</Eyebrow>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-fg">{c.title}</h3>
                  <p className="text-sm text-fg-subtle">{c.sub}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">{c.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-fg">
                    Read more <ArrowIcon />
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Selected work"
              title="Recent projects"
              action={
                <Link to="/projects" className="group inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
                  All {profile.projects.length} projects <ArrowIcon />
                </Link>
              }
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <ProjectCard project={p} showHighlights={false} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <NextPage to="/about" label="About me" hint="The story, the skills and what I care about building." />
    </>
  );
};

export default Home;
