import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <Package className="h-16 w-16 text-orange-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-900 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! This page seems to be lost in transit.</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}