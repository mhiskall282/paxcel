import React from 'react';
import { //Code, 
Book, //Copy, 
//CheckCircle2 
} from 'lucide-react';
import ApiEndpoint from '../../src/components/docs/ApiEndpoint';
import CodeBlock from '../../src/components/docs/CodeBlock';
import { apiEndpoints } from '../utils/apiDocs';

export default function ApiDocs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Book className="h-8 w-8 text-blue-900 mr-3" />
        <h1 className="text-3xl font-bold text-blue-900">API Documentation</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="sticky top-20 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Contents</h3>
            <nav className="space-y-2">
              <a href="#authentication" className="block text-blue-600 hover:text-blue-800">
                Authentication
              </a>
              <a href="#shipments" className="block text-blue-600 hover:text-blue-800">
                Shipments
              </a>
              <a href="#tracking" className="block text-blue-600 hover:text-blue-800">
                Tracking
              </a>
              <a href="#blockchain" className="block text-blue-600 hover:text-blue-800">
                Blockchain
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-8">
          {/* Authentication Section */}
          <section id="authentication" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-6">
              All API requests must be authenticated using JWT tokens. Include the token in the
              Authorization header as a Bearer token.
            </p>

            <ApiEndpoint
              method="POST"
              endpoint="/api/auth/login"
              description="Authenticate user and get access token"
              requestBody={{
                email: 'user@example.com',
                password: 'password123'
              }}
              response={{
                token: 'eyJhbGciOiJIUzI1NiIs...',
                user: {
                  id: '123',
                  email: 'user@example.com',
                  role: 'user'
                }
              }}
            />
          </section>

          {/* Shipments Section */}
          <section id="shipments" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Shipments</h2>
            
            {apiEndpoints.shipments.map((endpoint, index) => (
              <ApiEndpoint key={index} {...endpoint} />
            ))}
          </section>

          {/* Tracking Section */}
          <section id="tracking" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Tracking</h2>
            
            {apiEndpoints.tracking.map((endpoint, index) => (
              <ApiEndpoint key={index} {...endpoint} />
            ))}
          </section>

          {/* Blockchain Section */}
          <section id="blockchain" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Blockchain Integration</h2>
            
            {apiEndpoints.blockchain.map((endpoint, index) => (
              <ApiEndpoint key={index} {...endpoint} />
            ))}

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Smart Contract Integration</h3>
              <CodeBlock
                language="javascript"
                code={`
// Example smart contract integration
const Web3 = require('web3');
const contract = require('./Contract.json');

const web3 = new Web3(provider);
const shipmentContract = new web3.eth.Contract(
  contract.abi,
  contract.address
);

// Create new shipment record
await shipmentContract.methods
  .createShipment(trackingId, sender, receiver)
  .send({ from: account });
                `}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}