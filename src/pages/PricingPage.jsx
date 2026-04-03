// TODO: Build out Pricing page with:
// 1. Individual Services section (9 services, $99-299/mo range)
// 2. Bundle cards (Essentials $279, Compliance $399, Full Protection $899)
// 3. Managed Platform tiers (Starter $1,139, Professional $3,499, Enterprise $7,129)
// 4. Add-ons table
// 5. FAQ accordion
// 6. "Not sure which plan?" CTA to contact
//
// Content source: SeelieSec-SecaaS/PRICING.md

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-text-heading sm:text-5xl">Pricing</h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          Security that fits your budget. Start with individual services, scale
          to a managed platform when you're ready.
        </p>
        {/* TODO: Build pricing sections */}
        <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-card p-12 text-center text-text-muted">
          Pricing page content coming soon — see PRICING.md for data
        </div>
      </div>
    </div>
  )
}
