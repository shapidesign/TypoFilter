import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">
            ת
          </div>
          <span className="text-xl font-bold tracking-tight">תקציר גופנים</span>
        </Link>

        {/* Desktop Nav - Placeholder for now as we only have one page */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-black transition-colors">אודות</Link>
          <Link href="#" className="hover:text-black transition-colors">הגש גופן</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-black"
          onClick={onMobileMenuToggle}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
