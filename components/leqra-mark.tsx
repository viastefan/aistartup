type LeqraMarkProps = {
  className?: string
}

export function LeqraMark({ className }: LeqraMarkProps) {
  return (
    <svg className={className} viewBox="0 0 84 62" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="4" width="16" height="42" rx="5" fill="currentColor" />
      <rect x="22" y="38" width="42" height="16" rx="5" fill="currentColor" />
      <rect x="50" y="16" width="22" height="16" rx="5" fill="currentColor" />
      <path d="M60 16h8c4.4 0 8 3.6 8 8v12c0 4.4-3.6 8-8 8h-8V16Z" fill="currentColor" />
      <rect x="68" y="50" width="10" height="10" rx="3" fill="currentColor" />
    </svg>
  )
}
