'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navigation, primaryNavigation } from '@/config/navigation';
import serviceImage from '@/assets/images/shared/services/sofas/desktop.webp';

export function DesktopNavigation() {
  const details = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !details.current?.contains(event.target)
      ) {
        details.current?.removeAttribute('open');
      }
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !details.current?.open) return;
      details.current.removeAttribute('open');
      details.current.querySelector('summary')?.focus();
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeEscape);
    };
  }, []);
  return (
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {primaryNavigation.slice(0, 3).map((link) => (
        <a className="desktop-nav-link" href={link.href} key={link.href}>
          {link.label}
          <span className="desktop-nav-separator" aria-hidden="true">
            /
          </span>
        </a>
      ))}
      <details ref={details} className="header-more">
        <summary>
          Mais{' '}
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </summary>
        <div className="header-mega">
          <div className="header-mega-links">
            <p>Conheça o Fritz</p>
            {navigation.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => details.current?.removeAttribute('open')}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            className="header-mega-feature"
            href="/servicos"
            onClick={() => details.current?.removeAttribute('open')}
          >
            <Image
              src={serviceImage}
              alt="Higienização de sofá com extratora."
              sizes="240px"
            />
            <span>
              Um cuidado para cada estofado <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </details>
    </nav>
  );
}
