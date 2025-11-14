import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StayShowcase from '../components/home/StayShowcase';
import ExperienceHighlights from '../components/home/ExperienceHighlights';
import EnquiryBanner from '../components/home/EnquiryBanner';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="space-y-20">
        <HeroSection />

        <section
          id="about"
          className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-16 shadow-xl shadow-emerald-100/60"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
                Philosophy
              </p>
              <h2 className="font-serif text-3xl text-emerald-950">
                Slow down and re-align with nature&apos;s pace
              </h2>
              <p className="text-lg text-slate-600">
                Tapovan Resort is a boutique retreat nestled in the forested hills of Chitrakoot,
                Madhya Pradesh. Designed with
                biophilic architecture, we integrate Ayurveda, mindful cuisine, and purposeful
                excursions to help guests reset.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { stat: '38°C', label: 'Natural hot springs' },
                { stat: '15', label: 'Private suites & villas' },
                { stat: '24/7', label: 'Wellness concierge' },
                { stat: '100%', label: 'Locally sourced produce' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-center"
                >
                  <p className="font-serif text-3xl text-emerald-900">{item.stat}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StayShowcase />
        <ExperienceHighlights />

        <section
          id="wellness"
          className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-white px-6 py-16 lg:flex-row lg:items-center"
        >
          <div className="space-y-6 lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
              Wellness Atelier
            </p>
            <h2 className="font-serif text-3xl text-emerald-950">
              Ayurveda meets contemporary diagnostics
            </h2>
            <p className="text-lg text-slate-600">
              Work with resident Ayurvedic doctors and nutritionists to build a ritual that follows
              you home. Each program blends pulse diagnosis, yoga nidra, sound therapy, and curated
              menus.
            </p>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li>• Personalized dosha meals crafted with our organic farm produce</li>
              <li>• Riverstone spa rooms with copper soaking tubs</li>
              <li>• Nightly fireside satsang with guest philosophers</li>
            </ul>
          </div>
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {[
              { label: 'Sound baths', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80' },
              { label: 'Yoga pavilion', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80' },
              { label: 'Herbal apothecary', image: 'https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?auto=format&fit=crop&w=600&q=80' },
              { label: 'Thermal suites', image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=600&q=80' },
            ].map((item) => (
              <figure
                key={item.label}
                className="relative h-48 overflow-hidden rounded-3xl bg-slate-200 text-white"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-sm">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-white px-6 py-16"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-3xl text-emerald-950">Connect with concierge</h2>
              <p className="mt-4 text-lg text-slate-600">
                Reach us for custom itineraries, group bookings, or wellness residencies.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <p>📞 +91 98765 43210</p>
                <p>✉️ journeys@tapovan.com</p>
                <p>📍 Tapovan Resort, Chitrakoot District, Madhya Pradesh</p>
              </div>
            </div>
            <form className="space-y-4">
              {[
                { label: 'Full Name', type: 'text', name: 'name' },
                { label: 'Email Address', type: 'email', name: 'email' },
                { label: 'Travel Window', type: 'text', name: 'dates' },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-sm font-semibold text-emerald-900">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-4 py-3 text-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900">Intentions</label>
                <textarea
                  className="w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-4 py-3 text-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  rows="4"
                  placeholder="Wellness goals, group size, interests..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 pb-20">
          <EnquiryBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

