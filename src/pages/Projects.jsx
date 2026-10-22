import React, { useState } from 'react';
import profile from '../data/profile.json';
import ProjectCard from '../components/ProjectCard';
import { Container, NextPage, PageHeader, Reveal, SectionTitle } from '../components/ui';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'data', label: 'Data & Geospatial' },
  { id: 'web', label: 'Web & Full-stack' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);
  const visible = (list) => (filter === 'all' ? list : list.filter((p) => p.category === filter));

  const shownFeatured = visible(featured);
  const shownRest = visible(rest);

  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built">
        Agents, retrieval systems, forecasting platforms and the occasional side project.
      </PageHeader>

      <Container>
        <Reveal className="mb-10 flex justify-center">
          <div className="glass inline-flex max-w-full gap-1 overflow-x-auto rounded-full p-1" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                  filter === f.id ? 'bg-fg text-bg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {shownFeatured.length > 0 && (
          <section>
            <SectionTitle eyebrow="Featured" title="Flagship work" />
            <div className="grid gap-5 md:grid-cols-2">
              {shownFeatured.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 100}>
                  <ProjectCard project={p} tall />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {shownRest.length > 0 && (
          <section className={shownFeatured.length ? 'mt-20' : ''}>
            <SectionTitle eyebrow="More" title="Other projects" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {shownRest.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 80}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </Container>

      <NextPage to="/contact" label="Let's talk" hint="Hiring, collaborating, or just curious about something here." />
    </>
  );
};

export default Projects;
