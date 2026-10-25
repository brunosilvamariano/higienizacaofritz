'use client';
import { usePathname } from 'next/navigation';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { RoundLink } from '@/components/ui/round-link';
import { whatsappUrl } from '@/config/contact';
import './header.css';
import './mobile-navigation.css';

export function Header() {
  const pathname = usePathname();
  return (
    <div className="site-header-slot" data-home={pathname === '/'}>
      <header className="site-header" data-home={pathname === '/'}>
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
