import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { NeoCard } from './NeoCard';

// Fix Leaflet default icon issue in Vite
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

const VENUE_COORDS: LatLngExpression = [31.5204, 74.3587]; // Gulberg III, Lahore

export function VenueMap() {
  return (
    <NeoCard className="w-full h-[400px] md:h-[500px] p-0 !overflow-hidden">
      <MapContainer 
        center={VENUE_COORDS} 
        zoom={15} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={VENUE_COORDS}>
          <Popup>
            <div className="font-heading font-bold text-sm">Indigo Heights</div>
            <div className="font-body text-xs">3 C3, Near Jehan Road, Gulberg III, Lahore</div>
          </Popup>
        </Marker>
      </MapContainer>
    </NeoCard>
  );
}
