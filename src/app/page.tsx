import { BackToTop } from "@/components/layout/BackToTop";
import { InteractionRuntime } from "@/components/runtime/InteractionRuntime";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";
import { Preloader } from "@/components/layout/Preloader";
import { PreloaderRuntime } from "@/components/runtime/PreloaderRuntime";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Sidebar } from "@/components/layout/Sidebar";
import { SidebarBackdrop } from "@/components/layout/SidebarBackdrop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { structuredData } from "@/config/structured-data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Preloader />
      <PreloaderRuntime />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="app-shell" data-sidebar-state="expanded">
        <Sidebar />
        <SidebarBackdrop />
        <MobileMenuButton />
        <FloatingCta />
        <main className="site-main" id="conteudo" tabIndex={-1}>
          <Hero />
          <Marquee />
          <About />
          <SectionDivider />
          <Services />
          <Process />
          <Results />
          <SectionDivider />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
      <BackToTop />
      <InteractionRuntime />
    </>
  );
}
