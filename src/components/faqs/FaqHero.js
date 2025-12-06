const FaqHero = ({
  title = 'Frequently asked questions',
  description = 'From planning seasonal visits to understanding our wellness programs, we gathered the answers you ask most.',
}) => (
  <section className="rounded-3xl bg-white px-6 py-16 text-center shadow-xl shadow-emerald-100">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">FAQs</p>
    <h1 className="mt-4 font-serif text-4xl text-emerald-950">{title}</h1>
    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{description}</p>
  </section>
);

export default FaqHero;


