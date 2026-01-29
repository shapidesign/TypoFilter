import React from 'react';
import { PERSONALITY_SCALES, Category, CATEGORY_LABELS } from '@/data/fonts';
import { X, RotateCcw } from 'lucide-react';

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
    <div className="space-y-10">
      <div className="flex justify-between items-end pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold tracking-tight">סינון</h2>
        <button
          onClick={onResetAll}
          className="text-xs font-medium text-gray-400 hover:text-black transition-colors flex items-center gap-1 group"
        >
          <RotateCcw size={12} className="group-hover:-rotate-180 transition-transform duration-500" />
          נקה הכל
        </button>
      </div>

      {/* Personality Sliders */}
      <div className="space-y-8">
        {PERSONALITY_SCALES.map((scale) => {
          const currentValue = personalityFilters[scale.key];
          
          return (
            <div key={scale.key} className="flex flex-col gap-3">
              <div className="flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wide">
                <span>{scale.right}</span>
                <span>{scale.left}</span>
              </div>
              
              <div className="relative group/slider">
                {/* Reset button that appears when hovering the row if active */}
                {currentValue !== null && currentValue !== undefined && (
                  <button 
                    onClick={() => onResetPersonality(scale.key)}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-200 hover:text-red-500 opacity-0 group-hover/slider:opacity-100 transition-all p-1"
                    title="אפס"
                  >
                    <X size={14} />
                  </button>
                )}

                <div className="flex gap-1 h-8 bg-gray-50 rounded-lg p-1 border border-gray-100/50">
                  {[1, 2, 3, 4, 5].map((val) => {
                    const isActive = currentValue === val;
                    return (
                      <button
                        key={val}
                        onClick={() => onPersonalityChange(scale.key, val)}
                        className={`flex-1 rounded-md transition-all duration-300 relative group/btn ${
                          isActive 
                            ? 'bg-black shadow-sm' 
                            : 'hover:bg-gray-200/50'
                        }`}
                      >
                         {/* Dot for active state */}
                        <div className={`w-1.5 h-1.5 rounded-full mx-auto transition-all duration-300 ${
                            isActive ? 'bg-white scale-125' : 'bg-gray-300 group-hover/btn:bg-gray-400'
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

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">קטגוריות</h3>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
            const isSelected = categoryFilters.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-md transform scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-black'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Free Filter */}
      <div className="pt-4 border-t border-gray-100">
        <label className="flex items-center gap-3 cursor-pointer group select-none">
          <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-200 border ${
            isFreeFilter 
                ? 'bg-black border-black' 
                : 'bg-white border-gray-300 group-hover:border-gray-400'
          }`}>
            <svg 
                className={`w-3 h-3 text-white transition-transform ${isFreeFilter ? 'scale-100' : 'scale-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <input 
            type="checkbox" 
            checked={isFreeFilter} 
            onChange={onFreeChange} 
            className="hidden" 
          />
          <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">גופנים חינמיים בלבד</span>
        </label>
      </div>
    </div>
  );
};
