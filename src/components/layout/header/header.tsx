'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { RoundLink } from '@/components/ui/round-link';
import { whatsappUrl } from '@/config/contact';
import './header.css';
import './mobile-navigation.css';

export function Header() {
  const pathname = usePathname();
  const [isFloating, setIsFloating] = useState(false);
  useEffect(() => {
    setIsFloating(false);
    if (pathname !== '/' && pathname !== '/servicos') return;
    const selector =
      pathname === '/' ? 'main.home-concise .hero' : 'main.services-page .hero';
    let observer: IntersectionObserver | undefined;
    const attach = () => {
      const hero = document.querySelector<HTMLElement>(selector);
      if (!hero) return;
      waiting.disconnect();
      setIsFloating(hero.getBoundingClientRect().bottom <= 0);
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFloating(
            !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
          );
        },
        { threshold: 0 },
      );
      observer.observe(hero);
    };
    // Next can update the pathname before committing the destination's main.
    const waiting = new MutationObserver(attach);
    waiting.observe(document.body, { childList: true, subtree: true });
    attach();
    return () => {
      waiting.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);
  return (
    <div
      className="site-header-slot"
      data-home={pathname === '/'}
      data-banner={pathname === '/servicos'}
    >
      <header
        className="site-header"
        data-floating={isFloating}
        data-home={pathname === '/'}
        data-banner={pathname === '/servicos'}
      >
        <div className="header-inner tw:flex tw:items-center tw:justify-between">
          <Brand />
          <DesktopNavigation />
          <div className="header-actions tw:flex tw:items-center">
            <RoundLink
              className="header-contact"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar com o Fritz pelo WhatsApp — abrir em nova aba"
              data-track-contact="header whatsapp"
            >
              Vamos conversar
            </RoundLink>
            <MobileNavigation />
          </div>
        </div>
      </header>
    </div>
  );
}
