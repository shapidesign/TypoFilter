import React from 'react';
import { Type } from 'lucide-react';

interface HeaderProps {
  fontCount: number;
}

export const Header: React.FC<HeaderProps> = ({ fontCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
            <Type size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">פונט בריף</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
            {fontCount} משפחות גופנים
          </span>
        </div>
      </div>
    </header>
  );
};
