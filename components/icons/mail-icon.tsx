interface MailIconProps {
  className?: string
}

export function MailIcon({ className }: MailIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      height="28"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10Z" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M12 22v-5l-4-4 4-4 4 4-4 4Z" fill="currentColor" />
    </svg>
  )
}
