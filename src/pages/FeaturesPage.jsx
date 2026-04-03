// TODO: Build out Features page with:
// 1. Detection & Response — Wazuh SIEM, 30 correlation rules, 12 active responses
// 2. Network Security — Suricata inline IPS, Zeek, ModSecurity WAF, OPNsense
// 3. Threat Intelligence — OpenCTI, 7 feeds, IOC blocking at 3 layers
// 4. Endpoint Protection — ClamAV, FleetDM, file integrity, hardening
// 5. Identity & Access — Keycloak SSO/MFA, FreeIPA, Guacamole PAM
// 6. Compliance — 14 standards, 74 procedures, Prowler, Eramba GRC
// 7. Monitoring — Prometheus, Grafana, 18-endpoint uptime monitoring
// 8. Application Security — Grype, Semgrep, ZAP, npm audit, Sigstore
// 9. SOC Operations — Slack pipeline, triage policy, escalation matrix
//
// Each section: description, key metrics, tools used, screenshot/diagram

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-text-heading sm:text-5xl">Features</h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          Everything you need to detect, respond to, and prevent security threats.
          Powered by 42 open-source tools and AI operations.
        </p>
        {/* TODO: Build feature sections */}
        <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-card p-12 text-center text-text-muted">
          Features page content coming soon
        </div>
      </div>
    </div>
  )
}
