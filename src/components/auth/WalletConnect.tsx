import React, { useState } from 'react';
import { Wallet, AlertCircle } from 'lucide-react';

export default function WalletConnect() {
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async (type: string) => {
    setConnecting(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Connected to ${type}`);
    } catch (error) {
      console.error('Wallet connection error:', error);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-md">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
          <p className="text-sm text-blue-700">
            Connect your wallet to access blockchain-powered features
          </p>
        </div>
      </div>

      <button
        onClick={() => connectWallet('metamask')}
        disabled={connecting}
        className="w-full flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-50"
      >
        <img
          src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
          alt="MetaMask"
          className="h-5 w-5 mr-2"
        />
        {connecting ? 'Connecting...' : 'Connect MetaMask'}
      </button>

      <button
        onClick={() => connectWallet('walletconnect')}
        disabled={connecting}
        className="w-full flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-50"
      >
        <Wallet className="h-5 w-5 text-blue-600 mr-2" />
        WalletConnect
      </button>
    </div>
  );
}