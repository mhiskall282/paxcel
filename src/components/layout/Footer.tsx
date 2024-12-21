import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Paxcel</h3>
            <p className="text-gray-300">
              Revolutionizing global logistics with blockchain technology and AI-powered solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/track" className="text-gray-300 hover:text-orange-500">Track Parcel</Link></li>
              <li><Link to="/send" className="text-gray-300 hover:text-orange-500">Send Parcel</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@paxcel.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Logistics Ave, CA 94105</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Paxcel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}