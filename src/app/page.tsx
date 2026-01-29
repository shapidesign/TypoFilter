'use client';

import { useState } from 'react';
import { fonts, Category, PERSONALITY_SCALES, Personality } from '@/data/fonts';
import { FontCard } from '@/components/FontCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Header } from '@/components/Header';
import { X } from 'lucide-react';

export default function Home() {
  // State
  const [personalityFilters, setPersonalityFilters] = useState<Record<string, number | null>>({});
  const [categoryFilters, setCategoryFilters] = useState<Category[]>([]);
  const [isFreeFilter, setIsFreeFilter] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handlers
  const handlePersonalityChange = (trait: string, value: number) => {
    setPersonalityFilters((prev) => ({
      ...prev,
      [trait]: value,
    }));
  };

  const handleResetPersonality = (trait: string) => {
    setPersonalityFilters((prev) => {
      const next = { ...prev };
      delete next[trait];
      return next;
    });
  };

  const handleCategoryChange = (category: Category) => {
    setCategoryFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleFreeChange = () => {
    setIsFreeFilter((prev) => !prev);
  };

  const handleResetAll = () => {
    setPersonalityFilters({});
    setCategoryFilters([]);
    setIsFreeFilter(false);
  };

  // Filtering Logic
  const filteredFonts = fonts.filter((font) => {
    // 1. Free Filter
    if (isFreeFilter && !font.isFree) return false;

    // 2. Category Filter (OR logic)
    if (categoryFilters.length > 0 && !categoryFilters.includes(font.category)) {
      return false;
    }

    // 3. Personality Filter (+/- 1 tolerance)
    const passesPersonality = Object.entries(personalityFilters).every(([key, targetValue]) => {
      if (targetValue === null || targetValue === undefined) return true; // trait not active
      
      const fontValue = font.personality[key as keyof Personality];
      const diff = Math.abs(fontValue - targetValue);
      
      return diff <= 1; // Tolerance of +/- 1
    });

    return passesPersonality;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                personalityFilters={personalityFilters}
                categoryFilters={categoryFilters}
                isFreeFilter={isFreeFilter}
                onPersonalityChange={handlePersonalityChange}
                onCategoryChange={handleCategoryChange}
                onFreeChange={handleFreeChange}
                onResetPersonality={handleResetPersonality}
                onResetAll={handleResetAll}
              />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-200 lg:hidden">
              <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">סינון</h2>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                    <X size={20} />
                  </button>
              </div>
              <FilterSidebar
                personalityFilters={personalityFilters}
                categoryFilters={categoryFilters}
                isFreeFilter={isFreeFilter}
                onPersonalityChange={handlePersonalityChange}
                onCategoryChange={handleCategoryChange}
                onFreeChange={handleFreeChange}
                onResetPersonality={handleResetPersonality}
                onResetAll={handleResetAll}
              />
              <button 
                className="w-full mt-8 bg-black text-white py-4 rounded-full font-bold text-lg shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                הצג {filteredFonts.length} גופנים
              </button>
            </div>
          )}

          {/* Main Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-baseline justify-between border-b border-gray-100 pb-4">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight">הגופנים</h2>
               <span className="text-sm font-medium text-gray-400">
                  {filteredFonts.length} תוצאות
               </span>
            </div>
            
            {filteredFonts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {filteredFonts.map((font) => (
                  <FontCard key={font.id} font={font} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
                   <X size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">לא נמצאו גופנים</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                  נסה להסיר חלק מהמסננים או להרחיב את טווח החיפוש שלך.
                </p>
                <button
                  onClick={handleResetAll}
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                >
                  נקה את כל הסינונים
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
