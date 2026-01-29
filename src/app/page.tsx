'use client';

import { useState, useMemo } from 'react';
import { fonts, Category } from '@/data/fonts';
import { FontCard } from '@/components/FontCard';
import { Header } from '@/components/Header';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Filter } from 'lucide-react';

export default function Home() {
  // State for filters
  const [personalityFilters, setPersonalityFilters] = useState<Record<string, number | null>>({});
  const [categoryFilters, setCategoryFilters] = useState<Category[]>([]);
  const [isFreeFilter, setIsFreeFilter] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter Logic
  const filteredFonts = useMemo(() => {
    return fonts.filter((font) => {
      // Category Filter
      if (categoryFilters.length > 0 && !categoryFilters.includes(font.category)) {
        return false;
      }

      // Free Filter
      if (isFreeFilter && !font.isFree) {
        return false;
      }

      // Personality Filter
      // We check if the font's personality matches the selected filters
      // (exact match or close range? Let's go with exact match for now as inputs are 1-5)
      // Actually, usually sliders imply weighting. 
      // A simple logic: if filter is set, font value must match.
      for (const [key, value] of Object.entries(personalityFilters)) {
        if (value !== null && value !== undefined) {
          // Type assertion needed because 'key' is string
          const fontValue = font.personality[key as keyof typeof font.personality];
          // Allow slight fuzziness or exact? Let's try exact first.
          if (fontValue !== value) return false;
        }
      }

      return true;
    });
  }, [categoryFilters, isFreeFilter, personalityFilters]);

  // Handlers
  const handlePersonalityChange = (trait: string, value: number) => {
    setPersonalityFilters((prev) => ({
      ...prev,
      [trait]: prev[trait] === value ? null : value, // Toggle off if clicked again
    }));
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

  const handleResetPersonality = (trait: string) => {
    setPersonalityFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[trait];
      return newFilters;
    });
  };

  const handleResetAll = () => {
    setPersonalityFilters({});
    setCategoryFilters([]);
    setIsFreeFilter(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans" dir="rtl">
      <Header fontCount={filteredFonts.length} />

      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 relative">

          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-sm font-medium bg-secondary p-3 rounded-lg"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={16} />
            {showMobileFilters ? 'הסתר מסננים' : 'הצג מסננים'}
          </button>

          {/* Sidebar */}
          <aside className={`
            w-full md:w-64 flex-shrink-0 
            ${showMobileFilters ? 'block' : 'hidden md:block'}
          `}>
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

          {/* Grid */}
          <section className="flex-1">
            {filteredFonts.length === 0 ? (
              <div className="text-center py-20 bg-secondary/30 rounded-xl border border-dashed border-border">
                <p className="text-muted-foreground">לא נמצאו גופנים התואמים את הסינון.</p>
                <button
                  onClick={handleResetAll}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  נקה את כל המסננים
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFonts.map((font) => (
                  <FontCard key={font.id} font={font} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
