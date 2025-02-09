import React, { useState } from 'react';
import { Bell, DoorClosed, Camera, MessageSquare } from 'lucide-react';

export default function DeliveryPreferences() {
  const [preferences, setPreferences] = useState({
    notifications: true,
    doorstep: false,
    photo: true,
    instructions: ''
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="font-medium">Delivery Notifications</p>
            <p className="text-sm text-gray-500">Get updates via email and SMS</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <DoorClosed className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="font-medium">Doorstep Delivery</p>
            <p className="text-sm text-gray-500">Leave package at door if no one answers</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={preferences.doorstep}
            onChange={(e) => setPreferences({ ...preferences, doorstep: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Camera className="h-5 w-5 text-gray-400 mr-3" />
          <div>
            <p className="font-medium">Delivery Photo</p>
            <p className="text-sm text-gray-500">Request photo proof of delivery</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={preferences.photo}
            onChange={(e) => setPreferences({ ...preferences, photo: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="h-5 w-5 text-gray-400 inline mr-2" />
          Delivery Instructions
        </label>
        <textarea
          value={preferences.instructions}
          onChange={(e) => setPreferences({ ...preferences, instructions: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Add special instructions for delivery..."
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Save Preferences
      </button>
    </div>
  );
}