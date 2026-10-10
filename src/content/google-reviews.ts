import gustavo from '@/assets/images/shared/google-reviews/gustavo-silva.png';
import rique from '@/assets/images/shared/google-reviews/rique-yt.png';
import kaua from '@/assets/images/shared/google-reviews/kaua-lucindo.png';
import nayane from '@/assets/images/shared/google-reviews/nayane-freitas.png';
export const googleReviews = {
  profileName: 'Bruno Mariano Silva',
  rating: '5,0',
  count: 5,
  checkedAt: '10/10/2026',
  items: [
    {
      name: 'Gustavo Silva',
      image: gustavo,
      text: 'Ótimo profissional. […] sempre atento aos detalhes',
      excerpt: true,
      profile:
        'https://www.google.com/maps/contrib/117122593002217545413/reviews?hl=pt-BR',
    },
    {
      name: 'RIQUE YT',
      image: rique,
      text: 'os melhores sites de joinville',
      excerpt: false,
      profile:
        'https://www.google.com/maps/contrib/116564779564657719722/reviews?hl=pt-BR',
    },
    {
      name: 'Kauã H. Lucindo',
      image: kaua,
      text: 'o cara é bom!',
      excerpt: false,
      profile:
        'https://www.google.com/maps/contrib/115503429811888128782/reviews?hl=pt-BR',
    },
    {
      name: 'Nayane Freitas',
      image: nayane,
      text: null,
      excerpt: false,
      profile:
        'https://www.google.com/maps/contrib/105925686386066189451/reviews?hl=pt-BR',
    },
  ],
} as const;
