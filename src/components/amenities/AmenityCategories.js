const AmenityCategories = ({
  categories = [
    {
      title: 'Wellness Atelier',
      items: ['Ayurvedic consultation pods', 'Himalayan salt saunas', 'Sound bath dome', 'Forest yoga decks'],
      icon: '🧘',
    },
    {
      title: 'Dining & Culinary',
      items: ['Mandakini river restaurant', 'Millet bakery', 'Tea alchemy bar', 'Chef’s table with local farmers'],
      icon: '🥗',
    },
    {
      title: 'Exploration Desk',
      items: ['Guided forest cycles', 'Bundeli heritage walks', 'Night sky observatory', 'Artisanal craft studio'],
      icon: '🏞️',
    },
  ],
}) => (
  <section className="grid gap-6 md:grid-cols-3">
    {categories.map((category) => (
      <article key={category.title} className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-inner shadow-white">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl">
          {category.icon}
        </div>
        <h3 className="mt-4 font-serif text-2xl text-emerald-950">{category.title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {category.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default AmenityCategories;


