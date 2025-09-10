interface IconProps {
  className?: string
}

export function LinkIcon({ className }: IconProps) {
  return <span className={`material-symbols-outlined ${className}`}>link</span>
}

export function SparklesIcon({ className }: IconProps) {
  return <span className={`material-symbols-outlined ${className}`}>auto_awesome</span>
}

export function InboxIcon({ className }: IconProps) {
  return <span className={`material-symbols-outlined ${className}`}>move_to_inbox</span>
}
