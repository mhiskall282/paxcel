import React, { useState } from 'react';
import { Github, Mail, Key, Wallet } from 'lucide-react';
import SocialAuth from '../components/auth/SocialAuth';
import WalletConnect from '../components/auth/WalletConnect';
import EmailSignup from '../components/auth/EmailSignup';

export default function Auth() {
  const [authMethod, setAuthMethod] = useState<'email' | 'social' | 'wallet'>('email');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Join Paxcel for secure logistics tracking</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setAuthMethod('email')}
              className={`p-2 rounded-md ${authMethod === 'email' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
            >
              <Mail className="h-6 w-6" />
            </button>
            <button
              onClick={() => setAuthMethod('social')}
              className={`p-2 rounded-md ${authMethod === 'social' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
            >
              <Github className="h-6 w-6" />
            </button>
            <button
              onClick={() => setAuthMethod('wallet')}
              className={`p-2 rounded-md ${authMethod === 'wallet' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
            >
              <Wallet className="h-6 w-6" />
            </button>
          </div>

          {authMethod === 'email' && <EmailSignup />}
          {authMethod === 'social' && <SocialAuth />}
          {authMethod === 'wallet' && <WalletConnect />}
        </div>
      </div>
    </div>
  );
}