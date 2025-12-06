import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import EnquiryBanner from '../components/home/EnquiryBanner';
import AboutHero from '../components/about/AboutHero';

const GalleryPage = () => (
  <div className="min-h-screen bg-emerald-50/40">
    <Header />
    <main className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <AboutHero />
      {/* <GalleryHero />
      <GalleryGrid />
      <section className="rounded-3xl bg-white px-6 py-10 text-center shadow-xl shadow-emerald-100">
        <p className="text-lg text-slate-600">
          Looking for specific imagery for media or collaborations?
        </p>
        <a
          href="mailto:media@tapovan.com"
          className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Contact media desk
        </a>
      </section>
      <EnquiryBanner title="Plan a photo-forward experience at Tapovan Resort" /> */}
    </main>
    <Footer />
  </div>
);

export default GalleryPage;


