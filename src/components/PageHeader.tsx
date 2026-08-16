import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  backTo?: string
  backLabel?: string
}

function PageHeader({
  eyebrow,
  title,
  subtitle,
  backTo,
  backLabel = 'Back',
}: PageHeaderProps) {
  return (
    <section className="page-header">
      <Container>
        {backTo && (
          <Link
            to={backTo}
            className="link-back d-flex mb-3 text-decoration-none fw-semibold"
          >
            <span className="link-hover-group">
              <i className="bi bi-arrow-left" aria-hidden="true" />
              {backLabel}
            </span>
          </Link>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="lead mb-0">{subtitle}</p>}
      </Container>
    </section>
  )
}

export default PageHeader
