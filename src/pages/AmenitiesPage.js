import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AmenitiesHero from '../components/amenities/AmenitiesHero';
import AmenityCategories from '../components/amenities/AmenityCategories';
import SustainabilityShowcase from '../components/amenities/SustainabilityShowcase';
import EnquiryBanner from '../components/home/EnquiryBanner';
import AboutHero from '../components/about/AboutHero';

const AmenitiesPage = () => (
  <div className="min-h-screen bg-emerald-50/40">
    <Header />
    <main className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <AboutHero />
      {/* <AmenitiesHero />
      <AmenityCategories />
      <section className="rounded-3xl bg-white px-6 py-10 shadow-xl shadow-emerald-100">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Signature services
            </p>
            <h2 className="mt-4 font-serif text-3xl text-emerald-950">
              Concierge for purposeful travel
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our team can arrange helicopter landings, private mandala ceremonies, Ayurvedic
              detoxes, or silent treks tailored to your intentions.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-sm text-slate-700">
            <p className="font-semibold text-emerald-900">Available on request</p>
            <ul className="mt-4 space-y-2">
              {[
                'Childcare & mindfulness camps',
                'Pet-friendly forest cabins',
                'Executive remote-work suites',
                'Accessibility mobility guides',
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SustainabilityShowcase />
      <EnquiryBanner title="Need a bespoke amenity? Let us craft it with you" /> */}
    </main>
    <Footer />
  </div>
);

export default AmenitiesPage;


