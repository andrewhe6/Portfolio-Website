import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from '../components/PageHeader'
import PlaceholderImage from '../components/PlaceholderImage'
import TechBadge from '../components/TechBadge'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI 96822',
    period: '2027 — 2028',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI 96822',
    period: '2023 — 2027',
  },
  {
    degree: 'High School Diploma',
    school: '\'Iolani School',
    location: 'Honolulu, HI 96826',
    period: '2019 — 2023',
  },
]

const coursework = [
  'Course One',
  'Course Two',
  'Course Three',
  'Course Four',
  'Course Five',
  'Course Six',
]

const builtWith = [
  { name: 'React', icon: 'diagram-3' },
  { name: 'TypeScript', icon: 'code-slash' },
  { name: 'Vite', icon: 'lightning-charge-fill' },
  { name: 'React Bootstrap', icon: 'bootstrap-fill' },
  { name: 'React Router', icon: 'signpost-split' },
  { name: 'Motion', icon: 'stars' },
  { name: 'Cloudflare Pages', icon: 'cloud-fill' },
]

const alsoUsing = [
  'Bootstrap Icons',
  'ESLint',
  'Prettier',
  'Fontsource',
  'Git',
]

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Get to know me"
        title="About Me"
        subtitle="Learn more about my background and interests."
      />

      <section className="section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col md={5}>
              <PlaceholderImage
                label="Portrait photo"
                ratio="4 / 5"
                variant={3}
                icon="person"
              />
            </Col>
            <Col md={7}>
              <h2>My Story</h2>
              <p>
                Like many people I know, video games were a big reason I became interested in computer science. In particular, the Pokémon games sparked my interest in programming. I would come across videos exploring various bugs and glitches in the games, and I was fascinated by how they worked. Many bugs often involved integer overflow and memory manipulation which intrigued me and made me question how code behaves under certain conditions. I have always thought of myself as a curious, logical, and analytical problem solver, which is why I decided to start learning to program on my own.
              </p>
              <p>
                Motivated from watching Minecraft modding videos, I started learning JavaScript from CodeAcademy (which I did not realize was completely different from Java at the time). Programming was hard to teach myself and I struggled a lot at first, quitting multiple times since it was difficult staying consistent. Eventually, I started learning Python through daily lessons on an app called SoloLearn (not sponsored) which gave me a good foundation. I then learned more in AP Computer Science Principles in high school, where I was able to make a simple Cookie Clicker-inspired game in Java, recreate checkers in C, and making a simple website about owls in Hawai`i. My proudest project was recreating chess in Python which was playable using the CLI and served as my final AP project. As I entered college, I knew I wanted to major in computer science.
              </p>
              <p>
                As I work on more projects, I continue to develop my skills and knowledge in the field of computer science. I love applying my knowledge and trying to solve problems. While I am not sure what the future holds, I am excited to continue learning and growing as a software engineer. I am always looking for new challenges and opportunities to improve my skills and make a positive impact in the world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-soft">
        <Container>
          <div className="text-center mb-4">
            <span className="eyebrow">Academic background</span>
            <h2>Education</h2>
          </div>
          <div className="mx-auto" style={{ maxWidth: '780px' }}>
            {education.map((item) => (
              <div key={item.degree} className="education-item py-3">
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <h3 className="mb-1">{item.degree}</h3>
                  <span className="text-muted medium text-nowrap d-none d-sm-block">
                    {item.period}
                  </span>
                </div>
                <p className="text-muted mb-0">{item.school}</p>
                <p className="text-muted mb-0">{item.location}</p>
                <span className="text-muted medium text-nowrap d-block d-sm-none mt-1">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="text-center mb-4">
            <span className="eyebrow">Academic focus</span>
            <h2>Relevant Coursework</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {coursework.map((course) => (
              <div key={course} className="interest-chip">
                <i className="bi bi-mortarboard-fill" aria-hidden="true" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-soft">
        <Container>
          <div className="text-center mb-5">
            <span className="eyebrow">Behind the scenes</span>
            <h2>How This Portfolio Was Built</h2>
          </div>

          <p className="eyebrow text-center d-block">Core Stack</p>
          <Row className="g-3 justify-content-center mb-5">
            {builtWith.map((tool) => (
              <Col key={tool.name} xs={6} md={4} lg={2}>
                <div className="skill-card h-100">
                  <i className={`bi bi-${tool.icon}`} aria-hidden="true" />
                  <span className="fw-semibold">{tool.name}</span>
                </div>
              </Col>
            ))}
          </Row>

          <p className="text-muted text-center small mb-2">Also powered by</p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {alsoUsing.map((tool) => (
              <TechBadge key={tool}>{tool}</TechBadge>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
