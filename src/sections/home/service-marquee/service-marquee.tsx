'use client';
import { useEffect, useRef } from 'react';
import { FritzIconPath, type FritzIconName } from '@/components/ui/fritz-icon';
import './service-marquee.css';

const services: { label: string; icon: FritzIconName }[] = [
  { label: 'Higienização de estofados', icon: 'sofa' },
  { label: 'Higienização de colchões', icon: 'bed-flat' },
  { label: 'Higienização de tapetes', icon: 'rug' },
  { label: 'Impermeabilização', icon: 'shield-droplet' },
];
const repeatedServices = [0, 1, 2].flatMap((copy) =>
  services.map((item) => ({ ...item, key: `${copy}-${item.icon}` })),
);
function wave(y: number) {
  let d = `M-1440 ${y}`;
  for (let x = -1440; x < 4320; x += 1440) {
    d += ` C${x + 240} ${y - 46} ${x + 480} ${y - 46} ${x + 720} ${y} C${x + 960} ${y + 46} ${x + 1200} ${y + 46} ${x + 1440} ${y}`;
  }
  return d;
}
const centerline = wave(100);
function ribbon() {
  let d = `${wave(46)} L4320 154`;
  for (let x = 4320; x > -1440; x -= 1440) {
    d += ` C${x - 240} 200 ${x - 480} 200 ${x - 720} 154 C${x - 960} 108 ${x - 1200} 108 ${x - 1440} 154`;
  }
  return `${d} Z`;
}
export function ServiceMarquee() {
  const scene = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = scene.current;
    const path = svg?.querySelector<SVGPathElement>('#service-wave-route');
    if (!svg || !path) return;
    const labels = svg.querySelectorAll<SVGTextPathElement>('textPath');
    const icons = svg.querySelectorAll<SVGGElement>('[data-wave-icon]');
    const period = path.getTotalLength() / 4;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previous = 0;
    let progress = 0;
    let visible = true;
    const render = () => {
      labels.forEach((label, index) => {
        const distance = (index * period) / 4 - progress;
        label.setAttribute('startOffset', String(distance + 66));
        const point = path.getPointAtLength(Math.max(0, distance + 22));
        const next = path.getPointAtLength(Math.max(0, distance + 23));
        const angle =
          (Math.atan2(next.y - point.y, next.x - point.x) * 180) / Math.PI;
        icons[index]?.setAttribute(
          'transform',
          `translate(${point.x} ${point.y}) rotate(${angle})`,
        );
        icons[index]?.setAttribute(
          'visibility',
          distance < 0 ? 'hidden' : 'visible',
        );
      });
    };
    const tick = (time: number) => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) {
        previous = 0;
        return;
      }
      if (previous && visible && !document.hidden && !reduced.matches)
        progress = (progress + Math.min(time - previous, 64) * 0.032) % period;
      previous = time;
      render();
      frame = requestAnimationFrame(tick);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      render();
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      resume();
    });
    reduced.addEventListener('change', resume);
    document.addEventListener('visibilitychange', resume);
    render();
    observer.observe(svg);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      reduced.removeEventListener('change', resume);
      document.removeEventListener('visibilitychange', resume);
    };
  }, []);
  return (
    <section className="service-marquee" aria-label="Serviços do Fritz">
      <p className="tw:sr-only">
        {services.map(({ label }) => label).join('. ')}.
      </p>
      <svg
        ref={scene}
        className="service-marquee-scene"
        viewBox="0 0 1440 200"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path id="service-wave-route" d={centerline} />
        </defs>
        <path className="service-marquee-ribbon" d={ribbon()} />
        {repeatedServices.map((item) => {
          return (
            <g key={item.key}>
              <g data-wave-icon="" className="service-marquee-icon">
                <g
                  transform="translate(-22 -22) scale(1.833333)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <FritzIconPath name={item.icon} />
                </g>
              </g>
              <text
                className="service-marquee-text"
                dominantBaseline="central"
                textLength={Math.min(item.label.length * 13, 278)}
                lengthAdjust="spacingAndGlyphs"
              >
                <textPath href="#service-wave-route">{item.label}</textPath>
              </text>
            </g>
          );
        })}
      </svg>
    </section>
  );
}
