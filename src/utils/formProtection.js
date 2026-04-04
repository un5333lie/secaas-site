/**
 * Client-side form protection utilities
 * Prevents bot submissions without degrading user experience.
 *
 * Layers:
 * 1. Honeypot — hidden field that bots auto-fill, humans never see
 * 2. Timing — reject submissions faster than a human could type (< 3 seconds)
 * 3. Rate limiting — max 3 submissions per 10 minutes per session
 * 4. Double-submit — prevent duplicate clicks
 */

const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX = 3
const MIN_FILL_TIME = 3000 // 3 seconds minimum to fill a form

// Track submissions in session storage
function getSubmissionLog () {
  try {
    const log = JSON.parse(sessionStorage.getItem('_ss_form_log') || '[]')
    const now = Date.now()
    // Prune entries older than window
    return log.filter(ts => now - ts < RATE_LIMIT_WINDOW)
  } catch {
    return []
  }
}

function recordSubmission () {
  const log = getSubmissionLog()
  log.push(Date.now())
  try {
    sessionStorage.setItem('_ss_form_log', JSON.stringify(log))
  } catch {
    // sessionStorage unavailable — still allow submission
  }
}

/**
 * Validate a form submission against anti-abuse checks.
 *
 * @param {Object} options
 * @param {string} options.honeypotValue — value of the hidden honeypot field
 * @param {number} options.formLoadTime — timestamp when the form rendered (Date.now())
 * @returns {{ ok: boolean, reason?: string, fakeSuccess?: boolean }}
 */
export function validateSubmission ({ honeypotValue, formLoadTime }) {
  // 1. Honeypot check — bots fill hidden fields
  if (honeypotValue && honeypotValue.trim() !== '') {
    return { ok: false, reason: 'honeypot', fakeSuccess: true }
  }

  // 2. Timing check — too fast = bot
  const elapsed = Date.now() - formLoadTime
  if (elapsed < MIN_FILL_TIME) {
    return { ok: false, reason: 'too_fast', fakeSuccess: true }
  }

  // 3. Rate limit — too many submissions
  const log = getSubmissionLog()
  if (log.length >= RATE_LIMIT_MAX) {
    return { ok: false, reason: 'rate_limited', fakeSuccess: false }
  }

  // All checks passed
  recordSubmission()
  return { ok: true }
}

/**
 * Returns the current timestamp for form load time tracking.
 * Call this when the form component mounts.
 */
export function getFormLoadTime () {
  return Date.now()
}
