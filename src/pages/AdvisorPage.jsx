// TODO: Build out SeelieSec Advisor page with:
// 1. Hero — "Your AI-Powered Security Leader"
// 2. What it does — compliance gaps, policy recs, risk scoring, vendor reviews, reports
// 3. How it works — powered by Claude + 14 standards + 74 procedures + threat intel
// 4. Comparison vs traditional vCISO ($149/mo vs $2,000-4,500/mo)
// 5. Use cases — SOC 2 readiness, vendor questionnaires, board reporting
// 6. Human vCISO upgrade — $275/hr for complex decisions
// 7. Demo/interactive preview
// 8. CTA — try it with any plan

export default function AdvisorPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-text-heading sm:text-5xl">SeelieSec Advisor</h1>
        <p className="mt-2 text-lg font-medium text-accent-green-light">AI-Powered Security Leadership</p>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          Always-on security advisory powered by our knowledge base of 14 security
          standards and 74 operational procedures. The guidance of a CISO without
          the six-figure salary.
        </p>
        {/* TODO: Build advisor sections */}
        <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-card p-12 text-center text-text-muted">
          Advisor page content coming soon
        </div>
      </div>
    </div>
  )
}
