import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BookingHero from '../components/booking/BookingHero';
import BookingForm from '../components/booking/BookingForm';
import StayPackages from '../components/booking/StayPackages';
import EnquiryBanner from '../components/home/EnquiryBanner';
import AboutHero from '../components/about/AboutHero';

const BookingPage = () => (
  <div className="min-h-screen bg-emerald-50/40">
    <Header />
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
      <AboutHero />
      {/* <BookingHero />
      <section className="grid gap-10 rounded-3xl bg-white px-6 py-10 shadow-xl shadow-emerald-100 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Concierge form
          </p>
          <h2 className="mt-4 font-serif text-3xl text-emerald-950">Share your travel details</h2>
          <p className="mt-4 text-sm text-slate-600">
            We respond within 12 hours with availability, curated experiences, and transport options.
          </p>
          <p className="mt-6 text-sm text-emerald-600">
            Need urgent help? Call +91 98765 43210 (7am–11pm IST)
          </p>
        </div>
        <BookingForm />
      </section>
      <StayPackages />
      <EnquiryBanner title="Ready to confirm? Speak with our reservation team" /> */}
    </main>
    <Footer />
  </div>
);

export default BookingPage;


