import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import PaymentMethods from './PaymentMethods';
import CryptoPayment from './CryptoPayment';
import CardPayment from './CardPayment';
import BankTransfer from './BankTransfer';

interface PaymentSectionProps {
  amount: number;
  shippingDetails: any;
}

export default function PaymentSection({ amount, shippingDetails }: PaymentSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState('crypto');
  const [processing, setProcessing] = useState(false);

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'crypto':
        return <CryptoPayment amount={amount} onSuccess={handlePaymentSuccess} />;
      case 'card':
        return <CardPayment amount={amount} onSuccess={handlePaymentSuccess} />;
      case 'bank':
        return <BankTransfer amount={amount} onSuccess={handlePaymentSuccess} />;
      default:
        return null;
    }
  };

  const handlePaymentSuccess = async () => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    alert('Payment processed successfully! Your tracking number is: PX' + Math.random().toString(36).substr(2, 9).toUpperCase());
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <CreditCard className="h-5 w-5 mr-2 text-orange-600" />
        Payment Details
      </h3>

      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-900">${amount.toFixed(2)}</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Includes all taxes and handling fees
          </div>
        </div>

        <PaymentMethods
          selected={paymentMethod}
          onSelect={setPaymentMethod}
        />

        <div className="mt-6">
          {renderPaymentForm()}
        </div>
      </div>
    </div>
  );
}