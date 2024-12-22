import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-gray-600">Get in touch with our support team</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="mt-1 w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">support@paxcel.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Office Location</h3>
            <p className="text-gray-600">
              123 Logistics Avenue<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}