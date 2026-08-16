import PlaceholderImage from './PlaceholderImage'
import type { Experience } from '../data/experience'

interface TimelineItemProps {
  entry: Experience
  variant?: 1 | 2 | 3 | 4
}

function TimelineItem({ entry, variant = 1 }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <span className="timeline-marker" aria-hidden="true" />
      <div className="d-flex gap-3 align-items-start">
        <PlaceholderImage
          label={`${entry.company} logo`}
          ratio="1 / 1"
          variant={variant}
          icon="building"
          rounded="md"
          hideLabel
          className="timeline-logo"
          src={entry.logo}
        />
        <div className="flex-grow-1">
          <span className="timeline-period">{entry.period}</span>
          <h3>{entry.role}</h3>
          <p className="timeline-company">{entry.company}</p>
          <ul>
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
