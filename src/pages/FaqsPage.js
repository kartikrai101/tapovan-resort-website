import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FaqHero from '../components/faqs/FaqHero';
import FaqList from '../components/faqs/FaqList';
import EnquiryBanner from '../components/home/EnquiryBanner';
import AboutHero from '../components/about/AboutHero';

const FaqsPage = () => (
  <div className="min-h-screen bg-emerald-50/40">
    <Header />
    <main className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <AboutHero />
      {/* <FaqHero />
      <FaqList />
      <section className="rounded-3xl bg-white px-6 py-10 shadow-xl shadow-emerald-100">
        <p className="text-lg font-semibold text-emerald-900">Still curious?</p>
        <p className="mt-2 text-sm text-slate-600">
          Email concierge@tapovan.com or WhatsApp +91 98765 43210 for immediate assistance.
        </p>
      </section>
      <EnquiryBanner title="Let us answer every detail of your Tapovan stay" /> */}
    </main>
    <Footer />
  </div>
);

export default FaqsPage;


