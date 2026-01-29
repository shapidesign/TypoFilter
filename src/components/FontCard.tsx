import React from 'react';
import { Font } from '@/data/fonts';
import { FontPreview } from './FontPreview';
import { ExternalLink } from 'lucide-react';

interface FontCardProps {
  font: Font;
}

export const FontCard: React.FC<FontCardProps> = ({ font }) => {
  // Use category as a trait for the preview
  const previewTraits = [font.category]; 

  return (
    <a
      href={font.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white h-full flex flex-col transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Preview Area - Clean, no background, large text */}
      <div className="relative aspect-[4/3] flex items-center justify-center border-b border-gray-100 overflow-hidden bg-gray-50/30 group-hover:bg-gray-50/60 transition-colors">
         <div className="w-full h-full p-8 flex items-center justify-center">
            <FontPreview traits={previewTraits} />
         </div>
         
         {/* Hover Overlay Icon */}
         <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                <ExternalLink size={14} />
            </div>
         </div>
      </div>
      
      {/* Minimal Footer Info */}
      <div className="pt-4 flex justify-between items-end">
        <div>
          <h3 className="text-xl font-bold text-black leading-none mb-1 group-hover:underline decoration-1 underline-offset-4">{font.name}</h3>
          <span className="text-sm text-gray-400 font-medium">{font.foundry}</span>
        </div>
        
        {font.isFree && (
            <span className="text-[10px] font-bold tracking-wider uppercase text-gray-900 border border-gray-200 px-2 py-1 rounded">
                Free
            </span>
        )}
      </div>
    </a>
  );
};
