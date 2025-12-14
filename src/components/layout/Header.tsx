import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-space-black/80 backdrop-blur-md border-b border-space-blue">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-text-primary hover:text-electric-blue transition-colors">
          Lucas Herrera
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-dark border-t border-space-blue">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Navigation />
          </div>
        </div>
      )}
    </header>
  );
}
