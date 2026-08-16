import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage'
import TechBadge from './TechBadge'
import type { Project } from '../data/projects'
import { projectLinkRows } from '../data/projectLinks'

interface ProjectCardProps {
  project: Project
  variant?: 1 | 2 | 3 | 4
}

function ProjectCard({ project, variant = 1 }: ProjectCardProps) {
  return (
    <Card className="project-card h-100 overflow-hidden">
      <PlaceholderImage
        label={`${project.title} screenshot`}
        ratio="16 / 9"
        variant={variant}
        rounded="none"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="project-card-title">
          <Link
            to={`/projects/${project.slug}`}
            className="text-decoration-none link-body-emphasis stretched-link"
          >
            {project.title}
          </Link>
        </Card.Title>
        <hr className="mt-2 mb-3" />
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
        <Card.Text className="project-card-summary">{project.summary}</Card.Text>
        <div className="flex-grow-1" />
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
              <span key={row.key} className="project-card-link project-card-link-unavailable">
                <i className={`bi bi-${row.icon}`} aria-hidden="true" />
                {row.unavailableLabel}
              </span>
            )
          })}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
