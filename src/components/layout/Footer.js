const currentYear = new Date().getFullYear();

const defaultSections = [
  {
    title: 'Discover',
    links: [
      { label: 'The Retreat', href: '/home#about' },
      { label: 'Suites & Villas', href: '/home#stays' },
      { label: 'Dining', href: '/home#dining' },
    ],
  },
  {
    title: 'Experiences',
    links: [
      { label: 'Wellness Rituals', href: '/home#wellness' },
      { label: 'Outdoor Trails', href: '/home#experiences' },
      { label: 'Cultural Journeys', href: '/home#culture' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: '+91 98765 43210', href: 'tel:+919876543210' },
      { label: 'hello@tapovan.com', href: 'mailto:hello@tapovan.com' },
      { label: 'Instagram', href: 'https://instagram.com/tapovan' },
    ],
  },
];

const Footer = ({ sections = defaultSections }) => {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">Tapovan</p>
          <p className="mt-3 text-sm text-emerald-200">
            Boutique mountain resort where sustainability, Ayurveda, and slow living meet.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-emerald-400">
            Retreat into nature
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              {section.title}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-white"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-emerald-900/40 bg-emerald-900/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-emerald-300 sm:flex-row">
          <span>© {currentYear} Tapovan Retreats. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

