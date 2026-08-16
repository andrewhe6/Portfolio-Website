interface TechBadgeProps {
  children: string
}

function TechBadge({ children }: TechBadgeProps) {
  return <span className="tech-badge">{children}</span>
}

export default TechBadge
