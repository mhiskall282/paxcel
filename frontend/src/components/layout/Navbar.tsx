import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X } from 'lucide-react';
//import WalletConnect from "../auth/WalletConnect";


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Track Parcel', href: '/track' },
    { name: 'Send Parcel', href: '/send' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Truck className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-2xl font-bold text-blue-900">Paxcel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            {/* WalletConnect Button */}
            {/* <WalletConnect /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === item.href
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
