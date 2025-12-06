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
  cta = { label: 'Plan a Stay', href: '/home#enquire' },
  sticky = true,
}) => {
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
            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

