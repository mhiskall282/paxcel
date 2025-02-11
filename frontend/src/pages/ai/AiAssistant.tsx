import React, { useState } from 'react';
import { MessageSquare, Send, Bot, Loader } from 'lucide-react';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you with your shipping needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I understand you need help with shipping. I can assist you with tracking, rates, and shipping requirements. What specific information are you looking for?'
      }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-blue-900 text-white flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-semibold">AI Shipping Assistant</h1>
        </div>

        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center text-gray-500">
                <Loader className="h-5 w-5 animate-spin mr-2" />
                Processing...
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Ask about tracking, shipping rates, customs requirements, or any other shipping-related questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}