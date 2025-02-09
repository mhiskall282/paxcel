import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { TrendingUp, Package, DollarSign } from 'lucide-react';

export default function AdminAnalytics() {
  const deliveryData = [
    { month: 'Jan', onTime: 120, delayed: 8 },
    { month: 'Feb', onTime: 132, delayed: 12 },
    { month: 'Mar', onTime: 145, delayed: 10 },
    { month: 'Apr', onTime: 150, delayed: 14 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Analytics</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-blue-900" />
                Delivery Performance
              </h2>
              <BarChart width={500} height={300} data={deliveryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" name="On Time" fill="#1e40af" />
                <Bar dataKey="delayed" name="Delayed" fill="#f97316" />
              </BarChart>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-900" />
                Revenue Trends
              </h2>
              <LineChart width={500} height={300} data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#1e40af" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}