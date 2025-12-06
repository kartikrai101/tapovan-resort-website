const SustainabilityShowcase = ({
  title = 'Sustainability amenities',
  points = [
    { label: 'Rainwater spa circuit', detail: 'Mineral pools fed via harvested monsoon water.' },
    { label: 'Zero-waste pantry', detail: 'On-site composting and refill pantry for guests.' },
    { label: 'Electric mobility hub', detail: 'Shuttle fleet powered by solar micro-grid.' },
  ],
}) => (
  <section className="rounded-3xl bg-emerald-950 px-6 py-12 text-white shadow-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Regeneration</p>
    <h2 className="mt-4 font-serif text-3xl">{title}</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {points.map((point) => (
        <article key={point.label} className="rounded-2xl bg-emerald-900/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Feature</p>
          <h3 className="mt-2 text-xl font-semibold">{point.label}</h3>
          <p className="mt-3 text-sm text-emerald-100">{point.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default SustainabilityShowcase;


