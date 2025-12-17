import tapovanImg3 from '../../images/tapovan_img3.jpeg';
import tapovanImg4 from '../../images/tapovan_img4.jpeg';
import luxuryBedroomImg from '../../images/tapovan_resort_bedroom_image1.png';
import tentImg from '../../images/tapovan_resort_tent_image1.png';
import diningIndoorImg from '../../images/tapovan_resort_indoor_dining1.png';
import diningOutdoorImg from '../../images/tapovan_resort_outdoor_dining1.png';
import swimmingPoolImg from '../../images/tapovan_swimming_pool_image1.png';
import spaWellnessImg from '../../images/tapovan_resort_spa_image.png';
import saunaImg from '../../images/tapovan_resort_sauna_image.png';
import meditationSpacesImg from '../../images/tapovan_resort_meditaion_image.png';
import gamingZoneImg from '../../images/tapovan_resort_gaming_zone_image.png';
import openAirTheatreImg from '../../images/tapovan_resort_open_air_theatre_image.png';
import masterImg from '../../images/tapovan_resort_master_image.jpeg';
import luxuryBedroomImg2 from '../../images/tapovan_resort_luxury_bedroom_image.png';
import Carousel from '../common/Carousel';

const ComprehensiveAmenities = () => {
  const accommodationAmenities = [
    {
      title: 'Luxurious Bedrooms',
      description: 'Spacious, elegantly designed bedrooms with panoramic views of the surrounding nature',
      image: luxuryBedroomImg2,
      icon: '🛏️',
    },
    {
      title: 'Suite Rooms',
      description: 'Premium suite accommodations with separate living areas and private balconies',
      image: luxuryBedroomImg,
      icon: '🏨',
    },
    {
      title: 'Heritage Cottages',
      description: 'Traditional-style cottages blending local architecture with modern comforts',
      image: masterImg,
      icon: '🏡',
    },
    {
      title: 'Glamping Tents',
      description: 'Outside tent accommodations for an immersive nature experience under the stars',
      image: tentImg,
      icon: '⛺',
    },
  ];

  const diningAmenities = [
    {
      title: 'Indoor Dining',
      description: 'Elegant indoor restaurant serving farm-to-table cuisine with local flavors',
      image: diningIndoorImg,
      icon: '🍽️',
    },
    {
      title: 'Outdoor Dining',
      description: 'Al fresco dining experiences with scenic views and ambient natural setting',
      image: diningOutdoorImg,
      icon: '🌳',
    },
  ];

  const wellnessAmenities = [
    {
      title: 'Swimming Pool',
      description: 'Serene infinity pool overlooking the natural landscape for relaxation and recreation',
      image: swimmingPoolImg,
      icon: '🏊',
    },
    {
      title: 'Spa & Wellness',
      description: 'Full-service spa offering Ayurvedic treatments, massages, and holistic therapies',
      image: spaWellnessImg,
      icon: '💆',
    },
    {
      title: 'Sauna',
      description: 'Traditional sauna facilities for detoxification and deep relaxation',
      image: saunaImg,
      icon: '🧖',
    },
    {
      title: 'Meditation Spaces',
      description: 'Dedicated meditation areas and yoga decks for mindfulness and spiritual practice',
      image: meditationSpacesImg,
      icon: '🧘',
    },
  ];

  const recreationAmenities = [
    {
      title: 'Gaming Zone',
      description: 'Indoor entertainment area with board games, billiards, and recreational activities',
      image: gamingZoneImg,
      icon: '🎮',
    },
    {
      title: 'Open Air Theatre',
      description: 'Outdoor amphitheater for cultural performances, movie nights, and gatherings',
      image: openAirTheatreImg,
      icon: '🎭',
    },
    {
      title: 'Green Park',
      description: 'Expansive landscaped gardens and park areas for leisurely walks and relaxation',
      image: tapovanImg3,
      icon: '🌿',
    },
    {
      title: 'Organic Farming',
      description: 'On-site organic farm where guests can learn about sustainable agriculture practices',
      image: tapovanImg4,
      icon: '🌾',
    },
  ];

  const AmenityCard = ({ amenity, index }) => (
    <article
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/60 hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={amenity.image}
          alt={amenity.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/50 to-emerald-950/20" />
        <div className="absolute bottom-4 left-6 right-6">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25 backdrop-blur-md text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
            {amenity.icon}
          </div>
          <h3 className="font-serif text-2xl font-semibold text-white drop-shadow-lg">{amenity.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
          {amenity.description}
        </p>
      </div>
    </article>
  );

  const SectionHeader = ({ title, subtitle, icon }) => (
    <div className="mb-12 text-center">
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-4xl shadow-lg shadow-emerald-100/50">
        {icon}
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">{subtitle}</p>
      <h2 className="mt-4 font-serif text-4xl text-emerald-950 md:text-5xl">{title}</h2>
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
    </div>
  );


  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-white px-8 py-12 shadow-xl shadow-emerald-100/50">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Discover Our Amenities
          </p>
          <h2 className="mt-4 font-serif text-4xl text-emerald-950 md:text-5xl">
            Space to breathe, move, and restore
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Every amenity at Tapovan Resort is crafted to mirror the rhythm of Chitrakoot—slow mornings, 
            mindful movement, and fireside storytelling nights. From luxurious accommodations to wellness 
            facilities and recreational activities, experience a perfect blend of comfort and nature.
          </p>
        </div>
      </section>

      {/* Accommodation Amenities */}
      <section>
        <SectionHeader title="Accommodation" subtitle="Your Home Away From Home" icon="🏠" />
        {/* Mobile Carousel */}
        <Carousel
          items={accommodationAmenities}
          renderItem={(amenity, index) => <AmenityCard amenity={amenity} index={index} />}
        />
        {/* Desktop Grid */}
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
          {accommodationAmenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </section>

      {/* Dining Amenities */}
      <section>
        <SectionHeader title="Dining Experiences" subtitle="Culinary Delights" icon="🍴" />
        {/* Mobile Carousel */}
        <Carousel
          items={diningAmenities}
          renderItem={(amenity, index) => <AmenityCard amenity={amenity} index={index} />}
        />
        {/* Desktop Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {diningAmenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </section>

      {/* Wellness Amenities */}
      <section>
        <SectionHeader title="Wellness & Relaxation" subtitle="Rejuvenate Your Senses" icon="✨" />
        {/* Mobile Carousel */}
        <Carousel
          items={wellnessAmenities}
          renderItem={(amenity, index) => <AmenityCard amenity={amenity} index={index} />}
        />
        {/* Desktop Grid */}
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
          {wellnessAmenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </section>

      {/* Recreation Amenities */}
      <section>
        <SectionHeader title="Recreation & Activities" subtitle="Entertainment & Exploration" icon="🎪" />
        {/* Mobile Carousel */}
        <Carousel
          items={recreationAmenities}
          renderItem={(amenity, index) => <AmenityCard amenity={amenity} index={index} />}
        />
        {/* Desktop Grid */}
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
          {recreationAmenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveAmenities;
