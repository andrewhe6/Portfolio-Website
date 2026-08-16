import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import ProjectCard from '../components/ProjectCard'
import SocialLinks from '../components/SocialLinks'
import { projects } from '../data/projects'
import headshot from '../images/headshot.jpg'

const values = [
  {
    title: 'Curiosity',
    description:
      'I love learning and exploring new ideas, especially in software development. My curiosity is what drives me to continuously improve and grow as a software engineer.',
  },
  {
    title: 'Collaboration',
    description:
      'I believe collaboration and communication are necessary to achieve anything productive. I enjoy working with others to solve a common problem.',
  },
  {
    title: 'Adaptability',
    description: 'Projects rarely go exactly as planned, so being adaptable is crucial in fast-paced environments. Being flexible and open to change allows me to adjust to new situations and challenges effectively.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <span className="eyebrow">Hi, I&apos;m</span>
              <h1>Andrew He</h1>
              <p className="lead">
                Masters of Science in Computer Science student at the University of Hawaiʻi at Mānoa. 
              </p>
              <p className="lead">
                Full-stack software engineer with a passion for building scalable applications and learning new technologies.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/projects" className="btn btn-light btn-lg">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Contact Me
                </Link>
              </div>
            </Col>
            <Col lg={5} className="d-flex flex-column align-items-center">
              <div style={{ maxWidth: '280px', width: '100%' }}>
                <PlaceholderImage
                  label="Profile photo"
                  ratio="1 / 1"
                  variant={2}
                  icon="person"
                  rounded="circle"
                  src={headshot}
                  className="profile-photo-frame"
                />
              </div>
              <SocialLinks
                order={['email', 'github', 'linkedin']}
                layout="stacked"
                className="hero-social mt-3"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-soft">
        <Container>
          <div className="text-center mb-4">
            <span className="eyebrow">Selected work</span>
            <h2>Featured Projects</h2>
          </div>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={project.slug} md={6} lg={4}>
                <ProjectCard
                  project={project}
                  variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="text-center mb-4">
            <span className="eyebrow">How I work</span>
            <h2>What I Value</h2>
          </div>
          <Row className="g-4">
            {values.map((value) => (
              <Col key={value.title} md={4}>
                <div className="value-card h-100">
                  <h3>{value.title}</h3>
                  <p className="mb-0 text-muted">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="connect-card">
            <Row className="align-items-center g-4">
              <Col md={3} className="text-center">
                <div style={{ maxWidth: '160px', margin: '0 auto' }}>
                  <PlaceholderImage
                    label="Profile photo"
                    ratio="1 / 1"
                    variant={3}
                    icon="person"
                    rounded="circle"
                    src={headshot}
                    className="profile-photo-frame profile-photo-frame-compact"
                  />
                </div>
              </Col>
              <Col md={9}>
                <span className="eyebrow">Say hello</span>
                <h2>Connect With Me</h2>
                <p className="lead">
                  Feel free to reach out to me if my work interests you or if you have any questions.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Contact Me
                  </Link>
                  <a
                    href="mailto:andrewhe9264@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary btn-lg"
                  >
                    <i className="bi bi-envelope-fill me-2" aria-hidden="true" />
                    Email me
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
