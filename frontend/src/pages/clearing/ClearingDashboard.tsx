import React from 'react';
import { FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function ClearingDashboard() {
  const stats = [
    { name: 'Pending Clearance', value: '12', icon: Clock, change: '+3' },
    { name: 'Cleared Today', value: '8', icon: CheckCircle, change: '+2' },
    { name: 'Documentation Issues', value: '3', icon: AlertTriangle, change: '-1' },
    { name: 'Total Processed', value: '45', icon: FileText, change: '+8' },
  ];

  const pendingClearance = [
    { id: 'SH001', origin: 'China', destination: 'USA', status: 'Documentation Review' },
    { id: 'SH002', origin: 'Germany', destination: 'Singapore', status: 'Customs Inspection' },
    { id: 'SH003', origin: 'Japan', destination: 'Australia', status: 'Pending Approval' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Clearing Officer Dashboard</h1>

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
          <h2 className="text-lg font-semibold mb-4">Pending Clearance</h2>
          <div className="space-y-4">
            {pendingClearance.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Shipment {item.id}</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    {item.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Origin: {item.origin}</p>
                  <p>Destination: {item.destination}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    View Details
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Process
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border-b">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="font-medium">Shipment SH00{index + 4} Cleared</p>
                  <p className="text-sm text-gray-600">Processed all documentation and approved</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}