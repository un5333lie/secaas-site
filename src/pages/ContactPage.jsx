// TODO: Build out Contact page with:
// 1. Contact form (name, email, company, company size, interest area, message)
// 2. Calendar embed for booking a call
// 3. Direct contact info (email, Slack community link)
// 4. FAQ section

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-text-heading sm:text-5xl">Get Started</h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          Tell us about your security needs. We'll recommend the right services
          or platform tier for your organization.
        </p>
        {/* TODO: Build contact form */}
        <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-card p-12 text-center text-text-muted">
          Contact form coming soon — email sales@seeliesecurity.ai
        </div>
      </div>
    </div>
  )
}
