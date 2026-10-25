'use client';
import { useEffect, useRef } from 'react';

export function HeroEntrance() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = marker.current?.closest<HTMLElement>('.hero');
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    let play: (() => void) | undefined;
    let ready = false;
    const start = () => {
      ready = true;
      play?.();
    };
    window.addEventListener('traco:entrance-ready', start);
    void Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
      document.fonts.ready,
    ]).then(([{ gsap }, { ScrollTrigger }, { SplitText }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const splits: InstanceType<typeof SplitText>[] = [];
        let observer: ResizeObserver | undefined;
        const context = gsap.context(() => {
          const curtain =
            document.querySelector<HTMLElement>('.page-transition');
          const titleSplits = Array.from(
            element.querySelectorAll<HTMLElement>('.hero-title-line'),
          ).map((line) =>
            SplitText.create(line, { type: 'words,chars', mask: 'chars' }),
          );
          splits.push(...titleSplits);
          const description =
            element.querySelector<HTMLElement>('.hero-description');
          const descriptionSplit = description
            ? SplitText.create(description, { type: 'lines', mask: 'lines' })
            : undefined;
          if (descriptionSplit) splits.push(descriptionSplit);
          const restoreText = () => {
            splits.forEach((split) => {
              split.revert();
            });
          };
          // Times and power2.out match the published reference's hero timeline.
          const timeline = gsap.timeline({
            paused: true,
            defaults: { ease: 'power2.out' },
            onComplete: restoreText,
          });
          timeline
            .fromTo(
              element,
              { clipPath: 'inset(50% 50% round 24px)' },
              {
                clipPath: 'inset(0% 0% round 24px)',
                duration: 1.5,
                clearProps: 'clipPath',
              },
              0.25,
            )
            .from(
              '.hero-portrait img',
              { scale: 1.25, duration: 1.25, clearProps: 'transform' },
              0.25,
            )
            .from(
              '.hero-wordmark',
              {
                opacity: 0,
                y: 40,
                duration: 0.6,
                clearProps: 'opacity,transform',
              },
              1.59,
            )
            .from(
              titleSplits.flatMap((split) => split.chars),
              { opacity: 0, x: 20, duration: 0.6, stagger: 0.02 },
              2.11,
            )
            .from(
              [
                ...(descriptionSplit?.lines ?? []),
                ...Array.from(element.querySelectorAll('.hero-action')),
              ],
              {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.15,
                clearProps: 'opacity,transform',
              },
              2.94,
            );
          play = () => {
            if (!timeline.isActive() && timeline.progress() === 0)
              timeline.play();
          };
          let width = element.clientWidth;
          observer = new ResizeObserver(() => {
            if (element.clientWidth === width) return;
            width = element.clientWidth;
            // Complete and restore natural wrapping after an orientation change.
            if (timeline.progress() < 1) timeline.progress(1);
          });
          observer.observe(element);
          if (ready || curtain?.dataset.phase !== 'initial') play();
          gsap.to('.hero-portrait', {
            y: 100,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }, element);
        return () => {
          observer?.disconnect();
          context.revert();
          splits.forEach((split) => {
            split.revert();
          });
        };
      });
      element.dataset.entrancePrepared = 'true';
      window.dispatchEvent(new Event('traco:hero-prepared'));
      cleanup = () => media.revert();
    });
    return () => {
      disposed = true;
      window.removeEventListener('traco:entrance-ready', start);
      delete element.dataset.entrancePrepared;
      cleanup?.();
    };
  }, []);
  return <span ref={marker} hidden />;
}
