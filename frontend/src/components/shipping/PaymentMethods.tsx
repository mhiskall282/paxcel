import React from 'react';
import { CreditCard, Wallet, DollarSign } from 'lucide-react';

interface PaymentMethodsProps {
  onSelect: (method: string) => void;
  selected: string;
}

export default function PaymentMethods({ onSelect, selected }: PaymentMethodsProps) {
  const methods = [
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: <Wallet className="h-5 w-5 text-orange-600" />,
      description: 'Pay with ETH, BTC, or USDC',
    },
    {
      id: 'card',
      name: 'Credit Card',
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      description: 'Secure card payment',
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      description: 'Direct bank transfer',
    },
  ];

  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <label
          key={method.id}
          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
            selected === method.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value={method.id}
            checked={selected === method.id}
            onChange={() => onSelect(method.id)}
            className="mr-3"
          />
          <div className="flex items-center flex-1">
            {method.icon}
            <div className="ml-3">
              <p className="font-medium">{method.name}</p>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}