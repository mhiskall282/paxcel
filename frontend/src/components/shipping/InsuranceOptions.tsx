import React from 'react';
import { Shield, Check } from 'lucide-react';

interface InsuranceOption {
  id: string;
  name: string;
  price: number;
  coverage: number;
  features: string[];
}

interface InsuranceOptionsProps {
  packageValue: number;
  onSelect: (option: InsuranceOption) => void;
  selected: string;
}

export default function InsuranceOptions({ packageValue, onSelect, selected }: InsuranceOptionsProps) {
  const options: InsuranceOption[] = [
    {
      id: 'basic',
      name: 'Basic Protection',
      price: packageValue * 0.02,
      coverage: packageValue * 0.5,
      features: ['Basic damage protection', 'Limited theft coverage', '24/7 support']
    },
    {
      id: 'premium',
      name: 'Premium Protection',
      price: packageValue * 0.04,
      coverage: packageValue,
      features: ['Full damage protection', 'Theft coverage', 'Priority support', 'Express claims']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Shield className="h-5 w-5 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold">Shipping Insurance</h3>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <label
            key={option.id}
            className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
              selected === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start">
              <input
                type="radio"
                name="insurance"
                value={option.id}
                checked={selected === option.id}
                onChange={() => onSelect(option)}
                className="mt-1 mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{option.name}</span>
                  <span className="text-blue-900 font-semibold">
                    ${option.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Coverage up to ${option.coverage.toFixed(2)}
                </p>
                <ul className="mt-2 space-y-1">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}