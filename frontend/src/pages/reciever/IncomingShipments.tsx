import React from 'react';
import { Package, MapPin, Calendar, ArrowRight } from 'lucide-react';

const mockShipments = [
  {
    id: 'PX123',
    sender: 'John Doe',
    status: 'Out for Delivery',
    estimatedDelivery: '2024-03-15 14:30',
    location: 'Local Distribution Center'
  },
  {
    id: 'PX124',
    sender: 'Alice Smith',
    status: 'In Transit',
    estimatedDelivery: '2024-03-16 10:00',
    location: 'Regional Hub'
  },
  {
    id: 'PX125',
    sender: 'Bob Johnson',
    status: 'Processing',
    estimatedDelivery: '2024-03-17 15:45',
    location: 'Origin Facility'
  }
];

export default function IncomingShipments() {
  return (
    <div className="space-y-4">
      {mockShipments.map((shipment) => (
        <div key={shipment.id} className="border rounded-lg p-4 hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <Package className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">{shipment.id}</p>
                <p className="text-sm text-gray-600">From: {shipment.sender}</p>
              </div>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
              {shipment.status}
            </span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              {shipment.estimatedDelivery}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {shipment.location}
            </div>
          </div>

          <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}