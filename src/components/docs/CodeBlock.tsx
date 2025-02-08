import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
          title="Copy code"
        >
          {copied ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      </div>
      <pre className={`language-${language} bg-gray-50 rounded-lg p-4 overflow-x-auto`}>
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}