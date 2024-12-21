import React from 'react';
import { MapPin } from 'lucide-react';

interface TrackingMapProps {
  currentLocation: string;
}

export default function TrackingMap({ currentLocation }: TrackingMapProps) {
  return (
    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
          <p className="font-semibold text-gray-900">{currentLocation}</p>
          <p className="text-sm text-gray-600">Live tracking map integration</p>
        </div>
      </div>
    </div>
  );
}