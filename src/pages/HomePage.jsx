import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import {
  Shield, Zap, Eye, Lock, ArrowRight, Server, Brain,
  AlertTriangle, CheckCircle2, Sparkles, Building2, Castle,
  GitBranch, DollarSign, Users, Clock
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const stats = [
  { value: '42', label: 'Open-Source Tools', icon: Server },
  { value: '14', label: 'Security Standards', icon: Shield },
  { value: '74', label: 'Procedures Documented', icon: CheckCircle2 },
  { value: '12', label: 'Auto-Response Rules', icon: Zap },
  { value: '10m', label: 'IOC Detection Latency', icon: Clock },
  { value: '3', label: 'Layers of Blocking', icon: Lock },
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Enterprise threats, startup budget',
    description: 'You face the same adversaries as Fortune 500 companies, but you can\'t afford a $300K/yr CISO and a 20-person SOC team.',
  },
  {
    icon: Clock,
    title: 'AI-powered attacks move fast',
    description: 'Automated attacks give you minutes to respond, not days. If your detection runs daily, you\'re blind 23 hours out of 24.',
  },
  {
    icon: DollarSign,
    title: 'Vendor lock-in and hidden costs',
    description: 'Proprietary security tools lock you in with annual contracts, per-seat pricing, and opaque costs that balloon at renewal.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Choose your plan',
    description: 'Pick individual services starting under $100/mo, or a managed platform tier for your dedicated security stack.',
  },
  {
    step: '2',
    title: 'We deploy in your cloud',
    description: 'Terraform provisions your isolated VPC with encrypted storage, WAF, and the full security tool stack in AWS, Azure, or GCP.',
  },
  {
    step: '3',
    title: 'AI manages operations',
    description: 'Threats are detected, blocked, and remediated automatically. You only get notified when a human decision is genuinely needed.',
  },
]

const tiers = [
  {
    icon: Sparkles,
    name: 'Individual Services',
    audience: 'Small Business',
    highlight: 'Starting under $100/mo',
    description: 'Buy only what you need — vulnerability scanning, endpoint protection, compliance readiness, and more. No infrastructure commitment.',
    badge: 'No commitment',
    href: '/pricing',
  },
  {
    icon: Building2,
    name: 'Managed Platform',
    audience: 'Mid-Market',
    highlight: 'Full security stack in your cloud',
    description: '42 open-source tools deployed in your own VPC. Inline IPS, threat intelligence, SIEM correlation, and automated incident response.',
    badge: 'Most popular',
    href: '/pricing',
    featured: true,
  },
  {
    icon: Castle,
    name: 'Enterprise',
    audience: 'Large Organization',
    highlight: 'HA everything, custom SLAs',
    description: 'Multi-AZ high availability, 2TB packet capture, sub-5-minute P1 response, dedicated security operations, and white-glove onboarding.',
    badge: 'White glove',
    href: '/contact',
  },
]

const trustSignals = [
  { icon: GitBranch, title: '100% Open Source', description: 'Every tool in the stack is open source. No vendor lock-in, no proprietary black boxes. You own your security data.' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'Infrastructure cost + 15% margin. We pass through cloud costs transparently — no hidden markups, no surprise renewals.' },
  { icon: Users, title: 'Your Cloud, Your Data', description: 'Deployed in YOUR AWS/Azure/GCP account. Your data never leaves your environment. Full tenant isolation.' },
]

