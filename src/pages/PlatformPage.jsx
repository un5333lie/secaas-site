// TODO: Build out Platform page with:
// 1. Hero — "Your dedicated security operations center"
// 2. Architecture diagram — 5 tiers (Detection, Network, Identity, DevSecOps, Compliance)
// 3. Tool inventory — 42 tools with logos/icons, grouped by tier
// 4. Deployment model — "Deployed in YOUR cloud" (AWS/Azure/GCP)
// 5. AI Operations layer — Claude Code/Cowork automation
// 6. Multi-tenant isolation — dedicated VPC, encrypted storage
// 7. Open source commitment — zero vendor lock-in
// 8. CTA to pricing

export default function PlatformPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-text-heading sm:text-5xl">The Platform</h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          42 open-source security tools across 5 tiers, deployed in your cloud,
          managed by AI-powered operations.
        </p>
        {/* TODO: Build sections */}
        <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-card p-12 text-center text-text-muted">
          Platform page content coming soon
        </div>
      </div>
    </div>
  )
}
