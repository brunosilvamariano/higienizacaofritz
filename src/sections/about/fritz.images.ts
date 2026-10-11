import real0desktop from '@/assets/images/pages/about/fritz/real-0/desktop.webp';
import real0tablet from '@/assets/images/pages/about/fritz/real-0/tablet.webp';
import real0mobile from '@/assets/images/pages/about/fritz/real-0/mobile.webp';
import real1desktop from '@/assets/images/pages/about/fritz/real-1/desktop.webp';
import real1tablet from '@/assets/images/pages/about/fritz/real-1/tablet.webp';
import real1mobile from '@/assets/images/pages/about/fritz/real-1/mobile.webp';
import real2desktop from '@/assets/images/pages/about/fritz/real-2/desktop.webp';
import real2tablet from '@/assets/images/pages/about/fritz/real-2/tablet.webp';
import real2mobile from '@/assets/images/pages/about/fritz/real-2/mobile.webp';
import real3desktop from '@/assets/images/pages/about/fritz/real-3/desktop.webp';
import real3tablet from '@/assets/images/pages/about/fritz/real-3/tablet.webp';
import real3mobile from '@/assets/images/pages/about/fritz/real-3/mobile.webp';
import real4desktop from '@/assets/images/pages/about/fritz/real-4/desktop.webp';
import real4tablet from '@/assets/images/pages/about/fritz/real-4/tablet.webp';
import real4mobile from '@/assets/images/pages/about/fritz/real-4/mobile.webp';
import real5desktop from '@/assets/images/pages/about/fritz/real-5/desktop.webp';
import real5tablet from '@/assets/images/pages/about/fritz/real-5/tablet.webp';
import real5mobile from '@/assets/images/pages/about/fritz/real-5/mobile.webp';
import desktop from '@/assets/images/pages/about/fritz/profissional/desktop.webp';
import tablet from '@/assets/images/pages/about/fritz/profissional/tablet.webp';
import mobile from '@/assets/images/pages/about/fritz/profissional/mobile.webp';
export const fritzProfessionalImage = {
  desktop,
  tablet,
  mobile,
  alt: 'Profissional da Fritz cuidando de um estofado.',
};

export const fritzServicePhotos = [
  {
    desktop: real0desktop,
    tablet: real0tablet,
    mobile: real0mobile,
    alt: 'Atendimento da Fritz em cadeiras, foto publicada por Bia Marina.',
  },
  {
    desktop: real1desktop,
    tablet: real1tablet,
    mobile: real1mobile,
    alt: 'Sofá claro, foto publicada na avaliação de Ketti Pars.',
  },
  {
    desktop: real2desktop,
    tablet: real2tablet,
    mobile: real2mobile,
    alt: 'Detalhe de assento de sofá, foto publicada por Ketti Pars.',
  },
  {
    desktop: real3desktop,
    tablet: real3tablet,
    mobile: real3mobile,
    alt: 'Estofado retrátil, foto publicada por Ketti Pars.',
  },
  {
    desktop: real4desktop,
    tablet: real4tablet,
    mobile: real4mobile,
    alt: 'Sofá cinza, foto publicada na avaliação de Camila Rosa Gomes.',
  },
  {
    desktop: real5desktop,
    tablet: real5tablet,
    mobile: real5mobile,
    alt: 'Cadeiras estofadas, foto publicada por Bia Marina.',
  },
] as const;
export const fritzAboutCards = [
  {
    id: 'sofas',
    title: 'Sofás',
    text: 'Fotos de estofados compartilhadas por clientes da Fritz.',
    images: fritzServicePhotos[4],
  },
  {
    id: 'cadeiras',
    title: 'Cadeiras',
    text: 'Cuidado com as peças que fazem parte da rotina da sua casa.',
    images: fritzServicePhotos[5],
  },
  {
    id: 'tecidos',
    title: 'Cada tecido',
    text: 'Consulte o serviço indicado para as características do seu estofado.',
    images: fritzServicePhotos[1],
  },
  {
    id: 'conforto',
    title: 'Seu conforto',
    text: 'Converse com a Fritz sobre higienização e impermeabilização.',
    images: fritzServicePhotos[3],
  },
] as const;
export const fritzLifePhotos = [
  fritzServicePhotos[0],
  fritzServicePhotos[2],
  fritzServicePhotos[4],
  fritzServicePhotos[5],
] as const;
