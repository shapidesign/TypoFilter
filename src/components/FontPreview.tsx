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

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily={fontStack}
          fontSize="72"
          fill="currentColor"
          className="text-foreground"
        >
          אבג
        </text>
      </svg>
    </div>
  );
};
