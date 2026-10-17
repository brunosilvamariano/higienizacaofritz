import sofaDesktop from '@/assets/images/shared/services/sofas/desktop.webp';
import sofaTablet from '@/assets/images/shared/services/sofas/tablet.webp';
import sofaMobile from '@/assets/images/shared/services/sofas/mobile.webp';
import tapeteDesktop from '@/assets/images/shared/services/tapetes/desktop.webp';
import tapeteTablet from '@/assets/images/shared/services/tapetes/tablet.webp';
import tapeteMobile from '@/assets/images/shared/services/tapetes/mobile.webp';
import profissionalDesktop from '@/assets/images/shared/professional/desktop.webp';
import profissionalTablet from '@/assets/images/shared/professional/tablet.webp';
import profissionalMobile from '@/assets/images/shared/professional/mobile.webp';

export const benefitImages = {
  tecido: {
    desktop: sofaDesktop,
    tablet: sofaTablet,
    mobile: sofaMobile,
    alt: 'Higienização de um sofá com extratora.',
  },
  praticidade: {
    desktop: tapeteDesktop,
    tablet: tapeteTablet,
    mobile: tapeteMobile,
    alt: 'Higienização de tapete em uma sala.',
  },
  conversa: {
    desktop: profissionalDesktop,
    tablet: profissionalTablet,
    mobile: profissionalMobile,
    alt: 'Profissional do Fritz cuidando de um estofado.',
  },
} as const;
