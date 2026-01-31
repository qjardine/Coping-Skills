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
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">DBT Coping Skills</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-auto">
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
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Outside Header, Right-Aligned */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop to close menu when clicking outside */}
          <div
            className="fixed inset-0 bg-black/20 z-[55] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu Dropdown */}
          <div className="fixed top-14 right-4 z-[60] md:hidden">
            <div className="bg-white border-b border-l border-r shadow-lg min-w-[200px] rounded-b-lg">
              <nav className="flex flex-col items-end space-y-1 py-2 px-4">
                {headerNavLinks.map(({ href, title }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-4 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors w-full text-right rounded"
                  >
                    {title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

