const HeroSection = ({
  title = 'Tapovan: Sanctuary in the Himalayas',
  subtitle = 'Immersive slow travel, forest bathing, and mindful hospitality.',
  highlights = [
    'Private suites overlooking the Ganges valley',
    'Farm-to-table organic cuisine',
    'Daily yoga and curated treks',
  ],
  primaryAction = { label: 'Explore Retreat', href: '/home#stays' },
  secondaryAction = { label: 'View Experiences', href: '/home#experiences' },
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.3),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-8 lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Himalayan Luxury Retreat
          </p>
          <h1 className="font-serif text-4xl text-emerald-950 sm:text-5xl">{title}</h1>
          <p className="text-lg text-slate-600">{subtitle}</p>

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href={primaryAction.href}
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              {primaryAction.label}
            </a>
            <a
              href={secondaryAction.href}
              className="rounded-full border border-emerald-100 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300"
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-4 lg:w-1/2">
          <div className="rounded-3xl bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center min-h-[18rem]" />
          <div className="rounded-3xl bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center min-h-[18rem]" />
          <div className="col-span-2 rounded-3xl bg-white/70 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Signature Ritual</p>
            <p className="mt-2 font-serif text-2xl text-emerald-900">Sunrise River Meditation</p>
            <p className="mt-4 text-slate-600">
              Begin with yogic breathing, followed by a curated breakfast featuring Himalayan superfoods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

