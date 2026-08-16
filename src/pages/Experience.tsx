import Container from 'react-bootstrap/Container'
import PageHeader from '../components/PageHeader'
import TimelineItem from '../components/TimelineItem'
import { experience } from '../data/experience'

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="A timeline of my professional journey."
      />
      <section className="section">
        <Container style={{ maxWidth: '820px' }}>
          <div className="timeline">
            {experience.map((entry, index) => (
              <TimelineItem
                key={`${entry.company}-${entry.role}`}
                entry={entry}
                variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Experience
