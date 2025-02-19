import React, { useState } from 'react';
// import { Package, Truck, CreditCard } from 'lucide-react';
import ShippingForm from '../components/shipping/ShippingForm';
import CostCalculator from '../components/shipping/CostCalculator';
import PaymentSection from '../components/shipping/PaymentSection';
import { calculateShippingCost } from '../utils/mockData';

export default function SendParcel() {
  const [shippingDetails, setShippingDetails] = useState(null);
  const [calculatedCost, setCalculatedCost] = useState(0);

  const handleShippingSubmit = (details:any) => {
    const weight = parseInt(details.package.weight); 
    const cost = calculateShippingCost(weight, details.data.deliveryType);
    setShippingDetails(details);
    setCalculatedCost(cost);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 font-heading">Send a Package</h1>
        <p className="text-gray-600">Fill in the details below to get started</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ShippingForm onSubmit={handleShippingSubmit} />
        </div>
        <div className="space-y-8">
          <CostCalculator />
          {shippingDetails && (
            <PaymentSection amount={calculatedCost} shippingDetails={shippingDetails} />
          )}
        </div>
      </div>
    </div>
  );
}