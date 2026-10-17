import type { ReactNode } from 'react';
import './section-eyebrow.css';

function WaterRule({ trailing = false }: { trailing?: boolean }) {
  return (
    <span
      className={`section-eyebrow-rule${trailing ? ' section-eyebrow-rule-after' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 72 18" fill="none" aria-hidden="true">
        <path d="M1 9h49" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M63 1.5c-1.6 2.6-5 6.2-5 9a5 5 0 0 0 10 0c0-2.8-3.4-6.4-5-9Z"
          fill="currentColor"
        />
        <path
          d="M60.5 10.5c0 1.3.8 2.2 1.8 2.5"
          stroke="var(--white)"
          strokeOpacity=".65"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function SectionEyebrow({
  children,
  align = 'start',
  className = '',
}: {
  children: ReactNode;
  align?: 'start' | 'center';
  className?: string;
}) {
  return (
    <p
      className={`section-eyebrow ${align === 'center' ? 'section-eyebrow-centered' : ''} ${className}`}
    >
      <WaterRule />
      <span className="section-eyebrow-text">{children}</span>
      {align === 'center' && <WaterRule trailing />}
    </p>
  );
}
