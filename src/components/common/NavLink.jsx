function NavLink({
  href,
  label,
  onClick,
  className = '',
  variant = 'desktop',
  inverted = false,
}) {
  const base =
    variant === 'mobile'
      ? 'block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-brand-50 hover:text-ink'
      : inverted
        ? 'group relative px-1 py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-white'
        : 'group relative px-1 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-ink'

  return (
    <a href={href} onClick={onClick} className={`${base} ${className}`.trim()}>
      {label}
      {variant === 'desktop' && (
        <span
          aria-hidden
          className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${inverted ? 'bg-white' : 'bg-brand-500'}`}
        />
      )}
    </a>
  )
}

export default NavLink
