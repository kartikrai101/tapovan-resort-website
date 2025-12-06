import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <AboutHero />
        {/* <section className="rounded-3xl border border-emerald-100 bg-white px-6 py-16">
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
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

