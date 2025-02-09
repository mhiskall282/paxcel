import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculateShippingCost } from '../../utils/mockData';

export default function CostCalculator() {
  const [weight, setWeight] = useState('');
  const [type, setType] = useState<'air' | 'sea' | 'road'>('air');
  const [cost, setCost] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedCost = calculateShippingCost(Number(weight), type);
    setCost(calculatedCost);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Calculator className="h-5 w-5 mr-2 text-orange-600" />
        Quick Cost Calculator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'air' | 'sea' | 'road')}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option value="air">Air Freight</option>
            <option value="sea">Sea Freight</option>
            <option value="road">Road Freight</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
        >
          Calculate Cost
        </button>

        {cost !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Estimated Cost:</p>
            <p className="text-2xl font-bold text-blue-900">${cost.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">
              *Prices are estimates and may vary based on specific requirements
            </p>
          </div>
        )}
      </div>
    </div>
  );
}