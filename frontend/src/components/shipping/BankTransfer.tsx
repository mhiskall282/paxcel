import { Building2 } from 'lucide-react';

interface BankTransferProps {
  amount: number;
  onSuccess: () => void;
}

export default function BankTransfer({ amount, onSuccess }: BankTransferProps) {
  const handleConfirm = async () => {
    // Simulate bank transfer confirmation
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSuccess();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-50 rounded-md space-y-3">
        <div className="flex items-center text-gray-600">
          <Building2 className="h-5 w-5 mr-2" />
          <span>Bank Account Details</span>
        </div>
        <div className="space-y-2">
          <p><span className="font-medium">Bank Name:</span> Global Logistics Bank</p>
          <p><span className="font-medium">Account Name:</span> Paxcel Logistics Ltd</p>
          <p><span className="font-medium">Account Number:</span> 1234567890</p>
          <p><span className="font-medium">SWIFT Code:</span> GLBKUS12</p>
          <p><span className="font-medium">Amount:</span> ${amount.toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
      >
        Confirm Bank Transfer
      </button>

      <p className="text-sm text-gray-500 text-center">
        Please use your tracking number as the payment reference
      </p>
    </div>
  );
}