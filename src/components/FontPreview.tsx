import React from 'react';

interface FontPreviewProps {
  traits: string[];
}

const getFontStack = (traits: string[]) => {
  if (traits.includes('שובב')) return '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif';
  if (traits.includes('רטרו')) return '"Courier New", Courier, monospace';
  if (traits.includes('אלגנטי')) return '"Times New Roman", Times, serif';
  if (traits.includes('מודרני')) return 'Arial, Helvetica, sans-serif';
  return 'system-ui, -apple-system, sans-serif';
};

export const FontPreview: React.FC<FontPreviewProps> = ({ traits }) => {
  const fontStack = getFontStack(traits);
  
  // Random background color (grayscale) to keep it black and white aesthetic but varied
  // Actually plan says "Minimalist Black & White theme", so maybe just light gray bg.
  const bgColor = "#f3f4f6"; // gray-100

  return (
    <div className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden rounded-md border border-gray-200">
      <svg width="100%" height="100%" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="150" fill={bgColor} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily={fontStack}
          fontSize="80"
          fill="#000000"
        >
          אבג
        </text>
      </svg>
    </div>
  );
};
