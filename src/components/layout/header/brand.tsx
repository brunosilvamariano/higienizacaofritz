import Image from 'next/image';
import fritzMark from '@/assets/images/shared/fritz/fritz-mark.png';
export function Brand() {
  return (
    <a
      className="brand tw:flex tw:items-center"
      href="/#inicio"
      aria-label="Fritz — Higienização e impermeabilização — início"
    >
      <Image
        src={fritzMark}
        alt=""
        width={44}
        height={44}
        className="brand-logo"
      />
      <span className="brand-copy">
        <strong>FRITZ</strong>
        <small>Higienização e impermeabilização</small>
      </span>
    </a>
  );
}
