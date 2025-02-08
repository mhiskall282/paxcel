import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Package, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import ShipmentMap from '../../components/maps/ShipmentMap';
import AdvancedAnalytics from '../../components/analytics/AdvancedAnalytics';

export default function AdminDashboard() {
  const stats = [
    { name: 'Active Shipments', value: '1,234', icon: Package, change: '+12%' },
    { name: 'Revenue', value: '$45,678', icon: TrendingUp, change: '+8%' },
    { name: 'Active Users', value: '892', icon: Users, change: '+5%' },
    { name: 'Pending Issues', value: '23', icon: AlertTriangle, change: '-15%' },
  ];

  const shipmentLocations = {
    currentLocation: {
      lat: 1.3521,
      lng: 103.8198,
      name: 'Singapore Hub',
      status: 'Processing'
    },
    destination: {
      lat: 22.3193,
      lng: 114.1694,
      name: 'Hong Kong Distribution Center',
      status: 'Awaiting Arrival'
    },
    waypoints: [
      {
        lat: 13.7563,
        lng: 100.5018,
        name: 'Bangkok Transit',
        status: 'Next Stop'
      }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="bg-white rounded-lg shadow p-6">
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

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Active Shipments Map</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <ShipmentMap
                currentLocation={shipmentLocations.currentLocation}
                destination={shipmentLocations.destination}
                waypoints={shipmentLocations.waypoints}
              />
            </div>
          </div>

          <AdvancedAnalytics />
        </div>
      </div>
    </div>
  );
}