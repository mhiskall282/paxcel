import React from 'react';
import { Package, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import IncomingShipments from '../../components/receiver/IncomingShipments';
import DeliveryPreferences from '../../components/receiver/DeliveryPreferences';
import DeliveryCalendar from '../../components/receiver/DeliveryCalendar';

export default function ReceiverDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Incoming Deliveries</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">3</span>
          </div>
          <p className="text-gray-600">Incoming Packages</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">Today</span>
          </div>
          <p className="text-gray-600">Expected Deliveries</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold">1</span>
          </div>
          <p className="text-gray-600">Requires Action</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Incoming Shipments</h2>
          <IncomingShipments />
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Delivery Calendar</h2>
            <DeliveryCalendar />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Delivery Preferences</h2>
            <DeliveryPreferences />
          </div>
        </div>
      </div>
    </div>
  );
}