import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface Location {
  lat: number;
  lng: number;
  name: string;
  status?: string;
}

interface ShipmentMapProps {
  currentLocation: Location;
  destination: Location;
  waypoints?: Location[];
  zoom?: number;
}

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function ShipmentMap({ currentLocation, destination, waypoints = [], zoom = 4 }: ShipmentMapProps) {
  const positions = [currentLocation, ...waypoints, destination];
  const center = {
    lat: (currentLocation.lat + destination.lat) / 2,
    lng: (currentLocation.lng + destination.lng) / 2
  };

  return (
    <MapContainer 
      center={[center.lat, center.lng]} 
      zoom={zoom} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {positions.map((pos, idx) => (
        <Marker 
          key={idx} 
          position={[pos.lat, pos.lng]} 
          icon={defaultIcon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{pos.name}</h3>
              {pos.status && <p className="text-sm text-gray-600">{pos.status}</p>}
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline 
        positions={positions.map(pos => [pos.lat, pos.lng])}
        color="blue"
        weight={3}
        opacity={0.7}
      />
    </MapContainer>
  );
}