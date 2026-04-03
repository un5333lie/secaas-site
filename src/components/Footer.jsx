import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-deep py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg text-text-heading">SeelieSec SecaaS</p>
            <p className="mt-2 text-sm text-text-muted">Managed Security Platform</p>
            <p className="mt-1 text-sm text-text-muted">Enterprise-grade security for every size.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-heading">Platform</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/platform" className="text-sm text-text-secondary hover:text-text-heading">Overview</Link>
              <Link to="/features" className="text-sm text-text-secondary hover:text-text-heading">Features</Link>
              <Link to="/pricing" className="text-sm text-text-secondary hover:text-text-heading">Pricing</Link>
              <Link to="/advisor" className="text-sm text-text-secondary hover:text-text-heading">SeelieSec Advisor</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-heading">Resources</p>
            <div className="mt-3 flex flex-col gap-2">
              {/* TODO: Add links to blog, docs, status page */}
              <span className="text-sm text-text-muted">Documentation (coming soon)</span>
              <span className="text-sm text-text-muted">Status Page (coming soon)</span>
              <a href="https://seeliesecurity.ai" className="text-sm text-text-secondary hover:text-text-heading">AI Security Site</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-heading">Contact</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/contact" className="text-sm text-text-secondary hover:text-text-heading">Get Started</Link>
              <a href="mailto:sales@seeliesecurity.ai" className="text-sm text-text-secondary hover:text-text-heading">sales@seeliesecurity.ai</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border-subtle pt-8 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} SeelieSec. 42 open-source security tools. Zero vendor lock-in.
        </div>
      </div>
    </footer>
  )
}
