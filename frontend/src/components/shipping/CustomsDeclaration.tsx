import { useState } from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';

interface Item {
  description: string;
  quantity: number;
  value: number;
  weight: number;
  origin: string;
}

export default function CustomsDeclaration() {
  const [items, setItems] = useState<Item[]>([{ 
    description: '', 
    quantity: 1, 
    value: 0, 
    weight: 0, 
    origin: '' 
  }]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, value: 0, weight: 0, origin: '' }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof Item, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const totalValue = items.reduce((sum, item) => sum + item.value, 0);
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <FileText className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Customs Declaration</h3>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Item {index + 1}</span>
              {items.length > 1 && (
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  placeholder="Item description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Country of Origin</label>
                <input
                  type="text"
                  value={item.origin}
                  onChange={(e) => updateItem(index, 'origin', e.target.value)}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  placeholder="Country of origin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Value (USD)</label>
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => updateItem(index, 'value', parseFloat(e.target.value))}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  value={item.weight}
                  onChange={(e) => updateItem(index, 'weight', parseFloat(e.target.value))}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addItem}
          className="w-full flex items-center justify-center px-4 py-2 border border-dashed border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Another Item
        </button>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Value:</span>
            <span className="text-lg">${totalValue.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="font-medium">Total Weight:</span>
            <span className="text-lg">{totalWeight.toFixed(1)} kg</span>
          </div>
        </div>
      </div>
    </div>
  );
}