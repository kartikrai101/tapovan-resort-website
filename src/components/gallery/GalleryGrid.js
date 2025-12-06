const GalleryGrid = ({
  images = [
    { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', label: 'River suites at dusk' },
    { src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80', label: 'Forest kitchen' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', label: 'Wellness pavilion' },
    { src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80', label: 'Monsoon trail' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80', label: 'Sacred fireside' },
    { src: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&w=900&q=80', label: 'Glasshouse residence' },
  ],
}) => (
  <section className="grid gap-6 md:grid-cols-2">
    {images.map((image, index) => (
      <figure
        key={image.label}
        className={`relative overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-emerald-100 ${
          index === 0 ? 'md:row-span-2' : ''
        }`}
      >
        <img src={image.src} alt={image.label} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 text-sm text-white">
          {image.label}
        </figcaption>
      </figure>
    ))}
  </section>
);

export default GalleryGrid;


