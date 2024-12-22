import React from 'react';
import { Cloud, Sun, Wind } from 'lucide-react';

interface WeatherImpactProps {
  location: string;
  conditions: {
    temperature: number;
    weather: string;
    impact: 'none' | 'low' | 'medium' | 'high';
    delay: number;
  };
}

export default function WeatherImpact({ location, conditions }: WeatherImpactProps) {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  const getWeatherIcon = () => {
    switch (conditions.weather.toLowerCase()) {
      case 'cloudy': return <Cloud className="h-6 w-6" />;
      case 'windy': return <Wind className="h-6 w-6" />;
      default: return <Sun className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Weather Impact Analysis</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getWeatherIcon()}
            <span className="ml-2 text-gray-600">{location}</span>
          </div>
          <span className="text-lg">{conditions.temperature}°C</span>
        </div>

        <div className={`p-3 rounded-md ${getImpactColor(conditions.impact)}`}>
          <div className="flex justify-between items-center">
            <span className="font-medium">Delivery Impact</span>
            <span className="capitalize">{conditions.impact}</span>
          </div>
          {conditions.delay > 0 && (
            <p className="text-sm mt-1">
              Potential delay: {conditions.delay} {conditions.delay === 1 ? 'hour' : 'hours'}
            </p>
          )}
        </div>

        <div className="text-sm text-gray-500">
          * Weather conditions are updated every 3 hours
        </div>
      </div>
    </div>
  );
}