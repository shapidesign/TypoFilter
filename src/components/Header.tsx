import React from 'react';

interface HeaderProps {
  fontCount: number;
}

export const Header: React.FC<HeaderProps> = ({ fontCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900">פונט בריף</h1>
        <span className="text-sm text-gray-500">{fontCount} פונטים</span>
      </div>
    </header>
  );
};
