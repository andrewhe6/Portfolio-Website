import TechBadge from './TechBadge'
import type { MinorProject } from '../data/projects'
import { projectLinkRows } from '../data/projectLinks'

interface MinorProjectItemProps {
  project: MinorProject
}

function MinorProjectItem({ project }: MinorProjectItemProps) {
  return (
    <div className="minor-project-item d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-start gap-3 py-3">
      <div>
        <h3 className="h5 mb-1">{project.title}</h3>
        <p className="text-muted mb-2">{project.summary}</p>
        <div className="d-flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center gap-2 flex-shrink-0">
        {projectLinkRows.map((row) => {
          const href = project.links[row.key]
          return href ? (
            <a
              key={row.key}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={row.label}
              aria-label={`${project.title}: ${row.label}`}
              className="project-card-link minor-project-link"
            >
              <i className={`bi bi-${row.icon}`} aria-hidden="true" />
            </a>
          ) : (
            <span
              key={row.key}
              title={row.unavailableLabel}
              aria-label={`${project.title}: ${row.unavailableLabel}`}
              className="project-card-link minor-project-link project-card-link-unavailable"
            >
              <i className={`bi bi-${row.icon}`} aria-hidden="true" />
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default MinorProjectItem
