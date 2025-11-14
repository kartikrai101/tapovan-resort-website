const ValuesSection = ({
  eyebrow = 'Ethos',
  title = 'Principles that guide every stay',
  values = [
    {
      label: 'Regenerative Operations',
      description:
        'Closed-loop water systems, solar energy, and collaborations with Chitrakoot eco-guardians keep our footprint light.',
    },
    {
      label: 'Community Co-creation',
      description:
        '70% of our team belongs to nearby villages, and every guest experience is designed with local artisans.',
    },
    {
      label: 'Holistic Wellbeing',
      description:
        'From Ayurvedic consults to forest therapy, we design itineraries that honour the nervous system and spirit.',
    },
  ],
}) => (
  <section className="bg-emerald-950 py-20 text-white">
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl">{title}</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.label}
            className="rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 shadow-lg shadow-emerald-900/30"
          >
            <h3 className="text-xl font-semibold">{value.label}</h3>
            <p className="mt-4 text-sm text-emerald-100">{value.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;

