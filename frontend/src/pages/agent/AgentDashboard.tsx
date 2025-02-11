import React from 'react';
import { Package, Users, Clock, AlertTriangle } from 'lucide-react';
import ShipmentMap from '../../components/maps/ShipmentMap';

export default function AgentDashboard() {
  const stats = [
    { name: 'Active Shipments', value: '28', icon: Package, change: '+5' },
    { name: 'Customers', value: '156', icon: Users, change: '+12' },
    { name: 'Pending Pickups', value: '8', icon: Clock, change: '-2' },
    { name: 'Issues', value: '3', icon: AlertTriangle, change: '-1' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Agent Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-blue-900" />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm">{stat.name}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Active Deliveries Map</h2>
          <ShipmentMap
            currentLocation={{
              lat: 1.3521,
              lng: 103.8198,
              name: 'Current Location'
            }}
            destination={{
              lat: 22.3193,
              lng: 114.1694,
              name: 'Destination'
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Pickup #{index + 1}</p>
                    <p className="text-sm text-gray-600">123 Main St, City</p>
                  </div>
                </div>
                <span className="text-sm text-gray-600">14:30</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}