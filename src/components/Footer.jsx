import React from 'react';
import profile from '../data/profile.json';
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui';

const Footer = () => (
  <footer className="relative z-10 mt-24 border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-fg-subtle sm:flex-row sm:px-6">
      <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      <div className="flex items-center gap-1">
        {[
          { href: `mailto:${profile.links.email}`, label: 'Email', Icon: MailIcon },
          { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
          { href: profile.links.github, label: 'GitHub', Icon: GitHubIcon },
        ].map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface-hover hover:text-fg"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