export default function HomePage() {
  return (
    <>
      <SEO path="/" />
      <div>
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-green/5 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-4 py-1.5 text-xs font-medium text-accent-green-light">
                <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
                Managed Security-as-a-Service
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-6 font-serif text-4xl tracking-tight text-text-heading sm:text-5xl lg:text-6xl"
            >
              Enterprise Security.{' '}
              <span className="text-accent-green">Open Source.</span>{' '}
              AI-Powered.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl"
            >
              42 open-source security tools deployed in your cloud, fully managed
              with AI-powered operations. From vulnerability scanning to automated
              incident response — security that scales from startup to enterprise.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-green px-6 py-3 text-sm font-semibold text-bg-deep hover:bg-accent-green-light transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/20"
              >
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 rounded-xl border border-accent-green/30 px-6 py-3 text-sm font-semibold text-accent-green-light hover:bg-accent-green/10 transition-colors"
              >
                Explore Platform
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR */}
      {/* ============================================================ */}
      <section className="border-y border-border-subtle bg-bg-section py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div key={label} variants={fadeIn} className="text-center">
                <Icon className="mx-auto h-5 w-5 text-accent-green/60 mb-2" strokeWidth={1.5} />
                <div className="text-2xl font-bold text-text-heading sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs text-text-muted">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROBLEM */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-3xl tracking-tight text-text-heading sm:text-4xl">
              Security shouldn't require a Fortune 500 budget
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              Every business faces the same threats. Not every business can afford
              the same defenses. Until now.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-8 sm:grid-cols-3"
          >
            {problems.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeIn}
                className="rounded-2xl border border-border-subtle bg-bg-card p-8 transition-all duration-500 hover:border-accent-green/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
                  <Icon className="h-5 w-5 text-accent-green-light" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================================ */}
      <section className="bg-bg-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-3xl tracking-tight text-text-heading sm:text-4xl">
              Three steps to enterprise security
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-8 lg:grid-cols-3"
          >
            {howItWorks.map(({ step, title, description }) => (
              <motion.div key={step} variants={fadeIn} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-green/20 font-serif text-lg font-bold text-accent-green-light">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-text-heading">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TIER PREVIEW */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-3xl tracking-tight text-text-heading sm:text-4xl">
              Security that scales with you
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              Start with individual services, grow into a managed platform when
              you're ready.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {tiers.map(({ icon: Icon, name, audience, highlight, description, badge, href, featured }) => (
              <motion.div
                key={name}
                variants={fadeIn}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
                  featured
                    ? 'border-accent-green/50 shadow-[0_0_60px_-12px_rgba(91,138,114,0.2)]'
                    : 'border-border-subtle hover:border-accent-green/30'
                } bg-bg-card`}
              >
                <div className={`h-[3px] w-full bg-gradient-to-r from-accent-green to-accent-teal ${featured ? 'opacity-100' : 'opacity-40 group-hover:opacity-80'} transition-opacity duration-500`} />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green-light">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                      {badge}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-text-muted">{audience}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-text-heading">{name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-green-light">{highlight}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
                  <Link
                    to={href}
                    className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      featured
                        ? 'bg-accent-green text-bg-deep hover:bg-accent-green-light hover:shadow-lg'
                        : 'border border-accent-green/30 text-accent-green-light hover:bg-accent-green/10'
                    }`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEELIE SEC ADVISOR TEASER */}
      {/* ============================================================ */}
      <section className="bg-bg-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeIn}
            className="overflow-hidden rounded-2xl border border-accent-green/20 bg-bg-card"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-accent-teal via-accent-green to-accent-teal opacity-60" />
            <div className="p-8 sm:p-12 lg:flex lg:items-center lg:gap-16">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-teal/10 px-3 py-1 text-xs font-medium text-accent-teal">
                  <Brain className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Available with any plan
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-text-heading sm:text-4xl">
                  SeelieSec Advisor
                </h2>
                <p className="mt-1 text-sm font-medium text-accent-green-light">
                  AI-Powered Security Leadership
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Always-on security advisory powered by our AI engine and a knowledge
                  base of 14 security standards and 74 operational procedures. Compliance
                  gap analysis, risk scoring, vendor reviews, and board-ready reports —
                  the guidance of a CISO without the six-figure salary.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/advisor"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent-green px-6 py-3 text-sm font-semibold text-bg-deep hover:bg-accent-green-light transition-colors"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="mt-8 flex-1 lg:mt-0">
                <div className="space-y-3">
                  {[
                    'Compliance gap analysis across 14 standards',
                    'Policy recommendations tailored to your stack',
                    'Risk scoring and prioritization',
                    'Vendor security questionnaire review',
                    'Board-ready security posture reports',
                    'Natural language security Q&A — 24/7',
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-text-primary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" strokeWidth={2} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST SIGNALS */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-8 lg:grid-cols-3"
          >
            {trustSignals.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeIn} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10">
                  <Icon className="h-6 w-6 text-accent-green-light" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA */}
      {/* ============================================================ */}
      <section className="bg-bg-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-3xl tracking-tight text-text-heading sm:text-4xl">
              Ready to secure your organization?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Start with a single service or deploy the full platform. No long-term
              contracts, no vendor lock-in, no hidden fees.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-green px-8 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/20"
              >
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-accent-green/30 px-8 py-4 text-base font-semibold text-accent-green-light hover:bg-accent-green/10 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
