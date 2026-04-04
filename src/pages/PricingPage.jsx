import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Check, ArrowRight, Sparkles, Building2, Castle,
  Shield, Eye, Server, Brain, ChevronDown, ChevronUp
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ============================================================ */
/* INDIVIDUAL SERVICES DATA                                      */
/* ============================================================ */
const services = [
  { name: 'Vulnerability Scanning', price: '$99', period: '/mo', description: 'Weekly external + internal scans, prioritized findings, remediation guidance, SLA tracking' },
  { name: 'Website Protection', price: '$99', period: '/mo', description: 'WAF (OWASP CRS 4.0), DDoS protection, uptime monitoring, weekly DAST scan, security headers' },
  { name: 'Email Security Monitoring', price: '$129', period: '/mo', description: 'Phishing detection, BEC monitoring, DMARC/DKIM/SPF config, credential compromise alerts' },
  { name: 'Endpoint Protection', price: '$149', period: '/mo', description: 'EDR on all devices, malware detection, file integrity monitoring, automated threat response' },
  { name: 'Cloud Security Posture', price: '$149', period: '/mo', description: 'Continuous AWS/Azure/GCP scanning, CIS benchmarks, IAM risk assessment, monthly posture report' },
  { name: 'SeelieSec Advisor', price: '$149', period: '/mo', description: 'AI-powered CISO: compliance gaps, policy recommendations, risk scoring, vendor reviews, board reports' },
  { name: 'Compliance Readiness', price: '$199', period: '/mo', description: 'SOC 2 / HIPAA / PCI DSS gap assessment, 74 procedure templates, compliance dashboard, quarterly review' },
  { name: 'Threat Intelligence', price: '$199', period: '/mo', description: 'OpenCTI platform with 7 feed connectors, IOC monitoring against your assets, weekly threat briefing' },
  { name: 'Incident Response Retainer', price: '$249', period: '/mo', description: '4-hour response SLA, evidence preservation, breach containment, notification guidance' },
]

const bundles = [
  {
    name: 'Essentials',
    price: '$279',
    period: '/mo',
    savings: 'Save 20%',
    services: ['Vulnerability Scanning', 'Endpoint Protection', 'Website Protection'],
    alaCarte: '$347',
  },
  {
    name: 'Compliance',
    price: '$399',
    period: '/mo',
    savings: 'Save 20%',
    services: ['Compliance Readiness', 'Cloud Security Posture', 'SeelieSec Advisor'],
    alaCarte: '$497',
  },
  {
    name: 'Full Protection',
    price: '$899',
    period: '/mo',
    savings: 'Save 30%',
    services: ['All 9 services included'],
    alaCarte: '$1,322',
    featured: true,
  },
]

/* ============================================================ */
/* MANAGED PLATFORM DATA                                         */
/* ============================================================ */
const platformTiers = [
  {
    icon: Sparkles,
    name: 'Starter',
    price: '$1,139',
    period: '/mo',
    audience: '1-50 endpoints',
    features: [
      'Dedicated tenant-isolated VPC',
      'Wazuh SIEM with basic correlation rules',
      'ClamAV antivirus + FleetDM visibility',
      'Suricata IDS (alert mode)',
      'Prometheus + Grafana monitoring',
      'AWS WAF + DDoS protection',
      'Daily Grype container scanning',
      'Uptime monitoring (public site)',
    ],
    notIncluded: ['Inline IPS', 'Threat intelligence platform', 'Security Onion PCAP', 'TheHive/Cortex/Shuffle'],
  },
  {
    icon: Building2,
    name: 'Professional',
    price: '$3,499',
    period: '/mo',
    audience: '50-500 endpoints',
    featured: true,
    features: [
      'Everything in Starter, plus:',
      'Suricata inline IPS (DROP tier)',
      'Zeek network metadata extraction',
      'Security Onion (1TB PCAP capture)',
      'OpenCTI + 7 threat intel feeds',
      'TheHive case management + Cortex',
      'Shuffle SOAR automation',
      '30 SIEM correlation rules (MITRE)',
      '12 automated response rules',
      'IOC blocking at 3 layers',
      'Slack SOC alert pipeline',
      '74 operational procedures',
      'Compliance dashboard (14 standards)',
    ],
    notIncluded: [],
  },
  {
    icon: Castle,
    name: 'Enterprise',
    price: '$7,129',
    period: '/mo',
    audience: '500+ endpoints',
    features: [
      'Everything in Professional, plus:',
      'Multi-AZ high availability (all on-demand)',
      'Security Onion with 2TB+ PCAP',
      'Custom SIEM rules + detection engineering',
      'Enhanced SLA (P1: 2 min, P2: 5 min)',
      'Custom procedures and playbooks',
      'Dedicated Grafana dashboards per team',
      'Annual penetration test coordination',
      '24/7 human SOC analyst available',
    ],
    notIncluded: [],
  },
]

