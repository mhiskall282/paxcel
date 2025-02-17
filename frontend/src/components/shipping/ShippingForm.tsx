import React, { useState } from "react";
import { Package, User, MapPin } from "lucide-react";
import axios from "axios";

interface ShippingFormProps {
  onSubmit: (details: any) => void;
}

export default function ShippingForm({ onSubmit }: ShippingFormProps) {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "",
    receiverName: "",
    receiverAddress: "",
    weight: "",
    deliveryType: "air",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(formData);

    try {
      const token = localStorage.getItem("token");
      const resp = await axios.post(
        "http://localhost:3000/api/shipment/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if(resp.status == 201){
        console.log(resp.data)
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="h-5 w-5 mr-2 text-orange-600" />
            Sender Details
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="senderName"
              placeholder="Sender's Name"
              value={formData.senderName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="senderAddress"
              placeholder="Sender's Address"
              value={formData.senderAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-orange-600" />
            Receiver Details
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="receiverName"
              placeholder="Receiver's Name"
              value={formData.receiverName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="receiverAddress"
              placeholder="Receiver's Address"
              value={formData.receiverAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2 text-orange-600" />
            Package Details
          </h3>
          <div className="space-y-4">
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              name="deliveryType"
              value={formData.deliveryType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
              <option value="road">Road Freight</option>
            </select>
            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
        >
          Calculate Shipping Cost
        </button>
      </div>
    </form>
  );
}
