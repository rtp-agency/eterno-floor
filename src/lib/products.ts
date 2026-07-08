export type Wood = 'oak' | 'walnut';
export type Tone = 'light' | 'grey' | 'beige' | 'brown' | 'dark';
export type CollectionId = 'galerie' | 'gravity' | 'handshaben' | 'visage' | 'rivera';

export interface Collection {
  id: CollectionId;
  name: string;
  /** thickness in mm */
  thickness: number;
  /** wear/protective layer in mm */
  wear: number;
  /** plank size, mm */
  size: string;
  bevel: string;
  pcsPerPack: number;
  m2PerPack: number;
}

export interface Product {
  id: string;
  collection: CollectionId;
  /** Latin proper name of the decor (e.g. "Amato", "Serenity") */
  name: string;
  /** wood type — set only for collections whose decors are named "<Wood> <Name>" */
  wood: Wood | null;
  article: string;
  tone: Tone;
}

export const collections: Record<CollectionId, Collection> = {
  galerie: { id: 'galerie', name: 'Galerie', thickness: 5, wear: 0.5, size: '180 × 1220 mm', bevel: '4V', pcsPerPack: 8, m2PerPack: 1.757 },
  gravity: { id: 'gravity', name: 'Gravity', thickness: 5, wear: 0.3, size: '180 × 1220 mm', bevel: '4V', pcsPerPack: 10, m2PerPack: 2.196 },
  handshaben: { id: 'handshaben', name: 'Hand Scraped', thickness: 5, wear: 0.5, size: '1220 × 150 mm', bevel: '4V', pcsPerPack: 10, m2PerPack: 1.83 },
  visage: { id: 'visage', name: 'Visage', thickness: 6, wear: 0.5, size: '1220 × 150 mm', bevel: '4V', pcsPerPack: 10, m2PerPack: 1.83 },
  rivera: { id: 'rivera', name: 'Rivera', thickness: 6, wear: 0.5, size: '180 × 1220 mm', bevel: '4V', pcsPerPack: 8, m2PerPack: 1.7568 },
};

export const collectionOrder: CollectionId[] = ['galerie', 'gravity', 'handshaben', 'visage', 'rivera'];

