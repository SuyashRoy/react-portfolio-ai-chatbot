import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import profile from '../data/profile.json';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const SunIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.35 15.35A9 9 0 0 1 8.65 3.65 9 9 0 1 0 20.35 15.35Z" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const iconButton =
    'grid h-10 w-10 place-items-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg';

  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-2 pl-4 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? 'glass border-line shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
            : 'border-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Suyash Roy, home">
          <img src="/favicon.svg" alt="" className="h-7 w-7 rounded-lg" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-fg">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive ? 'bg-surface-hover text-fg' : 'text-fg-muted hover:text-fg'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button onClick={toggleTheme} className={iconButton} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={profile.resume}
            download="Suyash_Roy_Resume.pdf"
            className="hidden h-10 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Résumé
          </a>
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className={`${iconButton} lg:hidden`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-2 shadow-2xl lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-base transition-colors ${
                  isActive ? 'bg-surface-hover text-fg' : 'text-fg-muted hover:text-fg'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={profile.resume}
            download="Suyash_Roy_Resume.pdf"
            className="mt-1 block rounded-2xl bg-fg px-4 py-3 text-center text-base font-medium text-bg sm:hidden"
          >
            Download résumé
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
