import React, { useState } from 'react';
import { Upload, Camera, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

interface KycDocument {
  type: string;
  file: File | null;
  status: 'pending' | 'verified' | 'rejected';
}

export default function KycVerification() {
  const [documents, setDocuments] = useState<KycDocument[]>([
    { type: 'id', file: null, status: 'pending' },
    { type: 'proof_of_address', file: null, status: 'pending' },
    { type: 'business_registration', file: null, status: 'pending' }
  ]);

  const handleFileUpload = (type: string, file: File) => {
    setDocuments(docs => 
      docs.map(doc => 
        doc.type === type ? { ...doc, file, status: 'pending' } : doc
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">KYC Verification</h2>
      
      <div className="space-y-6">
        {documents.map((doc) => (
          <div key={doc.type} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">
                  {doc.type === 'id' && 'Government ID'}
                  {doc.type === 'proof_of_address' && 'Proof of Address'}
                  {doc.type === 'business_registration' && 'Business Registration'}
                </span>
              </div>
              {doc.status === 'verified' && (
                <span className="flex items-center text-green-600">
                  <CheckCircle2 className="h-5 w-5 mr-1" />
                  Verified
                </span>
              )}
              {doc.status === 'rejected' && (
                <span className="flex items-center text-red-600">
                  <AlertTriangle className="h-5 w-5 mr-1" />
                  Rejected
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Document
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, JPG, or PNG (max. 10MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(doc.type, file);
                    }}
                  />
                </label>
              </div>
            </div>

            {doc.file && (
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <FileText className="h-4 w-4 mr-2" />
                {doc.file.name}
              </div>
            )}
          </div>
        ))}

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Submit for Verification
        </button>
      </div>
    </div>
  );
}