export const products: Product[] = [
  // Galerie
  { id: 'galerie-amato', collection: 'galerie', name: 'Amato', wood: 'oak', article: '85522', tone: 'light' },
  { id: 'galerie-taciano', collection: 'galerie', name: 'Taciano', wood: 'oak', article: '85201', tone: 'grey' },
  { id: 'galerie-vitori', collection: 'galerie', name: 'Vitori', wood: 'oak', article: '85523', tone: 'beige' },
  { id: 'galerie-adelmo', collection: 'galerie', name: 'Adelmo', wood: 'oak', article: '85836', tone: 'grey' },
  { id: 'galerie-vincenzo', collection: 'galerie', name: 'Vincenzo', wood: 'oak', article: '85689', tone: 'light' },
  { id: 'galerie-salerno', collection: 'galerie', name: 'Salerno', wood: 'oak', article: '85718', tone: 'dark' },
  { id: 'galerie-martino', collection: 'galerie', name: 'Martino', wood: 'oak', article: '85626', tone: 'beige' },
  { id: 'galerie-ventura', collection: 'galerie', name: 'Ventura', wood: 'oak', article: '85603', tone: 'beige' },
  { id: 'galerie-domiani', collection: 'galerie', name: 'Domiani', wood: 'walnut', article: '85628', tone: 'brown' },
  { id: 'galerie-brunetti', collection: 'galerie', name: 'Brunetti', wood: 'walnut', article: '85951', tone: 'dark' },

  // Gravity
  { id: 'gravity-serenity', collection: 'gravity', name: 'Serenity', wood: null, article: '7416', tone: 'light' },
  { id: 'gravity-merlin', collection: 'gravity', name: 'Merlin', wood: null, article: '7937', tone: 'beige' },
  { id: 'gravity-grace', collection: 'gravity', name: 'Grace', wood: null, article: '7396', tone: 'grey' },
  { id: 'gravity-toccata', collection: 'gravity', name: 'Toccata', wood: null, article: '7127', tone: 'brown' },
  { id: 'gravity-campus', collection: 'gravity', name: 'Campus', wood: null, article: '7128', tone: 'beige' },
  { id: 'gravity-matrix', collection: 'gravity', name: 'Matrix', wood: null, article: '7857', tone: 'grey' },
  { id: 'gravity-garnet', collection: 'gravity', name: 'Garnet', wood: null, article: '7122', tone: 'beige' },
  { id: 'gravity-meadow', collection: 'gravity', name: 'Meadow', wood: null, article: '7378', tone: 'beige' },
  { id: 'gravity-ezone', collection: 'gravity', name: 'Ezone', wood: null, article: '7394', tone: 'brown' },
  { id: 'gravity-nimbus', collection: 'gravity', name: 'Nimbus', wood: null, article: '7126', tone: 'dark' },

  // Hand Scraped
  { id: 'handshaben-manuri', collection: 'handshaben', name: 'Manuri', wood: 'oak', article: '95462', tone: 'light' },
  { id: 'handshaben-heiko', collection: 'handshaben', name: 'Heiko', wood: 'oak', article: '95311', tone: 'light' },
  { id: 'handshaben-averon', collection: 'handshaben', name: 'Averon', wood: 'walnut', article: '95719', tone: 'grey' },
  { id: 'handshaben-walter', collection: 'handshaben', name: 'Walter', wood: 'oak', article: '95246', tone: 'beige' },
  { id: 'handshaben-taylor', collection: 'handshaben', name: 'Taylor', wood: 'oak', article: '95011', tone: 'brown' },
  { id: 'handshaben-cortona', collection: 'handshaben', name: 'Cortona', wood: 'oak', article: '95177', tone: 'beige' },
  { id: 'handshaben-cedric', collection: 'handshaben', name: 'Cedric', wood: 'walnut', article: '95581', tone: 'brown' },

  // Visage
  { id: 'visage-perry', collection: 'visage', name: 'Perry', wood: null, article: '96867', tone: 'light' },
  { id: 'visage-evans', collection: 'visage', name: 'Evans', wood: null, article: '96195', tone: 'beige' },
  { id: 'visage-davis', collection: 'visage', name: 'Davis', wood: null, article: '96613', tone: 'grey' },
  { id: 'visage-taylor', collection: 'visage', name: 'Taylor', wood: null, article: '96772', tone: 'grey' },
  { id: 'visage-grif', collection: 'visage', name: 'Grif', wood: null, article: '96532', tone: 'light' },
  { id: 'visage-gray', collection: 'visage', name: 'Gray', wood: null, article: '96746', tone: 'dark' },
  { id: 'visage-foster', collection: 'visage', name: 'Foster', wood: null, article: '96412', tone: 'light' },
  { id: 'visage-kaiden', collection: 'visage', name: 'Kaiden', wood: null, article: '96611', tone: 'beige' },
  { id: 'visage-landon', collection: 'visage', name: 'Landon', wood: null, article: '96021', tone: 'beige' },
  { id: 'visage-carter', collection: 'visage', name: 'Carter', wood: null, article: '96057', tone: 'brown' },

  // Rivera
  { id: 'rivera-camelo', collection: 'rivera', name: 'Camelo', wood: null, article: '9121', tone: 'light' },
  { id: 'rivera-avent', collection: 'rivera', name: 'Avent', wood: null, article: '9223', tone: 'light' },
  { id: 'rivera-ormonde', collection: 'rivera', name: 'Ormonde', wood: null, article: '9127', tone: 'grey' },
  { id: 'rivera-shafran', collection: 'rivera', name: 'Shafran', wood: null, article: '9774', tone: 'beige' },
  { id: 'rivera-gelato', collection: 'rivera', name: 'Gelato', wood: null, article: '9292', tone: 'beige' },
  { id: 'rivera-latte', collection: 'rivera', name: 'Latte', wood: null, article: '9901', tone: 'brown' },
  { id: 'rivera-calatra', collection: 'rivera', name: 'Calatra', wood: null, article: '9858', tone: 'beige' },
  { id: 'rivera-reverso', collection: 'rivera', name: 'Reverso', wood: null, article: '9123', tone: 'brown' },
  { id: 'rivera-siesta', collection: 'rivera', name: 'Siesta', wood: null, article: '9131', tone: 'dark' },
  { id: 'rivera-pelagos', collection: 'rivera', name: 'Pelagos', wood: null, article: '9915', tone: 'dark' },
];

export const woodWords: Record<Wood, Record<string, string>> = {
  oak: { es: 'Roble', pt: 'Carvalho', ru: 'Дуб', en: 'Oak' },
  walnut: { es: 'Nogal', pt: 'Nogueira', ru: 'Орех', en: 'Walnut' },
};

/** Localised display name, e.g. "Roble Amato" or "Serenity". */
export function productName(p: Product, locale: string): string {
  if (p.wood) {
    const w = woodWords[p.wood][locale] ?? woodWords[p.wood].en;
    return `${w} ${p.name}`;
  }
  return p.name;
}

export const CONTACT = {
  website: 'eternodesigns.com',
  websiteUrl: 'https://eternodesigns.com',
  phoneDisplay: '+34 624 412 798',
  phoneRaw: '+34624412798',
  whatsapp: 'https://wa.me/34624412798',
  email: 'clearfloor2014@gmail.com',
};
