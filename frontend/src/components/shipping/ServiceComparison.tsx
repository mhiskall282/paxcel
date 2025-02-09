import React from 'react';
import { Plane, Ship, Truck, Clock, Package } from 'lucide-react';

interface Service {
  name: string;
  icon: React.ReactNode;
  deliveryTime: string;
  price: string;
  features: string[];
}

export default function ServiceComparison() {
  const services: Service[] = [
    {
      name: 'Express Air',
      icon: <Plane className="h-8 w-8 text-blue-600" />,
      deliveryTime: '1-2 business days',
      price: '$$$$',
      features: [
        'Door-to-door delivery',
        'Real-time tracking',
        'Priority handling',
        'Insurance included',
        'Signature required'
      ]
    },
    {
      name: 'Ocean Freight',
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      deliveryTime: '20-30 days',
      price: '$$',
      features: [
        'Port-to-port delivery',
        'Bulk shipping available',
        'Container tracking',
        'Basic insurance',
        'Cost-effective'
      ]
    },
    {
      name: 'Ground Express',
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      deliveryTime: '3-5 business days',
      price: '$$$',
      features: [
        'Door-to-door delivery',
        'Real-time tracking',
        'Standard handling',
        'Insurance available',
        'Flexible delivery options'
      ]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Service Comparison</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              {service.icon}
              <span className="text-lg font-bold text-blue-900">{service.price}</span>
            </div>

            <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
            
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              {service.deliveryTime}
            </div>

            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <Package className="h-4 w-4 text-blue-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
              Select Service
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          * Prices and delivery times are estimates and may vary based on destination and package specifications.
          Contact our support team for detailed quotes.
        </p>
      </div>
    </div>
  );
}