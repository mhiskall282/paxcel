import React from 'react';
import { Package, Truck, Clock, AlertTriangle } from 'lucide-react';
import ShipmentMap from '../../components/maps/ShipmentMap';
import UserShipments from '../../components/user/UserShipments';
import ShipmentStats from '../../components/user/ShipmentStats';
import QuickActions from '../../components/user/QuickActions';

export default function UserDashboard() {
  const stats = [
    { name: 'Active Shipments', value: '3', icon: Package, change: '+1' },
    { name: 'In Transit', value: '2', icon: Truck, change: '0' },
    { name: 'Pending Pickup', value: '1', icon: Clock, change: '+1' },
    { name: 'Delivery Issues', value: '0', icon: AlertTriangle, change: '-1' },
  ];

  const activeShipments = {
    currentLocation: {
      lat: 1.3521,
      lng: 103.8198,
      name: 'Singapore Hub'
    },
    destination: {
      lat: 22.3193,
      lng: 114.1694,
      name: 'Hong Kong'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
        <QuickActions />
      </div>

      <ShipmentStats stats={stats} />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Active Shipments Map</h2>
          <ShipmentMap
            currentLocation={activeShipments.currentLocation}
            destination={activeShipments.destination}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Shipments</h2>
          <UserShipments limit={5} />
        </div>
      </div>
    </div>
  );
}