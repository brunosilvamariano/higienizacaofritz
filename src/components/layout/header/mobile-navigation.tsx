'use client';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import serviceImage from '@/assets/images/shared/services/sofas/desktop.webp';
import { Brand } from './brand';
import { FritzIcon, type FritzIconName } from '@/components/ui/fritz-icon';
import { navigation } from '@/config/navigation';
import { contact, whatsappUrl } from '@/config/contact';
import { InstagramIcon } from '@/components/ui/social-icons';
import { RoundLink } from '@/components/ui/round-link';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { prefersReducedMotion } from '@/lib/media-queries';
const navigationIcons: Record<string, FritzIconName> = {
  '/#inicio': 'home',
  '/servicos': 'sofa',
  '/#avaliacoes': 'star',
  '/#sobre-a-fritz': 'user',
  '/#duvidas': 'help',
  '/#contato': 'phone',
};

export function MobileNavigation({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const closeButton = useRef<HTMLButtonElement>(null);
  const routeSelected = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingAnchor = useRef<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    const element = dialog.current;
    if (!element?.open || element.dataset.state === 'closing') return;
    if (prefersReducedMotion()) {
      element.close();
      return;
    }
    element.dataset.state = 'closing';
    timer.current = setTimeout(() => element.close(), 320);
  }
  function open() {
    const element = dialog.current;
    if (!element || element.open) return;
    if (timer.current) clearTimeout(timer.current);
    pendingAnchor.current = null;
    routeSelected.current = false;
    element.dataset.state = 'opening';
    element.showModal();
    element.scrollTop = 0;
    closeButton.current?.focus({ preventScroll: true });
    setIsOpen(true);
    onOpenChange?.(true);
  }
  useEffect(() => {
    if (!isOpen) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isOpen]);
  return (
    <div className="mobile-nav">
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-controls="site-menu"
        aria-expanded={isOpen}
        onClick={open}
      >
        <span className="menu-toggle-label">Menu</span>
        <span aria-hidden="true" className="menu-toggle-lines">
          <i />
          <i />
        </span>
      </button>
      <dialog
        ref={dialog}
        id="site-menu"
        className="mobile-dialog"
        aria-labelledby="mobile-menu-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              close();
            return;
          }
          if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.altKey ||
            event.shiftKey ||
            !(event.target instanceof Element)
          )
            return;
          const link = event.target.closest<HTMLAnchorElement>('a[href]');
          if (!link || link.target || link.hasAttribute('download')) return;
          const url = new URL(link.href);
          if (url.origin !== location.origin) return;
          if (url.pathname === location.pathname && url.hash) {
            event.preventDefault();
            pendingAnchor.current = url.hash;
          }
          routeSelected.current = url.pathname !== location.pathname;
          close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            close();
          }
          if (event.key === 'Tab') {
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
              ),
            ).filter((control) => control.getClientRects().length > 0);
            const first = controls[0];
            const last = controls.at(-1);
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
        }}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => {
          setIsOpen(false);
          onOpenChange?.(false);
          const hash = pendingAnchor.current;
          pendingAnchor.current = null;
          if (hash) requestAnimationFrame(() => navigateAnchor(hash));
          else if (!routeSelected.current)
            toggle.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top tw:flex tw:items-center tw:justify-between">
            <Brand />
            <h2 id="mobile-menu-title" className="tw:sr-only">
              Navegue pelo Fritz
            </h2>
            <button
              ref={closeButton}
              type="button"
              className="close-menu"
              aria-label="Fechar menu"
              onClick={close}
            >
              <span>Fechar</span>
              <span className="close-menu-lines" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
          <div className="mobile-menu-navigation">
            <p className="mobile-menu-eyebrow">
              <span aria-hidden="true" />
              Explore o Fritz
            </p>
            <nav className="mobile-links" aria-label="Menu completo">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={false}
                  style={
                    {
                      '--menu-link-order': index,
                    } as CSSProperties
                  }
                  aria-current={item.href === pathname ? 'page' : undefined}
                >
                  <span className="mobile-link-icon" aria-hidden="true">
                    <FritzIcon name={navigationIcons[item.href]} />
                  </span>
                  <span className="mobile-link-label">{item.label}</span>
                  <svg
                    className="mobile-link-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>
          <aside className="mobile-menu-aside">
            <Link className="mobile-menu-feature" href="/servicos">
              <Image
                src={serviceImage}
                alt="Higienização de sofá com extratora."
                fill
                sizes="(min-width: 992px) 420px, 1px"
              />
              <span className="mobile-menu-feature-copy">
                <small>Higienização e proteção</small>
                <span>
                  Cada tecido.
                  <br />
                  Um cuidado.
                </span>
                <span className="mobile-menu-feature-action">
                  Conhecer os serviços <span aria-hidden="true">↗</span>
                </span>
              </span>
            </Link>
            <div className="mobile-menu-contact">
              <p className="mobile-contact-description">
                Vamos cuidar do seu estofado?
              </p>
              <RoundLink
                href={whatsappUrl()}
                icon="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir orçamento pelo WhatsApp — abrir em nova aba"
                data-track-contact="menu completo whatsapp"
              >
                Pedir orçamento
              </RoundLink>
              <div className="mobile-menu-details tw:flex tw:items-center tw:justify-between">
                <a href={`tel:+${contact.whatsappNumber}`}>
                  {contact.whatsappDisplay}
                </a>
                <a
                  className="mobile-menu-social tw:flex tw:items-center"
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Fritz — abrir em nova aba"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>
          <div className="mobile-menu-bottom tw:flex tw:items-center tw:justify-between">
            <span>Higienização e impermeabilização</span>
            <span>
              <i aria-hidden="true" />
              Joinville e região
            </span>
          </div>
        </div>
      </dialog>
    </div>
  );
}
