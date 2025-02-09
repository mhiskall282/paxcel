import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Shield, Globe, Cpu, Truck, Ship, Plane } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import ServiceCard from '../components/home/ServiceCard';

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Blockchain Security",
      description: "Every shipment tracked with immutable blockchain records"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Global Coverage",
      description: "Seamless shipping to over 200 countries worldwide"
    },
    {
      icon: <Cpu className="h-8 w-8 text-orange-600" />,
      title: "AI-Powered Tracking",
      description: "Real-time predictions and route optimization"
    }
  ];

  const services = [
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Air Freight",
      description: "Express worldwide delivery within 2-3 business days"
    },
    {
      icon: <Ship className="h-12 w-12" />,
      title: "Sea Freight",
      description: "Cost-effective shipping for bulk cargo"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Road Freight",
      description: "Reliable ground transportation across continents"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-blue-900">
            Why Choose Paxcel?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-blue-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Ship?</h2>
          <p className="mb-8 text-lg">Experience the future of logistics with blockchain security</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/send"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Send Package
            </Link>
            <Link
              to="/track"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}