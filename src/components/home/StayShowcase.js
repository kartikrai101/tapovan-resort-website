import carouselImg1 from '../../images/tapovan_img1.jpeg';
import carouselImg4 from '../../images/tapovan_img4.jpeg';
import carouselImg5 from '../../images/tapovan_img2.jpeg';

const StayShowcase = ({
  stays = [
    {
      title: 'Greenery all around',
      description: 'Immerse yourself in lush tropical gardens, verdant landscapes, and nature\'s embrace with panoramic views of the surrounding forest canopy.',
      image: carouselImg1,
      tag: 'Most Loved',
    },
    {
      title: 'Swimming Pool',
      description: 'Take a refreshing dip in our pristine pool surrounded by lush greenery, with poolside lounging areas and stunning views of the natural landscape.',
      image: carouselImg4,
      tag: 'Secluded',
    },
    {
      title: 'Heritage Residences',
      description: 'Panoramic views of Chitrakoot hills and stargazing domes with telescope concierge for celestial meditation.',
      image:carouselImg5,
      tag: 'New',
    },
  ],
}) => {
  return (
    <section id="stays" className="bg-emerald-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Stays
            </p>
            <h2 className="mt-4 font-serif text-4xl">Residences Rooted in Nature</h2>
            <p className="mt-4 max-w-2xl text-lg text-emerald-100">
              Crafted with reclaimed wood, natural stone, and passive cooling to softly blend with
              the surrounding forest.
            </p>
          </div>
          <button className="rounded-full border border-emerald-600 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-white hover:text-white">
            Download brochure
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stays.map((stay) => (
            <article key={stay.title} className="group overflow-hidden rounded-3xl bg-emerald-900">
              <div
                className="h-60 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${stay.image})` }}
              />
              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full bg-emerald-800 px-3 py-1 text-xs uppercase tracking-widest text-emerald-200">
                  {stay.tag}
                </span>
                <h3 className="font-serif text-2xl">{stay.title}</h3>
                <p className="text-sm text-emerald-100">{stay.description}</p>
                <button className="text-sm font-semibold text-emerald-200 transition hover:text-white">
                  View details →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayShowcase;

