import React from 'react';
import { PERSONALITY_SCALES, Category, CATEGORY_LABELS } from '@/data/fonts';
import { X, RotateCcw, Check } from 'lucide-react';

interface FilterSidebarProps {
  personalityFilters: Record<string, number | null>;
  categoryFilters: Category[];
  isFreeFilter: boolean;
  onPersonalityChange: (trait: string, value: number) => void;
  onCategoryChange: (category: Category) => void;
  onFreeChange: () => void;
  onResetPersonality: (trait: string) => void;
  onResetAll: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  personalityFilters,
  categoryFilters,
  isFreeFilter,
  onPersonalityChange,
  onCategoryChange,
  onFreeChange,
  onResetPersonality,
  onResetAll,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-baseline pb-2 border-b border-border">
        <h2 className="text-sm font-semibold tracking-tight text-foreground">סינון והתאמה</h2>
        <button
          onClick={onResetAll}
          className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
        >
          <RotateCcw size={10} className="group-hover:-rotate-180 transition-transform duration-500" />
          נקה הכל
        </button>
      </div>

      {/* Personality Sliders - Minimal Design */}
      <div className="space-y-6">
        {PERSONALITY_SCALES.map((scale) => {
          const currentValue = personalityFilters[scale.key];

          return (
            <div key={scale.key} className="space-y-3">
              <div className="flex justify-between text-xs font-medium text-muted-foreground px-0.5">
                <span>{scale.right}</span>
                <span>{scale.left}</span>
              </div>

              <div className="relative group/slider">
                {/* Reset button - appears on hover if value is set */}
                {currentValue !== null && currentValue !== undefined && (
                  <button
                    onClick={() => onResetPersonality(scale.key)}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-destructive text-opacity-0 group-hover/slider:text-opacity-100 opacity-0 group-hover/slider:opacity-100 transition-all p-1"
                    title="אפס"
                  >
                    <X size={12} />
                  </button>
                )}

                <div className="flex gap-1.5 h-8 bg-secondary/50 rounded-lg p-1">
                  {[1, 2, 3, 4, 5].map((val) => {
                    const isActive = currentValue === val;
                    return (
                      <button
                        key={val}
                        onClick={() => onPersonalityChange(scale.key, val)}
                        className={`flex-1 rounded-md transition-all duration-200 flex items-center justify-center ${isActive
                            ? 'bg-primary shadow-sm'
                            : 'hover:bg-background/80'
                          }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-foreground scale-125' : 'bg-muted-foreground/30'
                          }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-px bg-border/50" />

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">קטגוריות</h3>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
            const isSelected = categoryFilters.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${isSelected
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
                  }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Free Filter */}
      <div className="pt-2">
        <label className="flex items-center gap-3 cursor-pointer group select-none py-2">
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${isFreeFilter
              ? 'bg-primary border-primary'
              : 'bg-white border-input group-hover:border-foreground/50'
            }`}>
            <Check
              size={12}
              className={`text-primary-foreground transition-transform ${isFreeFilter ? 'scale-100' : 'scale-0'}`}
            />
          </div>
          <input
            type="checkbox"
            checked={isFreeFilter}
            onChange={onFreeChange}
            className="hidden"
          />
          <span className="text-sm font-medium text-foreground">גופנים חינמיים בלבד</span>
        </label>
      </div>
    </div>
  );
};
