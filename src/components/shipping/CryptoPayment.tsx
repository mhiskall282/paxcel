import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

interface CryptoPaymentProps {
  amount: number;
  onSuccess: () => void;
}

export default function CryptoPayment({ amount, onSuccess }: CryptoPaymentProps) {
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const cryptoRates = {
    ETH: 0.00045,
    BTC: 0.000023,
    USDC: 1
  };

  const handlePayment = async () => {
    // Simulate Web3 transaction
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSuccess();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
        <div className="flex items-center">
          <Wallet className="h-5 w-5 text-orange-600 mr-2" />
          <span>Amount in {selectedCrypto}:</span>
        </div>
        <span className="font-bold">{(amount * cryptoRates[selectedCrypto]).toFixed(6)}</span>
      </div>

      <select
        value={selectedCrypto}
        onChange={(e) => setSelectedCrypto(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300"
      >
        <option value="ETH">Ethereum (ETH)</option>
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="USDC">USD Coin (USDC)</option>
      </select>

      <button
        onClick={handlePayment}
        className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
      >
        Pay with {selectedCrypto}
      </button>
    </div>
  );
}