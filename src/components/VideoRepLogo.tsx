export function VideoRepLogoSVG({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 12 12 L 12 26 M 12 12 L 26 12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 68 12 L 68 26 M 68 12 L 54 12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 12 68 L 12 54 M 12 68 L 26 68" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 68 68 L 68 54 M 68 68 L 54 68" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
