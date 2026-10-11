import profissionaldesktop from '@/assets/images/pages/home/leaders/fritz/profissional/desktop.webp';
import profissionaltablet from '@/assets/images/pages/home/leaders/fritz/profissional/tablet.webp';
import profissionalmobile from '@/assets/images/pages/home/leaders/fritz/profissional/mobile.webp';
import sofasdesktop from '@/assets/images/pages/home/leaders/fritz/sofas/desktop.webp';
import sofastablet from '@/assets/images/pages/home/leaders/fritz/sofas/tablet.webp';
import sofasmobile from '@/assets/images/pages/home/leaders/fritz/sofas/mobile.webp';
import colchoesdesktop from '@/assets/images/pages/home/leaders/fritz/colchoes/desktop.webp';
import colchoestablet from '@/assets/images/pages/home/leaders/fritz/colchoes/tablet.webp';
import colchoesmobile from '@/assets/images/pages/home/leaders/fritz/colchoes/mobile.webp';
import poltronasdesktop from '@/assets/images/pages/home/leaders/fritz/poltronas/desktop.webp';
import poltronastablet from '@/assets/images/pages/home/leaders/fritz/poltronas/tablet.webp';
import poltronasmobile from '@/assets/images/pages/home/leaders/fritz/poltronas/mobile.webp';
import tapetesdesktop from '@/assets/images/pages/home/leaders/fritz/tapetes/desktop.webp';
import tapetestablet from '@/assets/images/pages/home/leaders/fritz/tapetes/tablet.webp';
import tapetesmobile from '@/assets/images/pages/home/leaders/fritz/tapetes/mobile.webp';
import cadeirasdesktop from '@/assets/images/pages/home/leaders/fritz/cadeiras/desktop.webp';
import cadeirastablet from '@/assets/images/pages/home/leaders/fritz/cadeiras/tablet.webp';
import cadeirasmobile from '@/assets/images/pages/home/leaders/fritz/cadeiras/mobile.webp';
import impermeabilizacaodesktop from '@/assets/images/pages/home/leaders/fritz/impermeabilizacao/desktop.webp';
import impermeabilizacaotablet from '@/assets/images/pages/home/leaders/fritz/impermeabilizacao/tablet.webp';
import impermeabilizacaomobile from '@/assets/images/pages/home/leaders/fritz/impermeabilizacao/mobile.webp';

const images = {
  profissional: {
    desktop: profissionaldesktop,
    tablet: profissionaltablet,
    mobile: profissionalmobile,
    alt: '',
  },
  sofas: {
    desktop: sofasdesktop,
    tablet: sofastablet,
    mobile: sofasmobile,
    alt: '',
  },
  colchoes: {
    desktop: colchoesdesktop,
    tablet: colchoestablet,
    mobile: colchoesmobile,
    alt: '',
  },
  poltronas: {
    desktop: poltronasdesktop,
    tablet: poltronastablet,
    mobile: poltronasmobile,
    alt: '',
  },
  tapetes: {
    desktop: tapetesdesktop,
    tablet: tapetestablet,
    mobile: tapetesmobile,
    alt: '',
  },
  cadeiras: {
    desktop: cadeirasdesktop,
    tablet: cadeirastablet,
    mobile: cadeirasmobile,
    alt: '',
  },
  impermeabilizacao: {
    desktop: impermeabilizacaodesktop,
    tablet: impermeabilizacaotablet,
    mobile: impermeabilizacaomobile,
    alt: '',
  },
} as const;

export const leadersImages = [
  images.profissional,
  images.sofas,
  images.colchoes,
  images.poltronas,
  images.tapetes,
  images.profissional,
  images.cadeiras,
  images.impermeabilizacao,
  images.sofas,
  images.tapetes,
] as const;
