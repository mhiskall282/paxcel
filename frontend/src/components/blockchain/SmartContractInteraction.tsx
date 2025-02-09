import React, { useState } from 'react';
import { useContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

const CONTRACT_ABI = [
  // Add your contract ABI here
];

const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';

export default function SmartContractInteraction() {
  const [amount, setAmount] = useState('');

  const { data: contractData, isError: readError, isLoading: readLoading } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getData',
  });

  const { write, data: writeData, isLoading: writeLoading, isError: writeError } = useContractWrite({
   address: CONTRACT_ADDRESS as `0x${string}`,
     abi: CONTRACT_ABI,
    functionName: 'updateData',
  }); 

  const { isLoading: txLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    write({
      args: [parseEther(amount)],
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Smart Contract Interaction</h3>

      <div className="space-y-4">
        {readLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading contract data...</span>
          </div>
        ) : readError ? (
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <span>Error reading contract data</span>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="font-medium">Current Contract Data:</p>
            <p className="text-gray-600">{contractData?.toString()}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount (ETH)
            </label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="0.0"
            />
          </div>

          <button
            type="submit"
            disabled={writeLoading || txLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {writeLoading || txLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              'Update Contract'
            )}
          </button>
        </form>

        {isSuccess && (
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span>Transaction successful!</span>
          </div>
        )}

        {writeError && (
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <span>Transaction failed</span>
          </div>
        )}
      </div>
    </div>
  );
}