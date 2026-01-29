import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F1FAEE]/95 backdrop-blur-sm border-b border-[#A8DADC]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-[#1D3557] rounded-md flex items-center justify-center text-[#F1FAEE] font-bold text-base group-hover:bg-[#E63946] transition-colors duration-300">
            ת
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1D3557]">תקציר גופנים</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 text-xs font-medium text-[#457B9D]">
          <Link href="#" className="hover:text-[#1D3557] transition-colors">אודות</Link>
          <Link href="#" className="hover:text-[#1D3557] transition-colors">הגש גופן</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1.5 text-[#1D3557] hover:bg-[#A8DADC]/20 rounded-md"
          onClick={onMobileMenuToggle}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
};
