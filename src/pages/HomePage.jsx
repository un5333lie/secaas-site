import { Link } from 'react-router-dom'
import { Shield, Zap, Eye, Lock, ArrowRight } from 'lucide-react'

// TODO: Build out full homepage with these sections:
// 1. Hero — "Enterprise-grade security. Open-source tools. AI-powered operations."
// 2. Problem — "SMBs face enterprise threats but can't afford enterprise security teams"
// 3. How it works — Deploy in your cloud, we manage everything, you sleep at night
// 4. Key stats — 42 tools, 14 standards, 74 procedures, 12 active response rules
// 5. Tier preview — Individual Services / Managed Platform / Enterprise
// 6. SeelieSec Advisor teaser
// 7. Trust signals — open source, transparent pricing, no vendor lock-in
// 8. CTA

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
              Enterprise Security.{' '}
              <span className="text-accent-green">Open Source.</span>{' '}
              AI-Powered.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              42 open-source security tools deployed in your cloud, fully managed
              with AI-powered operations. From vulnerability scanning to incident
              response — security that scales with you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/pricing" className="rounded-xl bg-accent-green px-6 py-3 text-sm font-semibold text-bg-deep hover:bg-accent-green-light transition-colors">
                View Pricing
              </Link>
              <Link to="/platform" className="rounded-xl border border-accent-green/30 px-6 py-3 text-sm font-semibold text-accent-green-light hover:bg-accent-green/10 transition-colors">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Problem section */}
      {/* TODO: How it works */}
      {/* TODO: Stats bar */}
      {/* TODO: Tier preview cards */}
      {/* TODO: Advisor teaser */}
      {/* TODO: Trust signals */}
      {/* TODO: CTA */}
    </div>
  )
}
