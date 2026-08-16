import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import MinorProjectItem from '../components/MinorProjectItem'
import { projects, minorProjects } from '../data/projects'

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        subtitle="Explore the various projects I've had the opportunity to work on."
      />
      <section className="section">
        <Container>
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

      {minorProjects.length > 0 && (
        <section className="section section-soft">
          <Container>
            <div className="text-center mb-4">
              <span className="eyebrow">Also worth a look</span>
              <h2>Other Projects</h2>
            </div>
            <div className="mx-auto" style={{ maxWidth: '780px' }}>
              {minorProjects.map((project) => (
                <MinorProjectItem key={project.title} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

export default Projects
