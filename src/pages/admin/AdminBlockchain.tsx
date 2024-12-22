import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Blocks, Shield, Activity, Search } from 'lucide-react';

export default function AdminBlockchain() {
  const transactions = [
    {
      hash: '0x1234...5678',
      type: 'Shipment Created',
      timestamp: '2024-03-15 14:30',
      status: 'Confirmed'
    },
    {
      hash: '0x5678...9012',
      type: 'Location Update',
      timestamp: '2024-03-15 14:25',
      status: 'Confirmed'
    },
    // Add more mock transactions
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Blockchain Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Blocks className="h-8 w-8 text-blue-900 mr-3" />
                <div>
                  <h3 className="font-semibold">Total Transactions</h3>
                  <p className="text-2xl font-bold">12,345</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Network Status</h3>
                  <p className="text-green-600 font-medium">Healthy</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Gas Price</h3>
                  <p className="font-medium">32 Gwei</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-10 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Transaction Hash
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((tx, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                        {tx.hash}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{tx.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{tx.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}