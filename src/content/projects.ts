import type { StaticImageData } from 'next/image';
import { projectSlugs } from '@/config/routes';
import {
  fritzServicePhotos,
  fritzProfessionalImage,
} from '@/sections/about/fritz.images';
export type ProjectImage = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
};
export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  introduction: string;
  description: string;
  features: string[];
  images: Record<'capa' | 'angulo' | 'meio' | 'detalhe', ProjectImage>;
};
const records = [
  {
    title: 'Cuidado em cada detalhe',
    category: 'Estofados',
    photo: 4,
    introduction:
      'O cuidado da Fritz com as peças que fazem parte da sua rotina.',
    description:
      'Envie fotos do seu estofado e consulte a Fritz sobre higienização e indicação de impermeabilização para o tecido. Informe a quantidade de peças e sua localização para receber seu orçamento.',
  },
  {
    title: 'Cuidado com seu sofá',
    category: 'Sofás',
    photo: 1,
    introduction: 'Sofás fazem parte dos momentos de descanso e convivência.',
    description:
      'Mostre seu sofá inteiro e os detalhes que precisam de atenção. Conte se a peça é fixa ou retrátil e converse sobre o serviço indicado e os cuidados após o atendimento.',
  },
  {
    title: 'Cadeiras da sua rotina',
    category: 'Cadeiras',
    photo: 5,
    introduction:
      'Cuidado com as peças presentes nas refeições, encontros e trabalho.',
    description:
      'Informe a quantidade de cadeiras e envie fotos de assentos e encostos. Consulte disponibilidade de atendimento e orçamento com a Fritz.',
  },
  {
    title: 'Atenção ao tecido',
    category: 'Detalhes',
    photo: 2,
    introduction: 'Cada estofado tem características que merecem atenção.',
    description:
      'Envie fotos e informações disponíveis sobre o tecido da peça. Converse com a Fritz antes de escolher o procedimento e tire suas dúvidas sobre os cuidados indicados.',
  },
  {
    title: 'Conforto no dia a dia',
    category: 'Sofás retráteis',
    photo: 3,
    introduction: 'O cuidado acompanha as peças da sua casa.',
    description:
      'Mostre as características do seu sofá retrátil e as áreas que deseja higienizar. A Fritz orienta a conversa sobre o atendimento e a indicação de impermeabilização.',
  },
  {
    title: 'A Fritz em ação',
    category: 'Atendimento',
    photo: 0,
    introduction: 'Atendimento com atenção à peça e respeito pela sua casa.',
    description:
      'Compartilhe fotos, quantidade de peças e sua cidade. Alinhe o serviço, as condições de acesso e os cuidados após o atendimento diretamente com a Fritz.',
  },
];
export const projects: readonly Project[] = records.map((record, index) => ({
  id: String(index + 1).padStart(2, '0'),
  slug: projectSlugs[index],
  title: record.title,
  category: record.category,
  introduction: record.introduction,
  description: record.description,
  features: ['Higienização', 'Consulte a Fritz'],
  images: {
    capa: fritzServicePhotos[record.photo],
    angulo: fritzProfessionalImage,
    meio: fritzServicePhotos[5],
    detalhe: fritzServicePhotos[2],
  },
}));
export function projectPath(project: Project) {
  return `/projetos/${project.slug}`;
}
