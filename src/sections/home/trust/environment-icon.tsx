const drawings = {
  cozinha:
    'M5 12h38v28H5zM5 25h38M18 12v28M30 12v28M9 19h5M23 19h3M35 19h4M7 8h10V5h-7M35 8h7M6 40v3M42 40v3',
  quarto:
    'M6 22v19M42 22v19M6 33h36M10 22V13h28v9M6 25h36v8H6zM12 19h9v6h-9M27 19h9v6h-9',
  sala: 'M8 23v-8h32v8M8 33h32M5 23h7v12H5zM36 23h7v12h-7zM12 25h24v10H12M8 35v5M40 35v5M19 25v10M29 25v10',
  banheiro:
    'M9 5h30v16H9zM5 26h38v14H5zM5 32h38M18 26v14M30 26v14M19 24h10M24 24v-3M9 40v3M39 40v3',
  escritorio:
    'M4 27h40M8 27v15M40 27v15M16 7h20v14H16zM22 21v6M14 42V31h13M27 31v11M14 37h13M8 11h3v12H8',
  armario:
    'M9 4h30v38H9zM24 4v38M9 31h30M19 17v8M29 17v8M14 36h5M29 36h5M12 42v3M36 42v3',
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
