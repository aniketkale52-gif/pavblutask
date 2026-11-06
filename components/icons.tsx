// Inline SVG icons and decorative art used across the page.
type IconProps = { size?: number; className?: string };

export function PatientsIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 22V14a4 4 0 0 1 8 0v8M12.5 22V14a4 4 0 0 1 8 0v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ size = 26, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ size = 26, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeadsetIcon({ size = 30, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 18v-3a10 10 0 0 1 20 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4.5" y="17" width="5.5" height="8.5" rx="2" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.6" />
      <rect x="22" y="17" width="5.5" height="8.5" rx="2" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.6" />
      <path d="M25 25.5c0 2-2.5 3-6 3h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* Decorative light-grey icons that fill the empty grid tiles (from the Figma design).
   They use currentColor, so the tint is set in CSS. */

// Vial outline. viewBox is cropped to the vial (x 11.94–36.06) so it can fill the tile's height.
export function BottleArt({ className }: IconProps) {
  return (
    <svg className={className} viewBox="11.94 0 24.12 48" fill="currentColor" aria-hidden="true">
      <path d="m31.47 13.15-.96-.55a3 3 0 0 1 -1.51-2.6v-2.18a3.01 3.01 0 0 0 2-2.82v-2a3.009 3.009 0 0 0 -3-3h-8a3.009 3.009 0 0 0 -3 3v2a3.01 3.01 0 0 0 2 2.82v2.18a3 3 0 0 1 -1.51 2.6l-.96.55a9.027 9.027 0 0 0 -4.53 7.81v22.04c0 2.76 1.97 5 4.38 5h15.24c2.41 0 4.38-2.24 4.38-5v-22.04a9.027 9.027 0 0 0 -4.53-7.81zm2.53 29.85c0 1.65-1.07 3-2.38 3h-15.24c-1.31 0-2.38-1.35-2.38-3v-3h20zm0-21h-20v-1.04a7 7 0 0 1 3.53-6.07l.95-.55a5.02 5.02 0 0 0 2.52-4.34v-2h6v2a5.02 5.02 0 0 0 2.52 4.34l.95.55a7 7 0 0 1 3.53 6.07z" />
    </svg>
  );
}

// Syringe, plunger top-right and needle bottom-left.
export function SyringeArt({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <path d="m28.712 7.292a1 1 0 0 0 -1.42 1.42l1.288 1.288-22.288 22.29a1.01 1.01 0 0 0 0 1.42l8 8a1.014 1.014 0 0 0 1.42 0l3.288-3.29-2.71-2.71a1 1 0 0 1 1.42-1.42l2.711 2.71 2.579-2.58-3.71-3.71a1 1 0 1 1 1.42-1.42l3.711 3.71 2.579-2.58-2.71-2.71a1 1 0 1 1 1.42-1.42l2.711 2.71 2.579-2.58-3.71-3.71a1 1 0 1 1 1.42-1.42l3.71 3.71 2.58-2.58-2.71-2.71a1 1 0 0 1 1.42-1.42l2.71 2.71 1.58-1.579 1.289 1.289a1.014 1.014 0 0 0 1.42 0 1.01 1.01 0 0 0 0-1.42z" />
      <path d="m47.707 10.293-10-10a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l2.29 2.293-2.173 2.17 5.42 5.42 2.17-2.173 2.29 2.29a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 .003-1.414z" />
      <path d="m5.29 37.29a1.008 1.008 0 0 0 0 1.42l1.293 1.29-6.29 6.29a1 1 0 1 0 1.414 1.414l6.293-6.287 1.29 1.293a1.014 1.014 0 0 0 1.42 0l.88-.88-5.42-5.42z" />
    </svg>
  );
}
