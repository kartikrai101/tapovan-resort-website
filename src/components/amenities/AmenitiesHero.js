const AmenitiesHero = ({
  title = 'Space to breathe, move, and restore',
  description = 'Every amenity at Tapovan Resort is crafted to mirror the rhythm of Chitrakoot—slow mornings, mindful movement, and fireside storytelling nights.',
  badges = ['Wellness Atelier', 'Riverside Dining', 'Mindful Mobility'],
}) => (
  <section className="rounded-3xl bg-white px-6 py-16 shadow-xl shadow-emerald-100/70">
    <div className="mx-auto max-w-5xl space-y-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
        Amenities
      </p>
      <h1 className="font-serif text-4xl text-emerald-950 sm:text-5xl">{title}</h1>
      <p className="text-lg text-slate-600">{description}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {badges.map((badge) => (
          <span key={badge} className="rounded-full border border-emerald-200 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-600">
            {badge}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesHero;


