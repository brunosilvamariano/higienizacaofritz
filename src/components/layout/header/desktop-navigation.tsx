'use client';
import { primaryNavigation } from '@/config/navigation';
export function DesktopNavigation() {
  return (
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {primaryNavigation.map((link) => (
        <a href={link.href} key={link.href}>
          <span className="nav-link-circle" aria-hidden="true" />
          <span className="tw:sr-only">{link.label}</span>
          <span className="nav-link-label" aria-hidden="true">
            {[false, true].map((duplicate) => (
              <span key={String(duplicate)}>
                {Array.from(link.label).map((letter, index, letters) => (
                  <i
                    // biome-ignore lint/suspicious/noArrayIndexKey: Letters belong to a fixed navigation label and never reorder.
                    key={`${letter}-${index}`}
                    style={{
                      transitionDelay: `${(index / Math.max(1, letters.length - 1)) * (duplicate ? 0.3 : 0.2)}s`,
                    }}
                  >
                    {letter}
                  </i>
                ))}
              </span>
            ))}
          </span>
        </a>
      ))}
    </nav>
  );
}
