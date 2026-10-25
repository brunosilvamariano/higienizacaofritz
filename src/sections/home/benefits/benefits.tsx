'use client';

import { type PointerEvent, useEffect, useRef, useState } from 'react';

import { TitleReveal } from '@/animations/title-reveal';
import { RoundLink } from '@/components/ui/round-link';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import { benefitsContent } from './benefits.content';
import './benefits.css';

function BenefitIcon({
  id,
}: {
  id: (typeof benefitsContent.items)[number]['id'];
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {id === 'tecido' ? (
        <>
          <path
            d="M24 6c5 4 10 5.5 15 6-1 14-6.5 23-15 28C15.5 35 10 26 9 12c5-.5 10-2 15-6Z"
            fill="currentColor"
            fillOpacity=".08"
          />
          <path
            d="M18 18h12v12H18zM22 18v12M26 18v12M18 22h12M18 26h12"
            opacity=".5"
          />
          <path d="m30 33 3 3 6-7" />
        </>
      ) : id === 'praticidade' ? (
        <>
          <path
            d="M12 24v-7a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v7H12Z"
            fill="currentColor"
            fillOpacity=".08"
          />
          <path d="M12 24a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V24a4 4 0 0 0-8 0v4H12v-4ZM24 12v16M10 36v4M38 36v4" />
          <path d="M6 19v-3M4.5 17.5h3M40 7v6M37 10h6" opacity=".5" />
        </>
      ) : (
        <>
          <path
            d="M7 10h25a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H17L7 40v-7a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
            fill="currentColor"
            fillOpacity=".08"
          />
          <path
            d="M36 17h5a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4v5l-8-5h-9"
            opacity=".5"
          />
          <path d="M12 20h15M12 25h10" />
        </>
      )}
    </svg>
  );
}
const count = benefitsContent.items.length;
const desktopQuery = '(min-width: 1100px) and (min-height: 650px)';

