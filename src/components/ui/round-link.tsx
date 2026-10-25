import type { ComponentPropsWithoutRef } from 'react';
import { GoogleIcon, WhatsAppIcon } from './social-icons';
import './round-link.css';

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'children'> & {
  children: string;
  icon?: 'arrow' | 'whatsapp' | 'google';
  separated?: boolean;
};

function LinkArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoundLink({
  children,
  className = '',
  icon = 'arrow',
  separated = false,
  ...props
}: Props) {
  const Icon =
    icon === 'whatsapp'
      ? WhatsAppIcon
      : icon === 'google'
        ? GoogleIcon
        : LinkArrow;
  return (
    <a
      className={`round-link tw:inline-flex tw:items-center ${className}`}
      data-icon={icon}
      data-separated={separated || undefined}
      {...props}
    >
      <span className="tw:sr-only">{children}</span>
      <span className="round-link-label" aria-hidden="true">
        <span className="round-link-text">
          <span>{children}</span>
          <span>{children}</span>
        </span>
      </span>
      <span
        className="round-link-circle tw:grid tw:place-items-center"
        aria-hidden="true"
      >
        <span className="round-link-arrows">
          <Icon />
          <Icon />
        </span>
      </span>
    </a>
  );
}
