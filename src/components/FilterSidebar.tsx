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
    <div className="space-y-8 bg-white p-5 rounded-xl border border-[#A8DADC]/40 shadow-sm sticky top-20">
      <div className="flex justify-between items-end pb-3 border-b border-[#A8DADC]/30">
        <h2 className="text-sm font-bold tracking-tight text-[#1D3557] uppercase">סינון</h2>
        <button
          onClick={onResetAll}
          className="text-[10px] font-medium text-[#457B9D] hover:text-[#E63946] transition-colors flex items-center gap-1 group"
        >
          <RotateCcw size={10} className="group-hover:-rotate-180 transition-transform duration-500" />
          נקה הכל
        </button>
      </div>

      {/* Personality Sliders */}
      <div className="space-y-5">
        {PERSONALITY_SCALES.map((scale) => {
          const currentValue = personalityFilters[scale.key];
          
          return (
            <div key={scale.key} className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-bold text-[#457B9D] uppercase tracking-wide px-0.5">
                <span>{scale.right}</span>
                <span>{scale.left}</span>
              </div>
              
              <div className="relative group/slider">
                {/* Reset button */}
                {currentValue !== null && currentValue !== undefined && (
                  <button 
                    onClick={() => onResetPersonality(scale.key)}
                    className="absolute -right-5 top-1/2 -translate-y-1/2 text-[#A8DADC] hover:text-[#E63946] opacity-0 group-hover/slider:opacity-100 transition-all p-1"
                    title="אפס"
                  >
                    <X size={12} />
                  </button>
                )}

                <div className="flex gap-1 h-6 bg-[#F1FAEE] rounded-md p-1 border border-[#A8DADC]/30">
                  {[1, 2, 3, 4, 5].map((val) => {
                    const isActive = currentValue === val;
                    return (
                      <button
                        key={val}
                        onClick={() => onPersonalityChange(scale.key, val)}
                        className={`flex-1 rounded-sm transition-all duration-200 relative group/btn ${
                          isActive 
                            ? 'bg-[#1D3557] shadow-sm' 
                            : 'hover:bg-[#A8DADC]/20'
                        }`}
                      >
                         {/* Dot for active state */}
                        <div className={`w-1 h-1 rounded-full mx-auto transition-all duration-200 ${
                            isActive ? 'bg-[#F1FAEE] scale-110' : 'bg-[#A8DADC] group-hover/btn:bg-[#457B9D]'
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

      <hr className="border-[#A8DADC]/30" />

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold text-[#1D3557] uppercase tracking-wider">קטגוריות</h3>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
            const isSelected = categoryFilters.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 text-[11px] font-medium rounded-md border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-sm'
                    : 'bg-[#F1FAEE] text-[#457B9D] border-[#A8DADC]/50 hover:border-[#457B9D] hover:text-[#1D3557]'
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
        <label className="flex items-center gap-2 cursor-pointer group select-none">
          <div className={`w-4 h-4 rounded-sm flex items-center justify-center transition-all duration-200 border ${
            isFreeFilter 
                ? 'bg-[#E63946] border-[#E63946]' 
                : 'bg-white border-[#A8DADC] group-hover:border-[#457B9D]'
          }`}>
            <svg 
                className={`w-2.5 h-2.5 text-white transition-transform ${isFreeFilter ? 'scale-100' : 'scale-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="4"
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
          <span className="text-xs font-medium text-[#1D3557] group-hover:text-[#E63946] transition-colors">גופנים חינמיים בלבד</span>
        </label>
      </div>
    </div>
  );
};
