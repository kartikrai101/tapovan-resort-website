const GalleryHero = ({
  title = 'Stories etched in light',
  description = 'From monsoon-soaked forest paths to candle-lit Mandakini ghat rituals, step into the visual archive of Tapovan Resort in Chitrakoot.',
  tags = ['Suites', 'Nature', 'Cuisine', 'Wellness', 'Heritage'],
}) => (
  <section className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 px-6 py-16 text-white shadow-2xl">
    <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">
          Gallery
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
        <p className="text-lg text-emerald-100/90">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-emerald-300/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryHero;


