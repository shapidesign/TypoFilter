import React from 'react';
import { Font, CATEGORY_LABELS } from '@/data/fonts';

// Default sample texts to cycle through
const SAMPLE_TEXTS = [
  'עברית יפה',
  'שלום עולם',
  'כותרת ראשית',
  'טקסט גוף',
  'עיצוב טיפוגרפי',
  'אותיות עבריות',
  'מילים בעברית',
  'גופן מיוחד',
  'תוכן עברי',
  'כתיבה יפה',
];

interface FontCardProps {
  font: Font;
  index?: number;
}

export const FontCard: React.FC<FontCardProps> = ({ font, index = 0 }) => {
  // Use custom sample text or cycle through defaults
  const sampleText = font.sampleText || SAMPLE_TEXTS[index % SAMPLE_TEXTS.length];

  return (
    <a
      href={font.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-10 border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
    >
      {/* Large Font Sample */}
      <div className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          {sampleText}
        </h2>
      </div>
      
      {/* Tags */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap text-sm">
        <span className="text-gray-500">{font.name}</span>
        <span className="text-gray-300">•</span>
        <span className="text-gray-500">{font.foundry}</span>
        {font.isFree && (
          <>
            <span className="text-gray-300">•</span>
            <span className="text-green-600 border border-green-300 bg-green-50 px-2 py-0.5 rounded text-sm">
              חינמי
            </span>
          </>
        )}
        <span className="text-gray-300">•</span>
        <span className="text-gray-500">{CATEGORY_LABELS[font.category]}</span>
      </div>
    </a>
  );
};
