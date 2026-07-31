import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NeoCard } from './NeoCard';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface VenueMapProps {
  lat: number;
  lng: number;
  venueName?: string;
  address?: string;
}

export function VenueMap({ lat, lng, venueName, address }: VenueMapProps) {
  if (!lat || !lng) return null;

  return (
    <NeoCard className="w-full h-[400px] md:h-[500px] p-0 !overflow-hidden">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
        key={`${lat}-${lng}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <div className="font-heading font-bold text-sm">{venueName || 'Venue'}</div>
            {address && <div className="font-body text-xs">{address}</div>}
          </Popup>
        </Marker>
      </MapContainer>
    </NeoCard>
  );
}
