interface PlaceholderImageProps {
  label: string
  ratio?: string
  variant?: 1 | 2 | 3 | 4
  icon?: string
  rounded?: 'sm' | 'md' | 'circle' | 'none'
  hideLabel?: boolean
  className?: string
  src?: string
}

function PlaceholderImage({
  label,
  ratio = '16 / 9',
  variant = 1,
  icon = 'image',
  rounded = 'md',
  hideLabel = false,
  className = '',
  src,
}: PlaceholderImageProps) {
  const roundedClass =
    rounded === 'circle'
      ? 'rounded-circle'
      : rounded === 'sm'
        ? 'rounded-1'
        : rounded === 'none'
          ? ''
          : 'rounded-3'

  if (src) {
    return (
      <div
        className={`placeholder-image-frame placeholder-gradient-${variant} ${roundedClass} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={label}
          className={`placeholder-image-photo ${roundedClass}`}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`placeholder-image placeholder-gradient-${variant} ${roundedClass} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <i className={`bi bi-${icon}`} aria-hidden="true" />
      {!hideLabel && <span className="placeholder-image-label">{label}</span>}
    </div>
  )
}

export default PlaceholderImage
