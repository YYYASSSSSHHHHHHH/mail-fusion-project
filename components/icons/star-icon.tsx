interface StarIconProps {
  className?: string
}

export function StarIcon({ className }: StarIconProps) {
  return <span className={`material-symbols-outlined ${className}`}>star</span>
}
