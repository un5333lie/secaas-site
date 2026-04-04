import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Brain, ArrowRight, Check, DollarSign, Clock, MessageSquare, FileText, BarChart3, Shield } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const capabilities = [
  {
    icon: Shield,
    title: 'Compliance Gap Analysis',
    description: 'Continuous assessment against 14 security standards (NIST CSF, CIS, FFIEC, PCI DSS, GDPR, SOC 2, HIPAA). Identifies gaps and recommends specific remediations.',
  },
  {
    icon: FileText,
    title: 'Policy Recommendations',
    description: 'Tailored security policy guidance based on your actual technology stack, industry, and compliance requirements. Not generic templates — specific to your environment.',
  },
  {
    icon: BarChart3,
    title: 'Risk Scoring & Prioritization',
    description: 'Assesses and ranks security risks by likelihood and impact. Tells you what to fix first, not just what\'s wrong. Tracks risk reduction over time.',
  },
  {
    icon: Check,
    title: 'Vendor Security Reviews',
    description: 'Reviews vendor security questionnaires, evaluates third-party risk, and provides recommendations. Handles the tedious but critical vendor assessment process.',
  },
  {
    icon: FileText,
    title: 'Board-Ready Reports',
    description: 'Generates executive security posture summaries suitable for board presentations, investor due diligence, and customer security reviews.',
  },
  {
    icon: MessageSquare,
    title: 'Security Q&A — 24/7',
    description: 'Natural language security advisory on any topic. Ask about your security posture, compliance requirements, incident response, architecture decisions, or threat landscape.',
  },
]

const comparison = [
  { aspect: 'Availability', advisor: '24/7/365', vciso: '5-10 hrs/month' },
  { aspect: 'Response time', advisor: 'Instant', vciso: '24-48 hours' },
  { aspect: 'Compliance analysis', advisor: '14 standards, continuous', vciso: 'Manual, periodic' },
  { aspect: 'Cost', advisor: '$149/mo', vciso: '$2,000-4,500/mo' },
  { aspect: 'Scalability', advisor: 'Unlimited queries', vciso: 'Limited by hours' },
  { aspect: 'Board reports', advisor: 'On-demand generation', vciso: 'Manual preparation' },
  { aspect: 'Complex decisions', advisor: 'Recommends, human decides', vciso: 'Direct human judgment' },
  { aspect: 'Regulatory strategy', advisor: 'Framework-based guidance', vciso: 'Experienced judgment' },
]

const useCases = [
  {
    title: 'SOC 2 Readiness',
    scenario: '"We need SOC 2 Type II to close enterprise deals, but we don\'t know where to start."',
    howAdvisorHelps: 'SeelieSec Advisor maps your current controls against SOC 2 trust service criteria, identifies gaps, recommends specific policies and procedures, generates the compliance evidence you need, and tracks your progress to audit-ready.',
  },
  {
    title: 'Vendor Questionnaire Overload',
    scenario: '"Every customer sends a different 200-question security questionnaire and we spend days on each one."',
    howAdvisorHelps: 'Provide the questionnaire and the Advisor drafts responses based on your actual security posture, policies, and deployed controls. Review and submit — hours instead of days.',
  },
  {
    title: 'Board Security Briefing',
    scenario: '"The board wants a security update and I have no idea how to present our posture to non-technical executives."',
    howAdvisorHelps: 'The Advisor generates an executive-level security posture summary: risk score trends, key metrics (MTTD, MTTR), compliance status, recent incidents, and recommended investments — in language board members understand.',
  },
]

export default function AdvisorPage() {
  return (
    <>
      <SEO title="SeelieSec Advisor" description="AI-powered virtual CISO. 24/7 security guidance, compliance monitoring, risk assessment, and board-ready reporting at a fraction of traditional costs." path="/advisor" />
      <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-teal/10 px-4 py-1.5 text-xs font-medium text-accent-teal">
              <Brain className="h-3.5 w-3.5" strokeWidth={1.5} />
              Available with any plan
            </span>
          </motion.div>
          <motion.h1 variants={fadeIn} className="mt-6 font-serif text-4xl tracking-tight text-text-heading sm:text-5xl">
            SeelieSec Advisor
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-2 text-lg font-medium text-accent-green-light">
            AI-Powered Security Leadership
          </motion.p>
          <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-lg text-text-secondary">
            Always-on security advisory powered by our AI engine and a knowledge base
            of 14 security standards, 74 operational procedures, and continuous threat
            intelligence. The guidance of a CISO without the six-figure salary.
          </motion.p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeIn} className="rounded-2xl border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:border-accent-teal/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10">
                <Icon className="h-5 w-5 text-accent-teal" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-text-heading">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="mt-24"
        >
          <h2 className="font-serif text-3xl text-text-heading">SeelieSec Advisor vs Traditional vCISO</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Get 80% of the value at 3% of the cost. Then bring in a human expert
            for the 20% that needs judgment.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border-subtle">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-card">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-muted"></th>
                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-accent-teal">SeelieSec Advisor</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-text-muted">Traditional vCISO</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ aspect, advisor, vciso }, i) => (
                  <tr key={aspect} className={i % 2 === 0 ? 'bg-bg-deep' : 'bg-bg-card'}>
                    <td className="px-6 py-3 text-sm font-medium text-text-heading">{aspect}</td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-accent-teal">{advisor}</td>
                    <td className="px-6 py-3 text-center text-sm text-text-secondary">{vciso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            Need a human expert? On-demand vCISO advisory available at $275/hr for
            incident command, regulatory strategy, M&A due diligence, and board presentations.
          </p>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="mt-24"
        >
          <h2 className="font-serif text-3xl text-text-heading">Real-World Use Cases</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 space-y-6"
        >
          {useCases.map(({ title, scenario, howAdvisorHelps }) => (
            <motion.div key={title} variants={fadeIn} className="rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-text-heading">{title}</h3>
              <p className="mt-3 text-sm italic text-text-muted">{scenario}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{howAdvisorHelps}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24 rounded-2xl border border-accent-teal/20 bg-bg-card p-8 sm:p-12 text-center"
        >
          <h2 className="font-serif text-2xl text-text-heading">Try SeelieSec Advisor with any plan</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">
            Add AI-powered security leadership to any individual service or managed
            platform tier. Always-on, always current, always affordable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-green px-8 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all"
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
    </div>
    </>
  )
}
