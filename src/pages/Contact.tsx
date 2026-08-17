import { useEffect, useRef, useState, type FormEvent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PageHeader from '../components/PageHeader'
import SocialLinks from '../components/SocialLinks'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as
  string | undefined
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js'

function validate(name: string, email: string, message: string) {
  const errors: Record<string, string> = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email.trim()))
    errors.email = 'Enter a valid email address.'
  if (!message.trim()) errors.message = 'Please enter a message.'
  return errors
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)
  const turnstileContainerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [turnstileToken, setTurnstileToken] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return
    let cancelled = false

    const renderWidget = () => {
      if (cancelled || !turnstileContainerRef.current || !window.turnstile)
        return
      widgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        },
      )
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src^="${TURNSTILE_SCRIPT_SRC}"]`,
      )
      if (existing) {
        existing.addEventListener('load', renderWidget)
      } else {
        const script = document.createElement('script')
        script.src = TURNSTILE_SCRIPT_SRC
        script.async = true
        script.defer = true
        script.addEventListener('load', renderWidget)
        document.body.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [])

  const resetTurnstile = () => {
    setTurnstileToken('')
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = nameRef.current?.value ?? ''
    const email = emailRef.current?.value ?? ''
    const message = messageRef.current?.value ?? ''
    const honeypot = honeypotRef.current?.value ?? ''

    const fieldErrors = validate(name, email, message)
    if (!turnstileToken) {
      fieldErrors.turnstile = 'Please complete the verification challenge.'
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          honeypot,
          turnstileToken,
        }),
      })

      const data = (await response.json()) as {
        ok?: boolean
        error?: string
        errors?: Record<string, string>
      }

      if (!response.ok || !data.ok) {
        setErrors(
          data.errors ?? {
            form: data.error ?? 'Something went wrong. Please try again.',
          },
        )
        setStatus('error')
        resetTurnstile()
        return
      }

      setStatus('success')
      formRef.current?.reset()
      resetTurnstile()
    } catch {
      setErrors({
        form: 'Network error. Please check your connection and try again.',
      })
      setStatus('error')
      resetTurnstile()
    }
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
                I am always open to discussing new opportunities and interesting
                projects! I will do my best to respond as soon as possible.
              </p>
              <SocialLinks
                order={['email', 'github', 'linkedin']}
                layout="stacked"
                className="fs-5"
              />
            </Col>
            <Col md={7}>
              {status === 'success' && (
                <Alert variant="success">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </Alert>
              )}
              {errors.form && <Alert variant="danger">{errors.form}</Alert>}
              <Form ref={formRef} onSubmit={handleSubmit} noValidate>
                <Form.Group
                  controlId="contactCompany"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }}
                >
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    ref={honeypotRef}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    ref={nameRef}
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="you@example.com"
                    ref={emailRef}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Leave a message for me here!"
                    ref={messageRef}
                    isInvalid={!!errors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div ref={turnstileContainerRef} className="mb-3" />
                {errors.turnstile && (
                  <p className="text-danger small mb-3">{errors.turnstile}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
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
