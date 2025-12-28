import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StayShowcase from '../components/home/StayShowcase';
import ExperienceHighlights from '../components/home/ExperienceHighlights';
import EnquiryBanner from '../components/home/EnquiryBanner';
import LocationMap from '../components/home/LocationMap';
import Carousel from '../components/common/Carousel';
import parikramaImage from '../images/parikrama_image.jpg';
import caveImage from '../images/cave_image.jpg';
import nationalParkImage from '../images/national_park_image.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="space-y-12">
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
                Tapovan Resort is a luxury retreat nestled in the sacred hills of Chitrakoot,
                Uttar Pradesh. Where Lord Rama once walked, we offer a sanctuary that blends
                ancient spiritual heritage with contemporary luxury. Designed with
                biophilic architecture, we integrate Ayurveda, mindful cuisine, and purposeful
                excursions to help guests reconnect with nature and inner peace.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { stat: 'Sacred', label: 'Mandakini River ghats' },
                { stat: '15', label: 'Private suites & villas' },
                { stat: '24/7', label: 'Spiritual wellness concierge' },
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
              Explore Chitrakoot
            </p>
            <h2 className="font-serif text-3xl text-emerald-950">
              Where history, nature, and mythology converge
            </h2>
            <p className="text-lg text-slate-600">
              Discover the rich tapestry of Chitrakoot through spiritual exploration, natural wonders, 
              historical sites, and wildlife encounters. From sacred parikramas to ancient caves, 
              from temple visits to jungle safaris, immerse yourself in the timeless beauty of this 
              legendary land.
            </p>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li>• Spiritual walks: Kamadgiri Parikrama and Ramghat rituals</li>
              <li>• Natural wonders: Gupt Godavari Caves, Hanuman Dhara, Sphatik Shila</li>
              <li>• Historical sites: Bharat Milap Temple and Kalinjar Fort</li>
              <li>• Wildlife adventures: Panna National Park safaris and Janaki Kund serenity</li>
            </ul>
          </div>
          {(() => {
            const exploreItems = [
              { label: 'Kamadgiri Parikrama', image: parikramaImage },
              { label: 'Gupt Godavari Caves', image: caveImage },
              { label: 'Panna National Park', image: nationalParkImage },
              { label: 'Bharat Milap Temple', image: parikramaImage },
            ];
            
            return (
              <>
                {/* Mobile Carousel */}
                <Carousel
                  items={exploreItems}
                  renderItem={(item) => (
                    <figure className="relative h-48 overflow-hidden rounded-3xl bg-slate-200 text-white">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                      <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-sm">
                        {item.label}
                      </figcaption>
                    </figure>
                  )}
                  className="flex-1"
                />
                
                {/* Desktop Grid */}
                <div className="hidden flex-1 gap-4 sm:grid sm:grid-cols-2">
                  {exploreItems.map((item) => (
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
              </>
            );
          })()}
        </section>

        <div className="mx-auto max-w-6xl px-6 pb">
          <EnquiryBanner />
        </div>

        <LocationMap />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

