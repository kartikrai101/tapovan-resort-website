const StayPackages = ({
  packages = [
    {
      name: 'Revive (3 nights)',
      details: ['Suite stay', 'Daily yoga & pranayama', 'Ayurvedic meals', 'Mandakini ghat meditation'],
      price: '₹42,000 + taxes',
    },
    {
      name: 'Retreat (5 nights)',
      details: ['Villas with plunge pool', 'Personal wellness coach', 'Sound therapy', 'Chitrakoot excursions'],
      price: '₹72,000 + taxes',
      highlight: 'Popular',
    },
    {
      name: 'Residency (7+ nights)',
      details: ['Heritage residence', 'Custom diagnostics', 'Temple & heritage tours', 'Private chef dinners'],
      price: 'On request',
    },
  ],
}) => (
  <section className="grid gap-6 md:grid-cols-3">
    {packages.map((pkg) => (
      <article
        key={pkg.name}
        className="flex flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm shadow-emerald-100"
      >
        {pkg.highlight && (
          <span className="mb-4 inline-flex w-max rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            {pkg.highlight}
          </span>
        )}
        <h3 className="font-serif text-2xl text-emerald-950">{pkg.name}</h3>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
          {pkg.details.map((detail) => (
            <li key={detail}>• {detail}</li>
          ))}
        </ul>
        <p className="mt-6 text-lg font-semibold text-emerald-700">{pkg.price}</p>
        <button className="mt-4 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400">
          Discuss plan
        </button>
      </article>
    ))}
  </section>
);

export default StayPackages;


