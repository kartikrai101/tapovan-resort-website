const EnquiryBanner = ({
  title = 'Ready to design your Tapovan itinerary?',
  description = 'Share your travel window and wellness priorities. Our concierge will respond within 12 hours.',
  buttonLabel = 'Start Your Journey',
  buttonHref = '#contact',
}) => {
  return (
    <section
      id="enquire"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 px-6 py-16 text-white shadow-2xl"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] opacity-10" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
          Concierge
        </p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-emerald-50/90">{description}</p>
        <a
          href={buttonHref}
          className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-700 shadow-xl transition hover:bg-emerald-50"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default EnquiryBanner;

