import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

const optimizationData = [
  { month: 'Jan', traditional: 120, optimized: 90 },
  { month: 'Feb', traditional: 150, optimized: 110 },
  { month: 'Mar', traditional: 180, optimized: 130 },
  { month: 'Apr', traditional: 170, optimized: 120 },
  { month: 'May', traditional: 200, optimized: 140 },
];

export default function RouteOptimization() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
        AI Route Optimization Impact
      </h3>
      <div className="mt-4">
        <LineChart width={500} height={300} data={optimizationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="traditional"
            name="Traditional Route"
            stroke="#FF6700"
          />
          <Line
            type="monotone"
            dataKey="optimized"
            name="AI Optimized Route"
            stroke="#003366"
          />
        </LineChart>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        * Shows delivery time reduction using AI-powered route optimization
      </p>
    </div>
  );
}