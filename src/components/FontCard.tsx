import React from 'react';
import { Font } from '@/data/fonts';
import { FontPreview } from './FontPreview';
import { ExternalLink } from 'lucide-react';

interface FontCardProps {
  font: Font;
}

export const FontCard: React.FC<FontCardProps> = ({ font }) => {
  const previewTraits = [font.category]; 

  return (
    <a
      href={font.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#E63946] transition-all duration-200"
    >
      {/* Preview Area */}
      <div className="relative aspect-[3/2] flex items-center justify-center border-b border-[#A8DADC]/30 overflow-hidden bg-[#F1FAEE] group-hover:bg-white transition-colors">
         <div className="w-full h-full p-6 flex items-center justify-center">
            <FontPreview traits={previewTraits} />
         </div>
         
         {/* Hover Overlay Icon */}
         <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-6 h-6 bg-[#1D3557] text-white rounded-full flex items-center justify-center">
                <ExternalLink size={10} />
            </div>
         </div>
      </div>
      
      {/* Compact Footer */}
      <div className="px-3 py-2 flex justify-between items-center bg-white">
        <div>
          <h3 className="text-sm font-bold text-[#1D3557] leading-tight mb-0.5 group-hover:text-[#E63946] transition-colors">{font.name}</h3>
          <span className="text-[10px] text-[#457B9D] font-medium tracking-wide">{font.foundry}</span>
        </div>
        
        {font.isFree && (
            <span className="text-[9px] font-bold tracking-wider uppercase text-[#1D3557] bg-[#A8DADC]/30 px-1.5 py-0.5 rounded-sm">
                Free
            </span>
        )}
      </div>
    </a>
  );
};