export function Benefits() {
  const runway = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const manualSelection = useRef<number | null>(null);
  const swipe = useRef<{
    id: number;
    x: number;
    y: number;
    left: number;
    dragging: boolean;
  } | null>(null);
  const suppressSwipeClick = useRef(false);
  const [active, setActive] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const element = runway.current;
    const cards = track.current;
    if (!element || !cards) return;
    const desktop = matchMedia(desktopQuery);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const animated = desktop.matches && !reduced.matches;
      element.dataset.animated = String(animated);
      if (!animated) {
        if (!desktop.matches) {
          const maximum = cards.scrollWidth - cards.clientWidth;
          setScrollPosition(maximum > 0 ? cards.scrollLeft / maximum : 0);
          const width =
            (cards.children[1] as HTMLElement).offsetLeft -
            (cards.children[0] as HTMLElement).offsetLeft;
          setActive(
            Math.max(
              0,
              Math.min(count - 1, Math.round(cards.scrollLeft / width)),
            ),
          );
        }
        return;
      }
      const top =
        Number.parseFloat(
          getComputedStyle(element).getPropertyValue('--benefits-pin-top'),
        ) || 110;
      const distance =
        element.offsetHeight -
        (element.firstElementChild as HTMLElement).offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, (top - element.getBoundingClientRect().top) / distance),
      );
      let current = 0;
      Array.from(cards.children).forEach((card, index) => {
        const reveal =
          manualSelection.current === null
            ? Math.max(0, Math.min(1, progress * (count + 0.5) - index))
            : Number(index <= manualSelection.current);
        (card as HTMLElement).style.setProperty('--reveal', String(reveal));
        if (reveal >= 0.5) current = index;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPageScroll = () => {
      manualSelection.current = null;
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    observer.observe(cards);
    addEventListener('scroll', onPageScroll, { passive: true });
    addEventListener('resize', schedule);
    desktop.addEventListener('change', schedule);
    reduced.addEventListener('change', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      removeEventListener('scroll', onPageScroll);
      removeEventListener('resize', schedule);
      desktop.removeEventListener('change', schedule);
      reduced.removeEventListener('change', schedule);
    };
  }, []);

  const select = (index: number) => {
    setActive(index);
    const element = runway.current;
    const cards = track.current;
    if (!element || !cards) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (element.dataset.animated === 'true') {
      manualSelection.current = index;
      Array.from(cards.children).forEach((card, cardIndex) => {
        (card as HTMLElement).style.setProperty(
          '--reveal',
          String(Number(cardIndex <= index)),
        );
      });
    } else if (!matchMedia(desktopQuery).matches) {
      const first = cards.children[0] as HTMLElement;
      const card = cards.children[index] as HTMLElement;
      cards.scrollTo({
        left: card.offsetLeft - first.offsetLeft,
        behavior: reduced ? 'instant' : 'smooth',
      });
    }
  };

  const finishSwipe = (event: PointerEvent<HTMLDivElement>) => {
    const gesture = swipe.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    swipe.current = null;
    const cards = event.currentTarget;
    if (!gesture.dragging) return;
    suppressSwipeClick.current = true;
    const maximum = cards.scrollWidth - cards.clientWidth;
    const first = cards.children[0] as HTMLElement;
    const positions = Array.from(cards.children, (card) =>
      Math.min(maximum, (card as HTMLElement).offsetLeft - first.offsetLeft),
    );
    const nearest = (left: number) =>
      positions.reduce(
        (best, position, index) =>
          Math.abs(position - left) < Math.abs(positions[best] - left)
            ? index
            : best,
        0,
      );
    const distance = gesture.x - event.clientX;
    const index =
      Math.abs(distance) > Math.min(60, cards.clientWidth * 0.18)
        ? nearest(gesture.left) + Math.sign(distance)
        : nearest(cards.scrollLeft);
    select(Math.max(0, Math.min(count - 1, index)));
    if (cards.hasPointerCapture(event.pointerId))
      cards.releasePointerCapture(event.pointerId);
  };

  return (
    <section
      id="beneficios"
      className="benefits"
      aria-labelledby="benefits-title"
      tabIndex={-1}
    >
      <div className="benefits-solution-container">
        <SectionEyebrow>Por que escolher o Fritz</SectionEyebrow>
        <div className="benefits-solution-heading tw:flex tw:justify-between">
          <TitleReveal
            id="benefits-title"
            text={benefitsContent.title}
            accent="cuidado."
          />
        </div>
        <div className="benefits-solution-runway" ref={runway}>
          <div className="benefits-solution-stage">
            <nav
              className="benefits-solution-progress tw:flex"
              aria-label="Escolher diferencial"
            >
              {benefitsContent.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ver ${item.title.toLowerCase()}`}
                  aria-current={active === index ? 'step' : undefined}
                  data-complete={index < active}
                  aria-controls={`benefit-${item.id}`}
                  onClick={() => select(index)}
                >
                  <span>
                    <BenefitIcon id={item.id} />
                    <span className="benefits-solution-step-label">Motivo</span>
                    <span className="benefits-solution-step-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                </button>
              ))}
            </nav>
            <div
              className="benefits-solution-track tw:grid"
              ref={track}
              onPointerDown={(event) => {
                suppressSwipeClick.current = false;
                if (
                  event.button !== 0 ||
                  !event.isPrimary ||
                  matchMedia(desktopQuery).matches
                )
                  return;
                if (event.pointerType === 'mouse') event.preventDefault();
                swipe.current = {
                  id: event.pointerId,
                  x: event.clientX,
                  y: event.clientY,
                  left: event.currentTarget.scrollLeft,
                  dragging: false,
                };
              }}
              onPointerMove={(event) => {
                const gesture = swipe.current;
                if (!gesture || gesture.id !== event.pointerId) return;
                const distance = gesture.x - event.clientX;
                if (!gesture.dragging) {
                  if (
                    Math.abs(distance) < 8 ||
                    Math.abs(distance) <= Math.abs(gesture.y - event.clientY)
                  )
                    return;
                  gesture.dragging = true;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  event.currentTarget.scrollTo({
                    left: event.currentTarget.scrollLeft,
                    behavior: 'instant',
                  });
                }
                event.currentTarget.scrollLeft = gesture.left + distance;
              }}
              onPointerUp={finishSwipe}
              onPointerCancel={(event) => {
                const gesture = swipe.current;
                if (gesture?.id !== event.pointerId) return;
                if (gesture.dragging) finishSwipe(event);
                else swipe.current = null;
              }}
              onClickCapture={(event) => {
                if (!suppressSwipeClick.current) return;
                suppressSwipeClick.current = false;
                event.preventDefault();
                event.stopPropagation();
              }}
              onScroll={() => {
                const cards = track.current;
                if (!cards || matchMedia(desktopQuery).matches) return;
                const maximum = cards.scrollWidth - cards.clientWidth;
                setScrollPosition(
                  maximum > 0
                    ? Math.max(0, Math.min(1, cards.scrollLeft / maximum))
                    : 0,
                );
                const width =
                  (cards.children[1] as HTMLElement).offsetLeft -
                  (cards.children[0] as HTMLElement).offsetLeft;
                const atEnd =
                  cards.scrollLeft >= cards.scrollWidth - cards.clientWidth - 2;
                setActive(
                  atEnd
                    ? count - 1
                    : Math.min(
                        count - 1,
                        Math.max(0, Math.round(cards.scrollLeft / width)),
                      ),
                );
              }}
            >
              {benefitsContent.items.map((item, index) => (
                <article
                  id={`benefit-${item.id}`}
                  className={`benefits-solution-card benefits-solution-card-${index + 1} tw:flex tw:flex-col`}
                  key={item.id}
                  aria-labelledby={`benefit-title-${item.id}`}
                >
                  <div className="benefits-solution-card-top tw:flex tw:items-center tw:justify-between">
                    <span className="benefits-solution-icon tw:flex tw:items-center tw:justify-center">
                      <BenefitIcon id={item.id} />
                    </span>
                  </div>
                  <h3 id={`benefit-title-${item.id}`}>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="benefits-solution-card-footer">
                    <RoundLink
                      className="benefits-solution-contact tw:justify-between"
                      icon="whatsapp"
                      separated
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title}: conversar pelo WhatsApp — abrir em nova aba`}
                      data-track-contact={`beneficios ${item.id}`}
                      onFocus={() => {
                        if (runway.current?.dataset.animated === 'true')
                          select(index);
                      }}
                    >
                      Falar com o Fritz
                    </RoundLink>
                  </div>
                </article>
              ))}
            </div>
            <div className="benefits-solution-scrollbar">
              <span className="benefits-solution-scrollrail" aria-hidden="true">
                <span
                  className="benefits-solution-scrollthumb"
                  style={{ transform: `translateX(${scrollPosition * 200}%)` }}
                />
              </span>
              <input
                className="benefits-solution-scrollinput"
                type="range"
                min={0}
                max={count - 1}
                step={1}
                value={active}
                aria-label="Navegar pelos diferenciais"
                aria-valuetext={benefitsContent.items[active].title}
                onChange={(event) => select(Number(event.currentTarget.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
