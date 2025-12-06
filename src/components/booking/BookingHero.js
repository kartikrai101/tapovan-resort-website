const BookingHero = ({
  title = 'Reserve your Tapovan journey',
  description = 'Share your dates, travel intentions, and stay style so our concierge can craft the perfect itinerary in Chitrakoot.',
}) => (
  <section className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 px-6 py-16 text-white shadow-2xl">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">
        Booking
      </p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-emerald-50">{description}</p>
    </div>
  </section>
);

export default BookingHero;


