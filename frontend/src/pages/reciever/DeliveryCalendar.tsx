import React from 'react';
import { Calendar as CalendarIcon, Package, Clock } from 'lucide-react';

const mockDeliveries = [
  {
    date: '2024-03-15',
    timeSlot: '14:30 - 16:30',
    packages: 2
  },
  {
    date: '2024-03-16',
    timeSlot: '10:00 - 12:00',
    packages: 1
  }
];

export default function DeliveryCalendar() {
  return (
    <div className="space-y-4">
      {mockDeliveries.map((delivery, index) => (
        <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
          <div className="flex-shrink-0 mr-4">
            <CalendarIcon className="h-8 w-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{delivery.date}</p>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Clock className="h-4 w-4 mr-1" />
              {delivery.timeSlot}
            </div>
          </div>
          <div className="flex items-center">
            <Package className="h-5 w-5 text-gray-400 mr-1" />
            <span className="text-sm font-medium">{delivery.packages} packages</span>
          </div>
        </div>
      ))}

      <button className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
        <CalendarIcon className="h-4 w-4 mr-2" />
        View Full Calendar
      </button>
    </div>
  );
}