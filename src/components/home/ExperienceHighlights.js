const ExperienceHighlights = ({
  title = 'Designed Immersions',
  subtitle = 'Each itinerary is custom-layered with nature, culture, and restoration.',
  experiences = [
    {
      label: 'Forest Bathing',
      description: 'Guided cedar forest walks with mindfulness prompts and locally brewed teas.',
      icon: '🌲',
    },
    {
      label: 'Ayurvedic Therapies',
      description: 'Doctor-led consultations, dosha balancing meals, and steam rituals.',
      icon: '🧘',
    },
    {
      label: 'Mountain Excursions',
      description: 'Sunrise hikes, temple visits, and rafting experiences curated by local naturalists.',
      icon: '🏔️',
    },
  ],
}) => {
  return (
    <section id="experiences" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Crafted Journeys
          </p>
          <h2 className="mt-4 font-serif text-4xl text-emerald-950">{title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.label}
              className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-8 shadow-sm shadow-emerald-100 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                {experience.icon}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-emerald-900">{experience.label}</h3>
              <p className="mt-4 text-sm text-slate-600">{experience.description}</p>
              <button className="mt-6 text-sm font-semibold text-emerald-600">
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;

