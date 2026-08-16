import type { FormEvent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PageHeader from '../components/PageHeader'
import SocialLinks from '../components/SocialLinks'

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Placeholder: wire up to an email service or Cloudflare Pages Function.
    event.preventDefault()
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Have a question or want to learn more? Reach out below!"
      />
      <section className="section">
        <Container>
          <Row className="g-5">
            <Col md={5}>
              <h2>Contact Info</h2>
              <p className="text-muted mb-4">
                I am always open to discussing new opportunities and interesting projects! I will do my best to respond as soon as possible.
              </p>
              <SocialLinks
                order={['email', 'github', 'linkedin']}
                layout="stacked"
                className="fs-5"
              />
            </Col>
            <Col md={7}>
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Leave a message for me here!"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
