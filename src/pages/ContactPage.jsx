import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Mail, MessageSquare, ArrowRight, Check } from 'lucide-react'
import { validateSubmission, getFormLoadTime } from '../utils/formProtection'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const interests = [
  'Vulnerability Scanning',
  'Endpoint Protection',
  'Website Protection',
  'Cloud Security Posture',
  'Compliance Readiness (SOC 2, HIPAA, PCI)',
  'SeelieSec Advisor (AI CISO)',
  'Threat Intelligence',
  'Incident Response Retainer',
  'Managed Platform (Starter)',
  'Managed Platform (Professional)',
  'Managed Platform (Enterprise)',
  'Just exploring',
]

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', size: '', interest: '', message: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const formLoadTime = useRef(getFormLoadTime())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Anti-abuse validation (honeypot + timing + rate limit)
    const check = validateSubmission({
      honeypotValue: honeypot,
      formLoadTime: formLoadTime.current,
    })

    if (!check.ok) {
      if (check.reason === 'rate_limited') {
        setRateLimited(true)
        return
      }
      // Fake success for bots (honeypot/timing)
      if (check.fakeSuccess) {
        setSubmitted(true)
        return
      }
      return
    }

    // TODO: Connect to form backend (Formspree, Netlify Forms, or custom API)
    setSubmitted(true)
  }

  return (
    <>
      <SEO title="Contact" description="Get started with SeelieSec managed security. Tell us about your organization and security needs." path="/contact" />
      <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column — form */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-serif text-4xl tracking-tight text-text-heading sm:text-5xl">Get Started</h1>
            <p className="mt-6 text-lg text-text-secondary">
              Tell us about your security needs. We'll recommend the right
              services or platform tier for your organization.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 rounded-2xl border border-accent-green/30 bg-bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/20">
                  <Check className="h-6 w-6 text-accent-green-light" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-text-heading">Message sent!</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  We'll get back to you within 24 hours. Check your inbox for a confirmation.
                </p>
              </motion.div>
            ) : rateLimited ? (
              <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-bg-card p-8 text-center">
                <h3 className="font-serif text-xl text-text-heading">Too many submissions</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Please wait a few minutes before submitting again, or email us directly at sales@seeliesecurity.ai.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {/* Honeypot — hidden from humans, bots will fill it */}
                <div className="absolute -left-[9999px]" aria-hidden="true" tabIndex={-1}>
                  <label htmlFor="_company_url">Website</label>
                  <input
                    type="text" id="_company_url" name="_company_url"
                    value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-heading">Name</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-heading">Email</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-heading">Company</label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-text-heading">Company Size</label>
                    <select
                      id="size" name="size"
                      value={formData.size} onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green"
                    >
                      <option value="">Select size</option>
                      {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-text-heading">What are you interested in?</label>
                  <select
                    id="interest" name="interest"
                    value={formData.interest} onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green"
                  >
                    <option value="">Select an option</option>
                    {interests.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-heading">Message (optional)</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={formData.message} onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green resize-none"
                    placeholder="Tell us about your security needs, compliance requirements, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-green px-6 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/20"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right column — contact info + quick links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:pt-20"
          >
            {/* Direct contact */}
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-text-heading">Prefer to reach out directly?</h3>
              <div className="mt-6 space-y-4">
                <a href="mailto:sales@seeliesecurity.ai" className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-green-light transition-colors">
                  <Mail className="h-5 w-5 text-accent-green" strokeWidth={1.5} />
                  sales@seeliesecurity.ai
                </a>
                <a href="https://seeliesecurity.ai" className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent-green-light transition-colors">
                  <MessageSquare className="h-5 w-5 text-accent-green" strokeWidth={1.5} />
                  seeliesecurity.ai (AI Security consulting)
                </a>
              </div>
            </div>

            {/* Quick recommendations */}
            <div className="mt-8 rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-text-heading">Not sure where to start?</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-bg-deep p-4">
                  <p className="text-sm font-semibold text-accent-green-light">1-10 employees</p>
                  <p className="mt-1 text-xs text-text-secondary">Start with the Essentials bundle ($279/mo) or individual services.</p>
                </div>
                <div className="rounded-lg bg-bg-deep p-4">
                  <p className="text-sm font-semibold text-accent-green-light">11-50 employees</p>
                  <p className="mt-1 text-xs text-text-secondary">Full Protection bundle ($899/mo) or Starter platform ($1,139/mo) if you need SOC 2.</p>
                </div>
                <div className="rounded-lg bg-bg-deep p-4">
                  <p className="text-sm font-semibold text-accent-green-light">50-500 employees</p>
                  <p className="mt-1 text-xs text-text-secondary">Professional managed platform ($3,499/mo) — full stack with threat intel and IPS.</p>
                </div>
                <div className="rounded-lg bg-bg-deep p-4">
                  <p className="text-sm font-semibold text-accent-green-light">500+ employees</p>
                  <p className="mt-1 text-xs text-text-secondary">Enterprise platform ($7,129/mo) — HA, PCAP, custom SLAs, dedicated operations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}
