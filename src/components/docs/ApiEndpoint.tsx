import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface ApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  requestBody?: Record<string, unknown>;
  response?: Record<string, unknown>;
  parameters?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
}

export default function ApiEndpoint({
  method,
  endpoint,
  description,
  requestBody,
  response,
  parameters
}: ApiEndpointProps) {
  const [copied, setCopied] = useState(false);

  const methodColors = {
    GET: 'bg-green-100 text-green-800',
    POST: 'bg-blue-100 text-blue-800',
    PUT: 'bg-yellow-100 text-yellow-800',
    DELETE: 'bg-red-100 text-red-800'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${methodColors[method]}`}>
            {method}
          </span>
          <code className="text-gray-800 font-mono">{endpoint}</code>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-gray-600"
          title="Copy endpoint"
        >
          {copied ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      {parameters && parameters.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Parameters</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Required</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
              </tr>
            </thead>
            <tbody>
              {parameters.map((param, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm font-mono">{param.name}</td>
                  <td className="px-4 py-2 text-sm">{param.type}</td>
                  <td className="px-4 py-2 text-sm">
                    {param.required ? (
                      <span className="text-red-600">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {requestBody && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Request Body</h4>
          <CodeBlock
            language="json"
            code={JSON.stringify(requestBody, null, 2)}
          />
        </div>
      )}

      {response && (
        <div>
          <h4 className="font-semibold mb-2">Response</h4>
          <CodeBlock
            language="json"
            code={JSON.stringify(response, null, 2)}
          />
        </div>
      )}
    </div>
  );
}