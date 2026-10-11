import { fritzHeroImages } from '@/content/fritz-hero.images';
import { fritzServicePhotos } from '@/sections/about/fritz.images';
export const heroSlides = [
  { label: 'Higienização', images: fritzHeroImages },
  { label: 'Estofados', images: fritzServicePhotos[4] },
  { label: 'Cadeiras', images: fritzServicePhotos[5] },
] as const;
