export function ZiyaraLogo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="inline-flex items-center gap-2">
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          aria-hidden="true"
          className="text-accent"
        >
          <path
            d="M11 1C6 4 3 8 3 13.5C3 18.5 6.5 23 11 25C15.5 23 19 18.5 19 13.5C19 8 16 4 11 1Z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d="M11 6C8.5 8 7.5 10.5 7.5 13.5C7.5 16.5 9 19 11 20.5C13 19 14.5 16.5 14.5 13.5C14.5 10.5 13.5 8 11 6Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
        <span className="font-serif text-2xl font-semibold tracking-tight">Ziyara</span>
      </span>
    </span>
  )
}
