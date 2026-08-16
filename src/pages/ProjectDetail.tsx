import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PlaceholderImage from '../components/PlaceholderImage'
import TechBadge from '../components/TechBadge'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { projectLinkRows } from '../data/projectLinks'

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section text-center">
        <Container>
          <span className="eyebrow">Not found</span>
          <h1>Project not found</h1>
          <p className="lead mb-4">
            This project doesn&apos;t exist or may have been moved.
          </p>
          <Link
            to="/projects"
            className="link-back fw-semibold text-decoration-none"
          >
            <span className="link-hover-group">
              <i className="bi bi-arrow-left" />
              Back to projects
            </span>
          </Link>
        </Container>
      </section>
    )
  }

  const variant = ((projects.indexOf(project) % 4) + 1) as 1 | 2 | 3 | 4
  const otherProjects = projects.filter((item) => item.slug !== project.slug)

  return (
    <>
      <PageHeader
        backTo="/projects"
        backLabel="Back to projects"
        eyebrow={project.role}
        title={project.title}
        subtitle={project.summary}
      />

      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={8}>
              <h2>Overview</h2>
              {project.description.map((paragraph) => (
                <p key={paragraph} className="lead">
                  {paragraph}
                </p>
              ))}

              <h2 className="mt-5">Highlights</h2>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="mb-2">
                    {highlight}
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={4}>
              <PlaceholderImage
                label={`${project.title} screenshot`}
                ratio="4 / 3"
                variant={variant}
                rounded="md"
                className="mb-4"
              />

              <div className="p-4 tech-stack-card">
                <h3>Tech Stack</h3>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>

                <h3>Links</h3>
                <div className="d-flex flex-column gap-2">
                  {projectLinkRows.map((row) => {
                    const href = project.links[row.key]
                    return href ? (
                      <a
                        key={row.key}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link"
                      >
                        <i className={`bi bi-${row.icon}`} aria-hidden="true" />
                        {row.label}
                      </a>
                    ) : (
                      <span
                        key={row.key}
                        className="project-card-link project-card-link-unavailable"
                      >
                        <i className={`bi bi-${row.icon}`} aria-hidden="true" />
                        {row.unavailableLabel}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {otherProjects.length > 0 && (
        <section className="section section-soft">
          <Container>
            <h2 className="mb-4">More Projects</h2>
            <Row className="g-4">
              {otherProjects.map((item) => {
                const otherVariant = ((projects.indexOf(item) % 4) + 1) as
                  1 | 2 | 3 | 4
                return (
                  <Col key={item.slug} md={6}>
                    <ProjectCard project={item} variant={otherVariant} />
                  </Col>
                )
              })}
            </Row>
          </Container>
        </section>
      )}
    </>
  )
}

export default ProjectDetail