const addOns = [
  { name: 'Additional 100 endpoints', price: '+$500/mo' },
  { name: 'Dedicated Security Onion node (1TB PCAP)', price: '+$500/mo' },
  { name: 'Premium threat intel feeds (commercial)', price: '+$300/mo' },
  { name: '24/7 human SOC analyst coverage', price: '+$2,500/mo' },
  { name: 'Human vCISO advisory (on-demand)', price: '$275/hr' },
  { name: 'Annual penetration test coordination', price: '+$1,000/mo billed annually' },
  { name: 'Custom SIEM correlation rule', price: '$200 one-time' },
  { name: 'Custom procedure document', price: '$500 one-time' },
]

const faqs = [
  {
    q: 'Can I start with individual services and upgrade later?',
    a: 'Yes. This is the recommended path. Start with what you need (e.g., Essentials bundle at $279/mo) and upgrade to a managed platform tier when you need a dedicated security stack.',
  },
  {
    q: 'Can I upgrade or downgrade platform tiers?',
    a: 'Upgrading is a same-day operation — Terraform scales the infrastructure. Downgrading requires 30-day notice.',
  },
  {
    q: 'What cloud providers do you support?',
    a: 'AWS (primary), Azure, and GCP. The platform deploys on Kubernetes and is cloud-agnostic. On-premises K8s clusters are also supported.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Infrastructure cost plus 15% managed service margin. We pass through cloud costs transparently — no hidden markups on compute or storage.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Starter tier includes a 14-day free trial. Individual services offer a 7-day trial. Contact sales@seeliesecurity.ai to get started.',
  },
  {
    q: 'What\'s the difference between SeelieSec Advisor and a human vCISO?',
    a: 'SeelieSec Advisor is always-on AI handling the 80% of CISO work that\'s repeatable: compliance analysis, policy recommendations, risk scoring, vendor reviews, reports. Human vCISO ($275/hr) is for the 20% that needs human judgment: incident command, regulatory strategy, board presentations.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold text-text-heading">{q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-text-muted" /> : <ChevronDown className="h-4 w-4 text-text-muted" />}
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-text-secondary">{a}</p>}
    </div>
  )
}

