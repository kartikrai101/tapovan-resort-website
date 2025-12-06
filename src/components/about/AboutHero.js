const AboutHero = ({
  eyebrow = 'Our Story',
  title = 'Rooted in Chitrakoot, inspired by ancient wisdom',
  description = `Tapovan Resort began as a regenerative hospitality experiment, blending ancient
  Ayurvedic wisdom with contemporary slow-travel design. Our mission is to offer intentional stays
  that honour the sacred forests, the Mandakini River, and the spiritual heritage of Chitrakoot.`,
  stats = [
    { label: 'Acres of protected forest', value: '42' },
    { label: 'Local artisans employed', value: '67' },
    { label: 'Wellness residencies hosted', value: '180+' },
  ],
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 px-6 py-20 text-white shadow-2xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        <h1 className="font-serif text-4xl sm:text-5xl">Coming Soon...</h1>
      </div>
      {/* Commented out for future use:
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3),_transparent_60%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="space-y-6 lg:w-3/5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
          <p className="text-lg text-emerald-50/90">{description}</p>
        </div>
        <div className="grid flex-1 gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur"
            >
              <p className="font-serif text-3xl">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-emerald-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
};

export default AboutHero;

