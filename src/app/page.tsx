'use client';

import { fonts } from '@/data/fonts';
import { FontCard } from '@/components/FontCard';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans" dir="rtl">
      <Header fontCount={fonts.length} />

      <main className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="divide-y divide-gray-100">
          {fonts.map((font, index) => (
            <FontCard key={font.id} font={font} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
