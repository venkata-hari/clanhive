export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-label="ClanHive logo"
        className="h-8 w-8"
      >
        <polygon
          points="16,2 28,9 28,23 16,30 4,23 4,9"
          fill="var(--color-accent)"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="11" r="2.6" fill="var(--color-primary)" />
        <circle cx="10.5" cy="20" r="2.6" fill="var(--color-teal)" />
        <circle cx="21.5" cy="20" r="2.6" fill="var(--color-secondary)" />
        <path
          d="M16 11 L10.5 20 M16 11 L21.5 20 M10.5 20 L21.5 20"
          stroke="var(--color-primary)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight">ClanHive</span>
    </span>
  );
}
