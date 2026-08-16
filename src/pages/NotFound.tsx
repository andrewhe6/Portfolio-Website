import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section text-center">
      <Container>
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lead mb-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="link-back fw-semibold text-decoration-none">
          <span className="link-hover-group">
            <i className="bi bi-arrow-left" />
            Back to home
          </span>
        </Link>
      </Container>
    </section>
  )
}

export default NotFound
