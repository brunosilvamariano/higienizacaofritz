import '@/sections/home/home.css';
import { Contact } from '@/sections/home/contact/contact';
import { Hero } from '@/sections/home/hero/hero';
import { Benefits } from '@/sections/home/benefits/benefits';
import { ReviewStrip } from '@/sections/home/review-strip/review-strip';
import { ServicesProjects } from '@/sections/home/services/services-projects';
import { Process } from '@/sections/home/process/process';
import { BeforeAfter } from '@/sections/home/before-after/before-after';
import { Testimonials } from '@/sections/home/testimonials/testimonials';
import { AboutFritz } from '@/sections/home/about-fritz/about-fritz';
import { ServiceArea } from '@/sections/home/service-area/service-area';
import { Faq } from '@/sections/home/faq/faq';

export default function Home() {
  return (
    <main
      id="conteudo"
      className="page-content home-palette home-refined tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <Hero />
      <Benefits />
      <ReviewStrip />
      <ServicesProjects />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <AboutFritz />
      <ServiceArea />
      <Faq />
      <Contact />
    </main>
  );
}
