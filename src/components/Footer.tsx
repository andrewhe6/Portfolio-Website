import Container from 'react-bootstrap/Container'
import SocialLinks from './SocialLinks'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-top py-4 mt-auto">
      <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
        <span className="text-muted small">&copy; {year} Andrew He</span>
        <SocialLinks
          order={['email', 'github', 'linkedin']}
          className="footer-social"
        />
      </Container>
    </footer>
  )
}

export default Footer
