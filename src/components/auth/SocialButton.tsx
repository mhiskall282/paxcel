import React from 'react';

interface SocialButtonProps {
  provider: string;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SocialButton({ provider, onClick, icon, children }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-50"
      data-provider={provider}
    >
      <span className="mr-2">{icon}</span>
      {children}
    </button>
  );
}