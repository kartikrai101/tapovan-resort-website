import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const defaultLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Stays', href: '/home#stays' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Booking', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

const Header = ({
  logoText = 'Tapovan Resort',
  tagline = 'Chitrakoot Hideaway',
  navLinks = defaultLinks,
  cta = { label: 'Plan Stay', href: '/home#enquire' },
  sticky = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`border-b border-emerald-50 bg-white/90 backdrop-blur ${
        sticky ? 'sticky top-0 z-50' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/home" className="flex flex-col leading-tight text-emerald-900">
          <span className="font-serif text-2xl tracking-wide">{logoText}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors hover:text-emerald-600 ${
                  isActive ? 'text-emerald-600' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 md:block">
            Virtual Tour
          </button>
          <Link
            to={cta.href}
            className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 md:block"
          >
            {cta.label}
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-emerald-700 transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-emerald-700 transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-emerald-700 transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-emerald-50 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors hover:text-emerald-600 ${
                      isActive ? 'text-emerald-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-emerald-50 pt-4">
                <button className="rounded-full border border-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
                  Virtual Tour
                </button>
                <Link
                  to={cta.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
                >
                  {cta.label}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

