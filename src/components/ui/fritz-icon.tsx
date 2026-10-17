/** Tabler Icons, MIT © Paweł Kuna. Sources/license: src/assets/icons/tabler.
 * rug adapts the existing Fritz carpet drawing; shield-droplet combines Tabler shield with a local drop.
 */
const drawings = {
  sofa: 'M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2 M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3 M12 5v9',
  'bed-flat':
    'M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5 M3 16h18',
  shield:
    'M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3',
  droplet:
    'M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546',
  photo:
    'M15 8h.01 M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12 M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5 M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3',
  'calendar-check':
    'M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6 M16 3v4 M8 3v4 M4 11h16 M15 19l2 2l4 -4',
  spray:
    'M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7 M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4 M15 7h.01 M18 9h.01 M18 5h.01 M21 3h.01 M21 7h.01 M21 11h.01 M10 7h1',
  'shield-check':
    'M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06 M15 19l2 2l4 -4',
  rug: 'M5 5h14v14H5z M8 8h8v8H8z M7 3v2 M12 3v2 M17 3v2 M7 19v2 M12 19v2 M17 19v2',
  'shield-droplet':
    'M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3 M12 7.5c-1.2 1.8-3 3.6-3 5.2a3 3 0 0 0 6 0c0-1.6-1.8-3.4-3-5.2z',
} as const;
export type FritzIconName = keyof typeof drawings;
export function FritzIcon({ name }: { name: FritzIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={drawings[name]} />
    </svg>
  );
}
