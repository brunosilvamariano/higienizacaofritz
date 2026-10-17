'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Entradas compartilhadas; cada seção mantém seus movimentos de rolagem. */
export function SectionEntrances() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function setup() {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
        document.fonts.ready,
      ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const splits: InstanceType<typeof SplitText>[] = [];
        document
          .querySelectorAll<HTMLElement>('[data-title-anim], [data-text-anim]')
          .forEach((element) => {
            const title = element.hasAttribute('data-title-anim');
            const refined =
              Boolean(element.closest('.home-refined')) &&
              !element.closest('.hero');
            const split = SplitText.create(element, {
              type: 'words,chars',
              mask: 'chars',
            });
            splits.push(split);
            gsap.set(split.chars, { yPercent: -100 });
            const timeline = gsap.timeline({ paused: true });
            timeline.to(
              split.chars,
              {
                yPercent: 0,
                duration: refined ? (title ? 0.7 : 0.55) : title ? 1 : 0.8,
                stagger: {
                  amount: refined ? (title ? 0.2 : 0.12) : title ? 0.5 : 0.4,
                },
                ease: refined
                  ? 'power3.out'
                  : title
                    ? 'back.inOut'
                    : 'power3.out',
              },
              title ? 0 : 0.2,
            );
            if (title) {
              const badges = element.parentElement?.querySelectorAll(
                '[data-floating-badge]',
              );
              if (badges?.length) {
                gsap.set(badges, { opacity: 0, scale: 0.5 });
                timeline.to(
                  badges,
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out',
                  },
                  1,
                );
              }
            }
            // Keep triggers until route cleanup: removing them during another
            // trigger's refresh can invalidate ScrollTrigger's iteration.
            ScrollTrigger.create({
              animation: timeline,
              trigger: element,
              start: 'clamp(top 90%)',
              end: 'clamp(bottom top)',
              toggleActions: 'play none none none',
              onRefresh: (trigger) => {
                if (trigger.scroll() >= trigger.end) timeline.progress(1);
                else if (trigger.scroll() >= trigger.start) timeline.play();
              },
            });
          });
        return () => {
          for (const split of splits) split.revert();
        };
      });
      media.add(
        '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
        () => {
          const originalStyles = new Map<Element, string | null>();
          document
            .querySelectorAll<HTMLElement>('[data-slide-cards]')
            .forEach((element) => {
              const cards = element.querySelectorAll('[data-slide-card]');
              for (const card of cards)
                originalStyles.set(card, card.getAttribute('style'));
              const rotations = Array.from(cards, (card) =>
                Number(gsap.getProperty(card, 'rotation')),
              );
              gsap.set(cards, {
                transition: 'none',
                x: '100vw',
                rotation: 40,
                transformOrigin: '100% 100%',
              });
              const timeline = gsap.timeline({ paused: true });
              timeline.to(cards, {
                x: 0,
                rotation: (index) => rotations[index],
                duration: 1,
                stagger: { amount: 0.4 },
                ease: 'back.out',
                onComplete() {
                  gsap.set(this.targets(), {
                    clearProps: 'transform,transformOrigin,transition',
                  });
                },
              });
              ScrollTrigger.create({
                animation: timeline,
                trigger: element,
                start: 'clamp(top center)',
                end: 'clamp(bottom top)',
                toggleActions: 'play none none none',
                onRefresh: (trigger) => {
                  if (trigger.scroll() >= trigger.end) timeline.progress(1);
                  else if (trigger.scroll() >= trigger.start) timeline.play();
                },
              });
            });
          return () => {
            for (const [card, style] of originalStyles) {
              if (style === null) card.removeAttribute('style');
              else card.setAttribute('style', style);
            }
          };
        },
      );
      ScrollTrigger.refresh();
    }
    void setup();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [pathname]);
  return null;
}
