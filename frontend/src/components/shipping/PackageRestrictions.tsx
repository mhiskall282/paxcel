import { AlertTriangle, Check, X } from 'lucide-react';

export default function PackageRestrictions() {
  const allowedItems = [
    'General merchandise',
    'Books and documents',
    'Electronics (non-battery)',
    'Clothing and textiles',
    'Packaged food items'
  ];

  const restrictedItems = [
    'Hazardous materials',
    'Flammable items',
    'Weapons and ammunition',
    'Illegal substances',
    'Perishable goods',
    'Live animals'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold">Package Restrictions</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-green-600 font-medium flex items-center mb-4">
            <Check className="h-5 w-5 mr-2" />
            Allowed Items
          </h4>
          <ul className="space-y-2">
            {allowedItems.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-red-600 font-medium flex items-center mb-4">
            <X className="h-5 w-5 mr-2" />
            Restricted Items
          </h4>
          <ul className="space-y-2">
            {restrictedItems.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <X className="h-4 w-4 text-red-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-md">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 mr-2" />
          <div>
            <p className="text-sm font-medium text-orange-800">Important Notice</p>
            <p className="text-sm text-orange-700 mt-1">
              Shipping restricted items may result in package seizure and possible legal consequences.
              When in doubt, please contact our support team for clarification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}