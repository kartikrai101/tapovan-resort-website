const HeritageTimeline = ({
  heading = 'Milestones of Tapovan Resort',
  timeline = [
    {
      year: '2008',
      title: 'Origins in Chitrakoot',
      detail:
        'Founded by naturalists Kavya and Arjun Mehra who transformed ancestral farmland into a conservation-first retreat.',
    },
    {
      year: '2014',
      title: 'Wellness Atelier Opens',
      detail:
        'Built the Ayurveda pavilion, sourcing botanicals from cooperative women farmers in nearby hamlets.',
    },
    {
      year: '2019',
      title: 'Regenerative Design Upgrade',
      detail:
        'Introduced passive solar villas, rainwater harvesting, and a zero-waste kitchen program.',
    },
    {
      year: '2024',
      title: 'Residencies & Cultural Labs',
      detail:
        'Launched artist residencies and partnered with local folk musicians to curate evening baithaks.',
    },
  ],
}) => (
  <section className="mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-white px-6 py-16">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
        Legacy
      </p>
      <h2 className="mt-4 font-serif text-3xl text-emerald-950">{heading}</h2>
    </div>

    <div className="mt-12 space-y-8 border-l border-emerald-100 pl-6">
      {timeline.map((entry) => (
        <div key={entry.year} className="relative rounded-2xl bg-emerald-50/70 p-6">
          <span className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200 bg-white text-xs font-bold text-emerald-600">
            {entry.year.slice(-2)}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            {entry.year}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-emerald-900">{entry.title}</h3>
          <p className="mt-3 text-sm text-slate-600">{entry.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HeritageTimeline;

