import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Clock } from 'lucide-react';

const predictedData = [
  { day: 'Mon', onTime: 95, delayed: 5 },
  { day: 'Tue', onTime: 92, delayed: 8 },
  { day: 'Wed', onTime: 88, delayed: 12 },
  { day: 'Thu', onTime: 90, delayed: 10 },
  { day: 'Fri', onTime: 85, delayed: 15 },
];

export default function DeliveryPredictions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Clock className="h-5 w-5 mr-2 text-orange-600" />
        AI-Powered Delivery Predictions
      </h3>
      <div className="mt-4">
        <BarChart width={500} height={300} data={predictedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="onTime" name="On Time %" fill="#003366" />
          <Bar dataKey="delayed" name="Delayed %" fill="#FF6700" />
        </BarChart>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        * Based on historical data and current weather conditions
      </p>
    </div>
  );
}