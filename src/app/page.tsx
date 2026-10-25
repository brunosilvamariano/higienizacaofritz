import '@/sections/home/home.css';
import '@/sections/home/home-concise.css';
import '@/sections/home/home-colors.css';
import { Contact } from '@/sections/home/contact/contact';
import { Hero } from '@/sections/home/hero/hero';
import { ServiceMarquee } from '@/sections/home/service-marquee/service-marquee';
import { ServicesProjects } from '@/sections/home/services/services-projects';
import { ReviewSelection } from '@/sections/home/testimonials/review-selection';
import { AboutSummary } from '@/sections/home/about-fritz/about-summary';
import { Faq } from '@/sections/home/faq/faq';

export default function Home() {
  return (
    <main
      id="conteudo"
      className="page-content home-palette home-refined home-concise tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <Hero />
      <ServiceMarquee />
      <ServicesProjects />
      <AboutSummary />
      <ReviewSelection />
      <Faq compact />
      <Contact />
    </main>
  );
}
