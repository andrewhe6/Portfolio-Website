import { socialLinks, type SocialKey } from '../data/social'

interface SocialLinksProps {
  order: SocialKey[]
  className?: string
  layout?: 'row' | 'stacked'
}

function SocialLinks({
  order,
  className = '',
  layout = 'row',
}: SocialLinksProps) {
  const wrapperClass =
    layout === 'stacked'
      ? `social-links-stacked d-flex flex-column gap-2 ${className}`
      : `social-links d-flex gap-3 ${className}`

  return (
    <div className={wrapperClass}>
      {order.map((key) => {
        const link = socialLinks[key]
        return (
          <a
            key={key}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={layout === 'row' ? link.label : undefined}
          >
            <i className={`bi bi-${link.icon}`} aria-hidden="true" />
            {layout === 'stacked' && (
              <span className="ms-2">{link.display}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
