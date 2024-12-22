import React from 'react';
import { Shield, Globe, Truck, Users, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Paxcel</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Revolutionizing global logistics with blockchain technology and AI-powered solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Paxcel, we're committed to transforming the logistics industry through innovative
            technology solutions. Our blockchain-powered platform ensures transparency, security,
            and efficiency in every shipment.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-gray-700">Secure Tracking</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-gray-700">Global Reach</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-gray-700">Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Logistics Center"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Values</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-orange-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Target className="h-6 w-6 text-orange-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Innovation</h4>
                <p className="text-gray-600">
                  Continuously improving through technology and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Company Stats</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">200+</p>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">1M+</p>
              <p className="text-gray-600">Packages Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">99.9%</p>
              <p className="text-gray-600">Delivery Success</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}