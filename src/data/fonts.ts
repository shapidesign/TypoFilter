export type Category = 'serif' | 'sans' | 'hand' | 'workhorse';

export interface Personality {
  neutral_expressive: number; // 1 = Neutral, 5 = Expressive
  elegant_rugged: number;     // 1 = Elegant, 5 = Rugged
  serious_friendly: number;   // 1 = Serious, 5 = Friendly
  technic_organic: number;    // 1 = Geometric, 5 = Organic
  classic_progressive: number;// 1 = Classic, 5 = Progressive
  cold_warm: number;          // 1 = Cold, 5 = Warm
}

export interface Font {
  id: string;
  name: string;
  foundry: string;
  url: string;
  isFree: boolean;
  category: Category;
  personality: Personality;
  sampleText?: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  serif: 'סריף',
  sans: 'סנס',
  hand: 'כתב יד',
  workhorse: 'סוס עבודה',
};

export const PERSONALITY_SCALES = [
  { key: 'neutral_expressive', left: 'ניטרלי', right: 'מביע' },
  { key: 'elegant_rugged', left: 'אלגנטי', right: 'מחוספס' },
  { key: 'serious_friendly', left: 'רציני', right: 'חברי' },
  { key: 'technic_organic', left: 'הנדסי', right: 'אורגני' },
  { key: 'classic_progressive', left: 'קלאסי', right: 'חדשני' },
  { key: 'cold_warm', left: 'קר', right: 'חם' },
] as const;

