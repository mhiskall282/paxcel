import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const mockData = {
  performance: [
    { month: 'Jan', onTime: 95, delayed: 5, damaged: 1 },
    { month: 'Feb', onTime: 93, delayed: 6, damaged: 2 },
    { month: 'Mar', onTime: 97, delayed: 3, damaged: 0 },
    { month: 'Apr', onTime: 94, delayed: 5, damaged: 1 },
  ],
  metrics: {
    avgDeliveryTime: '2.3 days',
    successRate: '96.5%',
    customerSatisfaction: '4.8/5',
  }
};

export default function ShipmentAnalytics() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <TrendingUp className="h-6 w-6 mr-2 text-orange-600" />
        Shipment Analytics
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm text-blue-600">Avg Delivery Time</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">{mockData.metrics.avgDeliveryTime}</p>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm text-green-600">Success Rate</span>
          </div>
          <p className="text-2xl font-bold text-green-900">{mockData.metrics.successRate}</p>
        </div>
        
        <div className="p-4 bg-orange-50 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-sm text-orange-600">Customer Satisfaction</span>
          </div>
          <p className="text-2xl font-bold text-orange-900">{mockData.metrics.customerSatisfaction}</p>
        </div>
      </div>

      <div className="mt-6">
        <BarChart width={600} height={300} data={mockData.performance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="onTime" name="On Time" fill="#0EA5E9" />
          <Bar dataKey="delayed" name="Delayed" fill="#F97316" />
          <Bar dataKey="damaged" name="Damaged" fill="#EF4444" />
        </BarChart>
      </div>
    </div>
  );
}