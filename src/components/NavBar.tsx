import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

function NavBar() {
  const { pathname } = useLocation()

  return (
    <Navbar
      expand="md"
      bg="body-tertiary"
      sticky="top"
      className="border-bottom"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="gradient-text fw-bold">
          Andrew He
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {links.map((link) => {
              const isActive =
                link.to === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.to)

              return (
                <Nav.Link
                  key={link.to}
                  as={NavLink}
                  to={link.to}
                  end={link.to === '/'}
                  className="position-relative nav-link-pill"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="position-relative">{link.label}</span>
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
