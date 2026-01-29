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
    id: '1',
    name: 'אלמוני',
    foundry: 'אאא',
    url: 'https://alefalefalef.co.il',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 1, // Very neutral
      elegant_rugged: 2,
      serious_friendly: 3,
      technic_organic: 2,
      classic_progressive: 4,
      cold_warm: 3,
    },
  },
  {
    id: '2',
    name: 'גוז',
    foundry: 'הפונטיה',
    url: 'https://fontimonim.co.il',
    isFree: false,
    category: 'hand',
    personality: {
      neutral_expressive: 5, // Very expressive
      elegant_rugged: 3,
      serious_friendly: 5, // Friendly
      technic_organic: 5, // Organic
      classic_progressive: 3,
      cold_warm: 5,
    },
  },
  {
    id: '3',
    name: 'חיים',
    foundry: 'מאסטרפונט',
    url: 'https://masterfont.co.il',
    isFree: false,
    category: 'sans',
    personality: {
      neutral_expressive: 4,
      elegant_rugged: 4, // Rugged/Blocky
      serious_friendly: 3,
      technic_organic: 1, // Geometric
      classic_progressive: 2, // Classic Bauhaus style
      cold_warm: 2,
    },
  },
  {
    id: '4',
    name: 'פרנק',
    foundry: 'פונטביט',
    url: 'https://fontbit.co.il',
    isFree: false,
    category: 'serif',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 1, // Elegant
      serious_friendly: 2, // Serious
      technic_organic: 3,
      classic_progressive: 1, // Classic
      cold_warm: 3,
    },
  },
  {
    id: '5',
    name: 'היבו',
    foundry: 'עודד עזר',
    url: 'https://fonts.google.com/specimen/Heebo',
    isFree: true,
    category: 'sans',
    personality: {
      neutral_expressive: 1,
      elegant_rugged: 2,
      serious_friendly: 3,
      technic_organic: 1, // Geometric
      classic_progressive: 4,
      cold_warm: 2,
    },
  },
  {
    id: '6',
    name: 'רוביק',
    foundry: 'גוגל פונטים',
    url: 'https://fonts.google.com/specimen/Rubik',
    isFree: true,
    category: 'sans',
    personality: {
      neutral_expressive: 2,
      elegant_rugged: 2,
      serious_friendly: 4, // Friendly (rounded)
      technic_organic: 2,
      classic_progressive: 3,
      cold_warm: 4,
    },
  },
];
