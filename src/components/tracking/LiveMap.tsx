import React from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

interface LiveMapProps {
  currentLocation: Location;
  destinationLocation: Location;
}

export default function LiveMap({ currentLocation, destinationLocation }: LiveMapProps) {
  return (
    <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-semibold">Current Location</p>
              <p className="text-sm text-gray-600">{currentLocation.name}</p>
              <p className="text-xs text-gray-500">
                {currentLocation.latitude.toFixed(4)}°N, {currentLocation.longitude.toFixed(4)}°E
              </p>
            </div>
          </div>
          
          <div className="w-32 h-0.5 bg-gray-300 mx-auto relative">
            <div className="absolute inset-y-0 left-0 bg-orange-600 w-1/2"></div>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-blue-900" />
            <div>
              <p className="font-semibold">Destination</p>
              <p className="text-sm text-gray-600">{destinationLocation.name}</p>
              <p className="text-xs text-gray-500">
                {destinationLocation.latitude.toFixed(4)}°N, {destinationLocation.longitude.toFixed(4)}°E
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}