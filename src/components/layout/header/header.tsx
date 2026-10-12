'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import './header.css';
import './mobile-navigation.css';
export function Header() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    visible: true,
    solid: false,
  });

  useEffect(() => {
    let previous = Math.max(0, window.scrollY);
    let distance = 0;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - previous;
      previous = y;
      if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
      distance += delta;
      const scrolled = y > (header.current?.offsetHeight ?? 76) + 16;
      const focused =
        header.current?.contains(document.activeElement) &&
        document.activeElement?.matches(':focus-visible');
      setScrollState((current) => {
        let visible = current.visible;
        if (!scrolled || menuOpen || focused) visible = true;
        else if (distance <= -12) visible = true;
        else if (distance >= 28) visible = false;
        // Na primeira descida, sair do hero sem pintar a faixa de azul.
        // Depois de revelado, manter o fundo durante o recolhimento.
        const solid = scrolled && (visible || current.solid);
        return current.scrolled === scrolled &&
          current.visible === visible &&
          current.solid === solid
          ? current
          : { scrolled, visible, solid };
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [menuOpen]);

  return (
    <div className="site-header-slot" data-home={pathname === '/'}>
      <header
        ref={header}
        className="site-header"
        data-home={pathname === '/'}
        data-scrolled={scrollState.scrolled}
        data-visible={scrollState.visible}
        data-solid={scrollState.solid}
        onFocusCapture={() =>
          setScrollState((current) => ({
            ...current,
            visible: true,
            solid: current.scrolled,
          }))
        }
      >
        <div className="header-inner tw:flex tw:items-center tw:justify-between">
          <Brand />
          <DesktopNavigation />
          <MobileNavigation onOpenChange={setMenuOpen} />
        </div>
      </header>
    </div>
  );
}
