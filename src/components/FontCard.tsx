import React from 'react';
import { Font, CATEGORY_LABELS } from '@/data/fonts';
import { FontPreview } from './FontPreview';
import { ExternalLink } from 'lucide-react';

interface FontCardProps {
  font: Font;
}

// Helper to convert Font personality to traits for preview
const getFontTraits = (font: Font): string[] => {
  const traits: string[] = [];

  // Map personality scores to keywords expected by FontPreview
  // 1 = Left side, 5 = Right side of the scale
  if (font.personality.elegant_rugged <= 2) traits.push('אלגנטי');
  if (font.personality.classic_progressive >= 4) traits.push('מודרני');
  if (font.personality.neutral_expressive >= 4) traits.push('שובב'); // Expressive -> Playful
  if (font.personality.classic_progressive <= 2) traits.push('רטרו'); // Classic -> Retro

  return traits;
};

export const FontCard: React.FC<FontCardProps> = ({ font }) => {
  const traits = getFontTraits(font);

  return (
    <a
      href={font.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      {/* Preview Area */}
      <div className="relative aspect-[16/10] bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {/* We use the FontPreview but wrapped to handle sizing */}
          <div className="w-full h-full pointer-events-none select-none opacity-80 group-hover:opacity-100 transition-opacity">
            <FontPreview traits={traits} />
          </div>
        </div>

        {/* Overlay Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {font.isFree && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 tracking-wide shadow-sm">
              חינמי
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
            <ExternalLink size={14} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 border-t border-border/50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-foreground leading-none mb-1 group-hover:text-primary transition-colors">
              {font.name}
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              {font.foundry}
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground border border-border px-1.5 py-0.5 rounded">
            {CATEGORY_LABELS[font.category]}
          </span>
        </div>
      </div>
    </a>
  );
};
