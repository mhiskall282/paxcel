import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Package, Search, Filter } from 'lucide-react';

export default function AdminShipments() {
  const shipments = [
    { id: 'PX123', sender: 'John Doe', receiver: 'Jane Smith', status: 'In Transit', date: '2024-03-15' },
    { id: 'PX124', sender: 'Alice Brown', receiver: 'Bob Wilson', status: 'Delivered', date: '2024-03-14' },
    // Add more mock data as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search shipments..."
                  className="pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tracking ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Receiver
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shipments.map((shipment) => (
                  <tr key={shipment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-2" />
                        {shipment.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{shipment.sender}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{shipment.receiver}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{shipment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}