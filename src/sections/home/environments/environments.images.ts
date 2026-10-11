import { fritzServicePhotos } from '@/sections/about/fritz.images';
export const environmentImages = {
  sofas: fritzServicePhotos[4],
  colchoes: fritzServicePhotos[1],
  cadeiras: fritzServicePhotos[5],
  tapetes: fritzServicePhotos[2],
  impermeabilizacao: fritzServicePhotos[3],
} as const;
import fritz0desktop from '@/assets/images/pages/home/environments/fritz/sofas/desktop.webp';
import fritz0tablet from '@/assets/images/pages/home/environments/fritz/sofas/tablet.webp';
import fritz0mobile from '@/assets/images/pages/home/environments/fritz/sofas/mobile.webp';
import fritz1desktop from '@/assets/images/pages/home/environments/fritz/colchoes/desktop.webp';
import fritz1tablet from '@/assets/images/pages/home/environments/fritz/colchoes/tablet.webp';
import fritz1mobile from '@/assets/images/pages/home/environments/fritz/colchoes/mobile.webp';
import fritz2desktop from '@/assets/images/pages/home/environments/fritz/impermeabilizacao/desktop.webp';
import fritz2tablet from '@/assets/images/pages/home/environments/fritz/impermeabilizacao/tablet.webp';
import fritz2mobile from '@/assets/images/pages/home/environments/fritz/impermeabilizacao/mobile.webp';
import fritz3desktop from '@/assets/images/pages/home/environments/fritz/poltronas/desktop.webp';
import fritz3tablet from '@/assets/images/pages/home/environments/fritz/poltronas/tablet.webp';
import fritz3mobile from '@/assets/images/pages/home/environments/fritz/poltronas/mobile.webp';

export const fritzChoiceImages = [
  {
    desktop: fritz0desktop,
    tablet: fritz0tablet,
    mobile: fritz0mobile,
    alt: 'Imagem ilustrativa de higienização de sofas.',
  },
  {
    desktop: fritz1desktop,
    tablet: fritz1tablet,
    mobile: fritz1mobile,
    alt: 'Imagem ilustrativa de higienização de colchoes.',
  },
  {
    desktop: fritz2desktop,
    tablet: fritz2tablet,
    mobile: fritz2mobile,
    alt: 'Imagem ilustrativa de impermeabilização de estofado.',
  },
  {
    desktop: fritz3desktop,
    tablet: fritz3tablet,
    mobile: fritz3mobile,
    alt: 'Imagem ilustrativa de higienização de poltronas.',
  },
] as const;
