export interface Env {
  ASSETS: Fetcher
  RESEND_API_KEY: string
  TURNSTILE_SECRET_KEY: string
  CONTACT_TO_EMAIL: string
}

interface ContactPayload {
  name?: string
  email?: string
  message?: string
  honeypot?: string
  turnstileToken?: string
}

const MAX_LENGTH = { name: 100, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json({ error: 'Method not allowed.' }, 405)
      }
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  // Honeypot: bots tend to fill every field. Pretend success without sending anything.
  if (body.honeypot) {
    return json({ ok: true })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()
  const turnstileToken = body.turnstileToken ?? ''

  const errors: Record<string, string> = {}

  if (!name) {
    errors.name = 'Name is required.'
  } else if (name.length > MAX_LENGTH.name) {
    errors.name = 'Name is too long.'
  }

  if (!email) {
    errors.email = 'Email is required.'
  } else if (email.length > MAX_LENGTH.email || !EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length > MAX_LENGTH.message) {
    errors.message = 'Message is too long.'
  }

  if (!turnstileToken) {
    errors.turnstile = 'Please complete the verification challenge.'
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors }, 400)
  }

  const verified = await verifyTurnstile(
    turnstileToken,
    env.TURNSTILE_SECRET_KEY,
    request.headers.get('CF-Connecting-IP'),
  )
  if (!verified) {
    return json(
      { errors: { turnstile: 'Verification failed. Please try again.' } },
      400,
    )
  }

  const sent = await sendEmail(env, name, email, message)
  if (!sent) {
    return json(
      { error: 'Could not send your message. Please try again later.' },
      502,
    )
  }

  return json({ ok: true })
}

async function verifyTurnstile(
  token: string,
  secret: string,
  ip: string | null,
): Promise<boolean> {
  const form = new FormData()
  form.append('secret', secret)
  form.append('response', token)
  if (ip) form.append('remoteip', ip)

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form },
  )
  const data = (await response.json()) as { success: boolean }
  return data.success === true
}

async function sendEmail(
  env: Env,
  name: string,
  email: string,
  message: string,
): Promise<boolean> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  })
  return response.ok
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