export default function PricingPage() {
  const [tab, setTab] = useState('services')

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="font-serif text-4xl tracking-tight text-text-heading sm:text-5xl">Pricing</h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Security that fits your budget. Start with individual services, scale
            to a managed platform when you're ready.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="mt-10 flex gap-2 rounded-xl bg-bg-card p-1 w-fit border border-border-subtle">
          {[
            { key: 'services', label: 'Individual Services' },
            { key: 'platform', label: 'Managed Platform' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === key
                  ? 'bg-accent-green text-bg-deep'
                  : 'text-text-secondary hover:text-text-heading'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* INDIVIDUAL SERVICES TAB                                       */}
        {/* ============================================================ */}
        {tab === 'services' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-12"
          >
            {/* Service cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <motion.div
                  key={svc.name}
                  variants={fadeIn}
                  className="rounded-2xl border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:border-accent-green/30"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-bold text-text-heading">{svc.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold text-accent-green-light">{svc.price}</span>
                      <span className="text-xs text-text-muted">{svc.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{svc.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Bundles */}
            <motion.div variants={fadeIn} className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-text-heading">Bundles</h2>
              <p className="mt-2 text-sm text-text-secondary">Combine services and save up to 30%.</p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {bundles.map((bundle) => (
                  <div
                    key={bundle.name}
                    className={`relative overflow-hidden rounded-2xl border bg-bg-card p-6 ${
                      bundle.featured
                        ? 'border-accent-green/50 shadow-[0_0_40px_-12px_rgba(91,138,114,0.2)]'
                        : 'border-border-subtle'
                    }`}
                  >
                    {bundle.featured && (
                      <div className="h-[3px] w-full bg-gradient-to-r from-accent-green to-accent-teal absolute top-0 left-0" />
                    )}
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-xl font-bold text-text-heading">{bundle.name}</h3>
                      <span className="rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green-light">
                        {bundle.savings}
                      </span>
                    </div>
                    <div className="mt-3">
                      <span className="text-3xl font-bold text-text-heading">{bundle.price}</span>
                      <span className="text-sm text-text-muted">{bundle.period}</span>
                      <span className="ml-2 text-xs text-text-muted line-through">{bundle.alaCarte}/mo</span>
                    </div>
                    <ul className="mt-5 space-y-2">
                      {bundle.services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2 text-sm text-text-primary">
                          <Check className="h-4 w-4 text-accent-green" strokeWidth={2} />
                          {svc}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                        bundle.featured
                          ? 'bg-accent-green text-bg-deep hover:bg-accent-green-light'
                          : 'border border-accent-green/30 text-accent-green-light hover:bg-accent-green/10'
                      }`}
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeIn} className="mt-8 text-center text-sm text-text-muted">
              All individual services are month-to-month. Annual prepay saves 10%.
            </motion.p>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* MANAGED PLATFORM TAB                                          */}
        {/* ============================================================ */}
        {tab === 'platform' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-12"
          >
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {platformTiers.map(({ icon: Icon, name, price, period, audience, features, notIncluded, featured }) => (
                <motion.div
                  key={name}
                  variants={fadeIn}
                  className={`relative flex flex-col overflow-hidden rounded-2xl border bg-bg-card ${
                    featured
                      ? 'border-accent-green/50 shadow-[0_0_60px_-12px_rgba(91,138,114,0.2)]'
                      : 'border-border-subtle'
                  }`}
                >
                  {featured && (
                    <div className="h-[3px] w-full bg-gradient-to-r from-accent-green to-accent-teal" />
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green-light">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {audience}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-bold text-text-heading">{name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-text-heading">{price}</span>
                      <span className="text-sm text-text-muted">{period}</span>
                    </div>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-text-primary">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" strokeWidth={2} />
                          {f}
                        </li>
                      ))}
                      {notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-text-muted line-through">
                          <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-center text-text-muted">-</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                        featured
                          ? 'bg-accent-green text-bg-deep hover:bg-accent-green-light hover:shadow-lg'
                          : 'border border-accent-green/30 text-accent-green-light hover:bg-accent-green/10'
                      }`}
                    >
                      {name === 'Enterprise' ? 'Contact Us' : 'Get Started'} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add-ons */}
            <motion.div variants={fadeIn} className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-text-heading">Add-Ons</h2>
              <p className="mt-2 text-sm text-text-secondary">Available with any managed platform tier.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {addOns.map((addon) => (
                  <div key={addon.name} className="flex items-center justify-between rounded-xl border border-border-subtle bg-bg-card px-5 py-3">
                    <span className="text-sm text-text-primary">{addon.name}</span>
                    <span className="text-sm font-semibold text-accent-green-light">{addon.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeIn} className="mt-8 text-center text-sm text-text-muted">
              All platform tiers include 10% discount with annual prepay. Infrastructure costs passed through transparently.
            </motion.p>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* FAQ                                                           */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="mt-24"
        >
          <h2 className="font-serif text-2xl font-bold text-text-heading">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24 text-center"
        >
          <h2 className="font-serif text-2xl text-text-heading">Not sure which plan is right?</h2>
          <p className="mt-3 text-text-secondary">Tell us about your organization and we'll recommend the right fit.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-green px-8 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all"
          >
            Talk to Sales <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
