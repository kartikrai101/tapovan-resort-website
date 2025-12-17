import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import ComprehensiveAmenities from '../components/amenities/ComprehensiveAmenities';
import EnquiryBanner from '../components/home/EnquiryBanner';

const AmenitiesPage = () => (
  <div className="min-h-screen bg-emerald-50/40">
    <Header />
    <main className="mx-auto max-w-7xl space-y-16 px-6 py-8">
      {/* Coming Soon Banner - shifted with adjusted spacing */}
      {/* <div className="pt-4">
        <AboutHero />
      </div> */}
      
      {/* Comprehensive Amenities Showcase */}
      <div className="pb-8">
        <ComprehensiveAmenities />
      </div>

      {/* Enquiry Banner */}
      <div className="pb-12">
        <EnquiryBanner title="Need a bespoke amenity? Let us craft it with you" />
      </div>
    </main>
    <Footer />
  </div>
);

export default AmenitiesPage;


