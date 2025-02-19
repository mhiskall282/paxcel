import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface CardPaymentProps {
  amount: number;
  onSuccess: (details:any) => void;
}

export default function CardPayment({ amount, onSuccess }: CardPaymentProps) {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSuccess(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          maxLength={16}
          placeholder="1234 5678 9012 3456"
          className="w-full px-4 py-2 rounded-md border border-gray-300"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            value={cardDetails.expiry}
            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            CVC
          </label>
          <input
            type="text"
            placeholder="123"
            maxLength={3}
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            value={cardDetails.cvc}
            onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
      >
        <CreditCard className="h-5 w-5 mr-2" />
        Pay ${amount.toFixed(2)}
      </button>
    </form>
  );
}