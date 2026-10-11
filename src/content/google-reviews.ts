import thays from '@/assets/images/shared/fritz/google-reviews/thays-leal.webp';
import reviewer0 from '@/assets/images/shared/fritz/google-reviews/camila-rosa-gomes.webp';
import reviewer1 from '@/assets/images/shared/fritz/google-reviews/bia-marina.webp';
import reviewer2 from '@/assets/images/shared/fritz/google-reviews/ketti-pars.webp';
export const googleReviews = {
  profileName: 'Higienização e Impermeabilização Fritz',
  rating: '5,0',
  count: 289,
  checkedAt: '10/10/2026',
  profile: 'https://www.google.com/maps?cid=4180201816637624609',
  reviewUrl: 'https://www.google.com/maps?cid=4180201816637624609',
  items: [
    {
      name: 'Camila Rosa Gomes',
      image: reviewer0,
      text: 'o Alfredo é muito cuidadoso e comprometido',
      excerpt: true,
      profile:
        'https://www.google.com/maps/contrib/113089659287269548207/reviews?hl=pt-BR',
    },
    {
      name: 'Bia Marina',
      image: reviewer1,
      text: 'Excelente serviço! Limpeza de qualidade, bom atendimento e trabalho muito limpo',
      excerpt: true,
      profile:
        'https://www.google.com/maps/contrib/107311281463588243509/reviews?hl=pt-BR',
    },
    {
      name: 'Ketti Pars',
      image: reviewer2,
      text: 'Super recomendo o trabalho do Fritz! Caprichoso, cuidadoso e empenhado em solucionar o problema.',
      excerpt: true,
      profile:
        'https://www.google.com/maps/contrib/109811868611662659037/reviews?hl=pt-BR',
    },
    {
      name: 'Thays Leal',
      image: thays,
      text: 'Serviço excelente! Impermeabilizei minhas cadeiras e cabeceira, ele isolou a parte de madeira com cuidado.',
      excerpt: true,
      profile:
        'https://www.google.com/maps/contrib/105085449511163122408/reviews?hl=pt-BR',
    },
  ],
} as const;
