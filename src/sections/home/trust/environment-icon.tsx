const drawings = {
  sofa: 'M9 23v-8a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v8M5 22h8v14H5zM35 22h8v14h-8zM13 25h22v11H13M9 36v5M39 36v5M24 25v11',
  colchao:
    'M6 17l25-7 11 7-25 7zM6 17v13l11 7 25-7V17M17 24v13M10 24v4M23 27v4M29 25v4M35 23v4M17 15l11 7M23 13l11 7',
  poltrona:
    'M13 23V13a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v10M7 22h9v14H7zM32 22h9v14h-9zM16 25h16v11H16M11 36v5M37 36v5',
  tapete:
    'M9 10h30v28H9zM14 15h20v18H14zM9 18h5M34 30h5M14 24h20M12 6v4M18 6v4M24 6v4M30 6v4M36 6v4M12 38v4M18 38v4M24 38v4M30 38v4M36 38v4',
  cadeira:
    'M15 7h18v18H15zM12 25h24v7H12zM15 32v10M33 32v10M15 37h18M20 12h8M20 17h8',
  protecao:
    'M24 5l15 6v12c0 10-15 19-15 19S9 33 9 23V11zM24 13c-3 4-7 8-7 12a7 7 0 0 0 14 0c0-4-4-8-7-12z',
} as const;
export function EnvironmentIcon({ kind }: { kind: keyof typeof drawings }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d={drawings[kind]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
