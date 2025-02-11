import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AiAnalytics() {
  const predictiveData = [
    { month: 'Jan', actual: 120, predicted: 118 },
    { month: 'Feb', actual: 132, predicted: 135 },
    { month: 'Mar', actual: 145, predicted: 142 },
    { month: 'Apr', actual: 150, predicted: 153 },
  ];

  const riskAnalysis = [
    { factor: 'Weather', risk: 75 },
    { factor: 'Route', risk: 45 },
    { factor: 'Customs', risk: 60 },
    { factor: 'Capacity', risk: 30 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Brain className="h-8 w-8 text-blue-900 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">AI Analytics & Predictions</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            Volume Predictions
          </h2>
          <LineChart width={500} height={300} data={predictiveData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" name="Actual Volume" stroke="#1e40af" />
            <Line type="monotone" dataKey="predicted" name="AI Prediction" stroke="#f97316" strokeDasharray="5 5" />
          </LineChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
            Risk Analysis
          </h2>
          <BarChart width={500} height={300} data={riskAnalysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="factor" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="risk" name="Risk Level" fill="#f97316" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
          <div className="space-y-4">
            {[
              { title: 'Peak Volume Expected', description: 'AI predicts 15% volume increase next week' },
              { title: 'Weather Impact', description: 'Potential delays in northern routes due to forecasted storms' },
              { title: 'Capacity Optimization', description: 'Recommend increasing capacity in Asia routes by 20%' }
            ].map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium text-blue-900">{insight.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Optimization Suggestions</h2>
          <div className="space-y-4">
            {[
              { title: 'Route Optimization', score: 85 },
              { title: 'Warehouse Efficiency', score: 72 },
              { title: 'Delivery Time', score: 90 }
            ].map((metric, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{metric.title}</span>
                  <span className="text-sm font-medium text-blue-600">{metric.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${metric.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}