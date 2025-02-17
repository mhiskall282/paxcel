import React, { useState } from 'react';
import { Package, MapPin, Clock, ArrowRight } from 'lucide-react';
import TrackingTimeline from '../components/tracking/TrackingTimeline';
import LiveMap from '../components/tracking/LiveMap';
import WeatherImpact from '../components/tracking/WeatherImpact';
import DeliveryPredictions from '../components/analytics/DeliveryPredictions';
import RouteOptimization from '../components/analytics/RouteOptimization';
import ShipmentAnalytics from '../components/analytics/ShipmentAnalytics';
import { mockTrackingData } from '../utils/mockData';
// import { trackParcel } from '../hooks/apiHookks';
import axios from "axios";

export default function TrackParcel() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTracking = async(e: React.FormEvent) => {
    e.preventDefault();
    // setTrackingResult(mockTrackingData);
    axios.get(`http://localhost:3000/api/tracking/${trackingNumber}`)
      .then(
        response=>{
          console.log(response.data)
        }
      ).catch(
        error=>{
          console.log(error)
          console.error(error?.response?.data?.error)
        }
      )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 font-heading">Track Your Shipment</h1>
        <p className="text-gray-600">Enter your tracking number to get real-time updates</p>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <form onSubmit={handleTracking} className="flex gap-4">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center"
          >
            Track
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>

      {trackingResult && (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Shipment Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Package className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <p className="font-semibold">Tracking Number</p>
                    <p className="text-gray-600">{trackingResult.trackingNumber}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <p className="font-semibold">Current Location</p>
                    <p className="text-gray-600">{trackingResult.currentLocation}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <p className="font-semibold">Estimated Delivery</p>
                    <p className="text-gray-600">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
              
              <TrackingTimeline history={trackingResult.history} />
            </div>
            
            <div className="space-y-8">
              <LiveMap
                currentLocation={{
                  latitude: 1.3521,
                  longitude: 103.8198,
                  name: 'Singapore'
                }}
                destinationLocation={{
                  latitude: 22.3193,
                  longitude: 114.1694,
                  name: 'Hong Kong'
                }}
              />
              
              <WeatherImpact
                location={trackingResult.currentLocation}
                conditions={{
                  temperature: 28,
                  weather: 'cloudy',
                  impact: 'low',
                  delay: 1
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <DeliveryPredictions />
            <RouteOptimization />
          </div>

          <ShipmentAnalytics />
        </div>
      )}
    </div>
  );
}