export const fonts: Font[] = [
  {
    id: 'ploni',
    name: 'פלוני',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ploni/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 2,
      serious_friendly: 4,
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 4,
    },
  },
  {
    id: 'ploni-tzar',
    name: 'פלוני צר',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ploni-tzar/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 1,
      serious_friendly: 4,
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 3,
    },
  },
  {
    id: 'asimon',
    name: 'אסימון',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/asimon/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 1,
      serious_friendly: 3,
      technic_organic: 4,
      classic_progressive: 2,
      cold_warm: 4,
    },
  },
  {
    id: 'afek',
    name: 'אפק',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/afek/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 2,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 3,
    },
  },
  {
    id: 'anomalia',
    name: 'אנומליה',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/anomalia/',
    isFree: false,
    category: 'sans', // Could be considered display, but 'sans' is closest from options
    personality: {
      neutral_expressive: 5,
      elegant_rugged: 3,
      serious_friendly: 3,
      technic_organic: 3,
      classic_progressive: 5,
      cold_warm: 2,
    },
  },
  {
    id: 'levi',
    name: 'לוי',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/levi/',
    isFree: false,
    category: 'serif', // Has historical/gothic roots
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 2,
      serious_friendly: 2,
      technic_organic: 4,
      classic_progressive: 2, // Mix of old and new
      cold_warm: 2,
    },
  },
  {
    id: 'ambivalenti-tzar',
    name: 'אמביוולנטי צר',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ambivalenti-tzar/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 2,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 4,
      cold_warm: 3,
    },
  },
  {
    id: 'ploni-round',
    name: 'פלוני מעוגל',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ploni-round/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 1,
      serious_friendly: 5, // Very friendly
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 5,
    },
  },
  {
    id: 'frank-re',
    name: 'פרנק־רי',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/frank-re/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 1,
      serious_friendly: 2,
      technic_organic: 4,
      classic_progressive: 1,
      cold_warm: 3,
    },
  },
  {
    id: 'kedem-serif',
    name: 'קדם סריף',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/kedem-serif/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 4,
      serious_friendly: 4,
      technic_organic: 5,
      classic_progressive: 2,
      cold_warm: 5,
    },
  },
  {
    id: 'gloria',
    name: 'גלוריה',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/gloria/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 1,
      serious_friendly: 4,
      technic_organic: 4,
      classic_progressive: 5,
      cold_warm: 4,
    },
  },
  {
    id: 'almoni',
    name: 'אלמוני',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/almoni/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 2,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 4,
      cold_warm: 2,
    },
  },
  {
    id: 'almoni-tzar',
    name: 'אלמוני צר',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/almoni-tzar/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 1,
      serious_friendly: 2,
      technic_organic: 1,
      classic_progressive: 4,
      cold_warm: 2,
    },
  },
  {
    id: 'noyland',
    name: 'נוילנד',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/noyland/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 4,
      serious_friendly: 2,
      technic_organic: 3,
      classic_progressive: 2,
      cold_warm: 2,
    },
  },
  {
    id: 'mekomi',
    name: 'מקומי',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/mekomi/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 3,
      serious_friendly: 4,
      technic_organic: 4,
      classic_progressive: 2,
      cold_warm: 4,
    },
  },
  {
    id: 'kedem-sans',
    name: 'קדם סנס',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/kedem-sans/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 4,
      serious_friendly: 3,
      technic_organic: 4,
      classic_progressive: 2,
      cold_warm: 4,
    },
  },
  {
    id: 'primaries',
    name: 'פריימריז',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/primaries/',
    isFree: false,
    category: 'sans', // Display
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 5, // Sturdy/Boxy
      serious_friendly: 2,
      technic_organic: 2,
      classic_progressive: 2,
      cold_warm: 2,
    },
  },
  {
    id: 'index',
    name: 'אינדקס',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/index/',
    isFree: false,
    category: 'sans', // Geometric/Tech
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 2,
      serious_friendly: 2,
      technic_organic: 1, // High tech
      classic_progressive: 4,
      cold_warm: 1, // Cold
    },
  },
  {
    id: 'caravan',
    name: 'קרוואן',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/caravan/',
    isFree: false,
    category: 'sans', // Blocky
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 5,
      serious_friendly: 2,
      technic_organic: 1, // Geometric blocks
      classic_progressive: 2, // Early Israel style
      cold_warm: 2,
    },
  },
  {
    id: 'stanga',
    name: 'סטנגה',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/stanga/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 2,
      serious_friendly: 4,
      technic_organic: 3,
      classic_progressive: 4,
      cold_warm: 4,
    },
  },
  {
    id: 'ambivalenti',
    name: 'אמביוולנטי נורמל',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ambivalenti/',
    isFree: false,
    category: 'sans', // Slab nuances
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 3,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 5,
      cold_warm: 3,
    },
  },
  {
    id: 'ambivalenti-compressed',
    name: 'אמביוולנטי קומפרסט',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ambivalenti-compressed/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 3,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 5,
      cold_warm: 3,
    },
  },
  {
    id: 'ambivalenti-wide',
    name: 'אמביוולנטי רחב',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ambivalenti-wide/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 5,
      elegant_rugged: 3,
      serious_friendly: 4,
      technic_organic: 2,
      classic_progressive: 5,
      cold_warm: 3,
    },
  },
  {
    id: 'frank-re-tzar',
    name: 'פרנק־רי צר',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/frank-re-tzar/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 1,
      serious_friendly: 2,
      technic_organic: 4,
      classic_progressive: 1,
      cold_warm: 3,
    },
  },
  {
    id: 'mugrabi',
    name: 'מוגרבי',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/mugrabi/',
    isFree: false,
    category: 'sans', // Display
    personality: {
      neutral_expressive: 5,
      elegant_rugged: 4,
      serious_friendly: 4,
      technic_organic: 4,
      classic_progressive: 2, // Nostalgic
      cold_warm: 5,
    },
  },
  {
    id: 'index-mono',
    name: 'אינדקס מונו',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/index-mono/',
    isFree: false,
    category: 'sans', // Mono
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 2,
      serious_friendly: 2,
      technic_organic: 1, // Geometric/Tech
      classic_progressive: 5,
      cold_warm: 1,
    },
  },
  {
    id: 'ploni-yad',
    name: 'פלוני יד',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/ploni-yad/',
    isFree: false,
    category: 'hand',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 3,
      serious_friendly: 5,
      technic_organic: 5, // Organic
      classic_progressive: 3,
      cold_warm: 5,
    },
  },
  {
    id: 'mikhmoret',
    name: 'מכמורת',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/mikhmoret/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 3,
      elegant_rugged: 4,
      serious_friendly: 3,
      technic_organic: 4,
      classic_progressive: 2,
      cold_warm: 4,
    },
  },
  {
    id: 'mikhmoret-rounded',
    name: 'מכמורת מעוגל',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/mikhmoret-rounded/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 3,
      serious_friendly: 5,
      technic_organic: 4,
      classic_progressive: 3,
      cold_warm: 5,
    },
  },
  {
    id: 'paamon',
    name: 'פעמון',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/paamon/',
    isFree: false,
    category: 'serif', // Slab serif
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 5, // Strong/Rugged
      serious_friendly: 2,
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 3,
    },
  },
  {
    id: 'atlas',
    name: 'אטלס',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/atlas/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 2,
      serious_friendly: 2,
      technic_organic: 1, // Geometric/Stable
      classic_progressive: 4,
      cold_warm: 2,
    },
  },
  {
    id: 'taamula',
    name: 'תעמולה',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/taamula/',
    isFree: false,
    category: 'sans', // Condensed/Display
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 4, // Stable/Strict
      serious_friendly: 1, // Serious
      technic_organic: 3,
      classic_progressive: 2, // Nostalgic
      cold_warm: 2,
    },
  },
  {
    id: 'shluk',
    name: 'שלוק',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/shluk/',
    isFree: false,
    category: 'hand', // Brush style
    personality: {
      neutral_expressive: 5,
      elegant_rugged: 3,
      serious_friendly: 5,
      technic_organic: 5,
      classic_progressive: 3,
      cold_warm: 5,
    },
  },
  {
    id: 'barlev',
    name: 'בר־לב',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/barlev/',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 4, // Stable/Grotesk
      serious_friendly: 2,
      technic_organic: 3,
      classic_progressive: 2, // Nostalgic
      cold_warm: 3,
    },
  },
  {
    id: 'synopsis',
    name: 'סינופסיס',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il/font/synopsis/',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 5,
      elegant_rugged: 1, // Elegant/Theatrical
      serious_friendly: 3,
      technic_organic: 5,
      classic_progressive: 2, // Traditional roots
      cold_warm: 4,
    },
  },
];
