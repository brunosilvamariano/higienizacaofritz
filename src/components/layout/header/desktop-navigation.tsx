'use client';

import { usePathname } from 'next/navigation';
import { primaryNavigation } from '@/config/navigation';

const desktopLinks = [
  ...primaryNavigation.slice(0, 3),
  { label: 'Dúvidas', href: '/#duvidas' },
];

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {desktopLinks.map((link) => (
        <a
          className="desktop-nav-link"
          href={link.href}
          key={link.href}
          aria-current={link.href === pathname ? 'page' : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
