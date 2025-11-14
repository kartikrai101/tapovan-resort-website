import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import HeritageTimeline from '../components/about/HeritageTimeline';
import ValuesSection from '../components/about/ValuesSection';
import LeadershipShowcase from '../components/about/LeadershipShowcase';
import EnquiryBanner from '../components/home/EnquiryBanner';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-emerald-50/40">
      <Header />
      <main className="mx-auto max-w-6xl space-y-16 px-6 py-12">
        <AboutHero />

        <section className="grid gap-10 rounded-3xl bg-white px-6 py-12 shadow-xl shadow-emerald-100/70 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Sense of place
            </p>
            <h2 className="font-serif text-3xl text-emerald-950">
              Chitrakoot&apos;s sacred forests inspire everything we craft
            </h2>
            <p className="text-lg text-slate-600">
              Tapovan Resort overlooks the lush Mandakini river valley, where sages once meditated.
              We work with local historians and forest guardians to preserve biodiversity while
              welcoming mindful travelers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Mandakini river walks', detail: 'Guided sunrise meditations by the ghats.' },
              { title: 'Bundeli craft ateliers', detail: 'Weaving & terracotta studios on property.' },
              { title: 'Forest classrooms', detail: 'Citizen science sessions for young guests.' },
              { title: 'Sacred cuisine labs', detail: 'Millet-forward menus & herbal ferment workshops.' },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                <h3 className="text-base font-semibold text-emerald-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <HeritageTimeline />

        <ValuesSection />

        <section className="grid gap-8 rounded-3xl bg-white px-6 py-12 shadow-xl shadow-emerald-100 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Collaborations
            </p>
            <h2 className="mt-4 font-serif text-3xl text-emerald-950">
              Partnering with knowledge keepers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our residency program invites botanists, wellness mentors, poets, and natural builders
              to co-create healing journeys for guests. Each quarter, we offer a community clinic
              for the villages around Tapovan Resort.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-emerald-950/90 p-6 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Current resident</p>
              <p className="mt-2 text-xl font-semibold">Dr. Isha Kulkarni</p>
              <p className="text-sm text-emerald-100">Forest ethnobotanist</p>
            </div>
            <p className="text-sm text-emerald-50">
              Leading workshops on sacred groves, edible florals, and herbal tonics that support
              circadian rhythm regulation.
            </p>
            <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore residencies
            </button>
          </div>
        </section>

        <LeadershipShowcase />

        <EnquiryBanner title="Plan an immersive Tapovan Resort learning journey" />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

