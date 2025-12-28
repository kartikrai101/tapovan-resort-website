import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = () => {
  // Coordinates: 25°14'06.9"N 80°58'32.8"E
  // Converted to decimal: 25.23525, 80.97578
  const position = [25.23525, 80.97578];

  return (
    <section id="location" className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
          Location
        </p>
        <h2 className="font-serif text-3xl text-emerald-950">
          Find Us in Chitrakoot
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Nestled in the sacred hills of Chitrakoot, Tapovan Resort offers a serene escape
          where ancient spirituality meets modern luxury.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl shadow-xl shadow-emerald-100/60">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
          scrollWheelZoom={true}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-center">
                <p className="font-semibold text-emerald-900">Tapovan Resort</p>
                <p className="mt-1 text-sm text-slate-600">Chitrakoot, Uttar Pradesh</p>
                <p className="mt-1 text-xs text-slate-500">
                  25°14'06.9"N 80°58'32.8"E
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-emerald-700">Coordinates:</span>{' '}
          25°14'06.9"N 80°58'32.8"E
        </p>
        <a
          href={`https://www.google.com/maps/place/Tapovan+resort/@25.2352145,80.9755942,20.52z/data=!4m12!1m5!3m4!2zMjXCsDE0JzA2LjkiTiA4MMKwNTgnMzIuOCJF!8m2!3d25.23525!4d80.97578!3m5!1s0x3984af00220ec659:0xb09ad7528867e845!8m2!3d25.2352361!4d80.9756759!16s%2Fg%2F11yjbx2gkm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
        >
          Open in Google Maps →
        </a>
      </div>
    </section>
  );
};

export default LocationMap;
