interface TurnstileRenderOptions {
  sitekey: string
  callback?: (token: string) => void
  'expired-callback'?: () => void
  'error-callback'?: () => void
}

interface Window {
  turnstile?: {
    render: (
      container: string | HTMLElement,
      options: TurnstileRenderOptions,
    ) => string
    remove: (widgetId: string) => void
    reset: (widgetId: string) => void
    getResponse: (widgetId: string) => string | undefined
  }
}
