import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, AlertTriangle } from 'lucide-react';

const data = {
  shipments: [
    { month: 'Jan', completed: 120, delayed: 8, cancelled: 2 },
    { month: 'Feb', completed: 132, delayed: 12, cancelled: 3 },
    { month: 'Mar', completed: 145, delayed: 10, cancelled: 1 },
    { month: 'Apr', completed: 150, delayed: 14, cancelled: 4 },
  ],
  performance: [
    { name: 'On Time', value: 85 },
    { name: 'Delayed', value: 12 },
    { name: 'Issues', value: 3 },
  ],
  trends: [
    { day: 1, volume: 45 },
    { day: 2, volume: 52 },
    { day: 3, volume: 48 },
    { day: 4, volume: 61 },
    { day: 5, volume: 55 },
  ],
};

const COLORS = ['#003366', '#FF6700', '#FF0000'];

export default function AdvancedAnalytics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2 text-blue-900" />
            Shipment Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.shipments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" name="Completed" fill="#003366" />
              <Bar dataKey="delayed" name="Delayed" fill="#FF6700" />
              <Bar dataKey="cancelled" name="Cancelled" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-900" />
            Delivery Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.performance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.performance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-blue-900" />
          Volume Trends
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="volume" name="Daily Volume" stroke="#003366" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}