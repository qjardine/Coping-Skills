'use client';

import { useState } from 'react';
import Link from 'next/link';

const headerNavLinks = [
  { href: '/', title: 'Skills Flowchart' },
  { href: '/pages/crisis', title: 'Crisis Skills' },
  { href: '/pages/about', title: 'About the Skills' },
  { href: '/pages/landing-page', title: 'Landing Page' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between" style={{ maxWidth: '1000px', marginLeft: '2em' }}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">DBT Coping Skills</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-auto" style={{ marginRight: '2em' }}>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {headerNavLinks.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground/60 hover:text-foreground/80 ml-auto"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur border-b md:hidden">
            <nav className="container py-4 space-y-4 flex flex-col items-end" style={{ maxWidth: '1000px', marginLeft: '2em', marginRight: '2em' }}>
              {headerNavLinks.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 text-right"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

