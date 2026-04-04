import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import {
  ArrowRight, Shield, Network, Fingerprint, Code, BarChart3,
  Eye, Brain, Bell, Zap, Lock, Server, Clock, Check
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const features = [
  {
    icon: Shield,
    name: 'Detection & Response',
    tagline: 'Find threats before they find you',
    metrics: ['30 SIEM correlation rules', '12 automated response rules', '10-min IOC detection latency', 'MITRE ATT&CK mapped'],
    capabilities: [
      'Wazuh SIEM with real-time log correlation across all endpoints and network traffic',
      'File integrity monitoring on critical system paths with real-time alerting',
      'Active response: automated firewall blocking, process kill, file quarantine, host isolation',
      'ClamAV on-access + scheduled malware scanning with hourly signature updates',
      'FleetDM osquery endpoint visibility with 8 query packs running continuously',
      'Security Configuration Assessment against CIS benchmarks every 8 hours',
    ],
  },
  {
    icon: Network,
    name: 'Network Security',
    tagline: 'Three layers of blocking',
    metrics: ['Inline IPS (not just IDS)', 'OWASP CRS 4.0 WAF', '5 IOC blocklist feeds', 'mTLS everywhere'],
    capabilities: [
      'Suricata inline IPS via NFQUEUE — high-confidence threats DROPPED, not just alerted',
      'Zeek network metadata extraction for connection, DNS, HTTP, and TLS analysis',
      'ModSecurity WAF with OWASP CRS 4.0 in blocking mode on all ingress traffic',
      'OPNsense edge firewall with IOC blocklists, geo-blocking, and SYN flood protection',
      'AWS WAFv2 with rate limiting, IP reputation, SQL injection, and bot control',
      'VPC NACLs providing stateless defense-in-depth on top of security groups',
      'Istio service mesh enforcing mutual TLS on all inter-service communication',
    ],
  },
  {
    icon: Brain,
    name: 'Threat Intelligence',
    tagline: 'Know your enemy',
    metrics: ['7 feed connectors', '30-min malware/C2 feeds', '10-min IOC sync to SIEM', 'Sightings feedback loop'],
    capabilities: [
      'OpenCTI central threat intelligence platform aggregating all feed data',
      'MITRE ATT&CK, AlienVault OTX, abuse.ch (URLhaus + ThreatFox), CISA KEV, CVE/NVD feeds',
      'IOC correlation via Wazuh CDB lists — IPs, domains, hashes, URLs matched in real-time',
      'Suricata rule generation from OpenCTI stream (SID 9M range, auto-DROP)',
      'Perimeter blocking at OPNsense via 5 IOC blocklist feeds (Spamhaus, DShield, CINS, Feodo)',
      'Sightings feedback loop: IOC matches create sightings back in OpenCTI for analyst enrichment',
    ],
  },
  {
    icon: Fingerprint,
    name: 'Identity & Access',
    tagline: 'Zero trust, session recorded',
    metrics: ['SSO + MFA enforced', 'All sessions recorded', 'Break-glass procedures', 'Quarterly access reviews'],
    capabilities: [
      'Keycloak SSO with MFA across all tools — 3-replica HA, brute force protection',
      'FreeIPA LDAP/Kerberos directory for centralized user management',
      'Guacamole PAM for privileged access — SSH, RDP, VNC gateway with session recording',
      'OpenBao secrets management with automatic rotation and path-based tenant RBAC',
      'Emergency break-glass access procedure with dual authorization and 4-hour TTL',
    ],
  },
  {
    icon: Code,
    name: 'Application Security',
    tagline: 'Shift left, scan everything',
    metrics: ['Every 4 hours scanning', 'SBOM on every build', 'SHA-pinned CI/CD', 'License compliance'],
    capabilities: [
      'Grype container vulnerability scanning every 4 hours across 21+ production images',
      'Semgrep SAST with OWASP security-audit rules scanning source code every 4 hours',
      'OWASP ZAP DAST scanning web applications on-demand',
      'npm supply chain audit with CycloneDX SBOM generation and lock file integrity checks',
      'Checkov IaC scanning on every PR (CIS K8s, CIS Docker, SOC 2, PCI DSS)',
      'Sigstore container signing and admission webhook verification',
      'All GitHub Actions pinned to commit SHAs (post-supply-chain-compromise hardening)',
    ],
  },
  {
    icon: BarChart3,
    name: 'Compliance & GRC',
    tagline: '14 standards, 74 procedures',
    metrics: ['14 security standards', '74 operational procedures', 'Compliance dashboard', 'Quarterly audits'],
    capabilities: [
      'Prowler cloud security posture scanning against CIS benchmarks every 4 hours',
      'Eramba GRC platform for risk registers, compliance tracking, and audit trails',
      'Greenbone OpenVAS network vulnerability assessment',
      'Compliance dashboard tracking all 14 standards with before/after scoring',
      '74 operational procedure documents covering every aspect of security operations',
      'GLPI IT asset management and helpdesk for tracking security inventory',
    ],
  },
  {
    icon: Eye,
    name: 'Monitoring & Observability',
    tagline: 'See everything, alert on what matters',
    metrics: ['18 endpoint probes', '30s scrape interval', 'Daily security summary', 'TLS cert monitoring'],
    capabilities: [
      'Prometheus metrics collection with 30-second scrape interval across all security tools',
      'Grafana dashboards for Wazuh, Suricata, Zeek, Kubernetes, and custom security panels',
      'Blackbox exporter probing 18 endpoints across public, tenant, and internal tiers',
      'Automated daily security summary posted to Slack at 09:00 UTC',
      'TLS certificate expiry monitoring with 30-day warning and 7-day critical alerts',
      'Availability SLA tracking with 99.9% target alerting',
    ],
  },
  {
    icon: Bell,
    name: 'SOC Operations',
    tagline: 'Humans only when needed',
    metrics: ['6 alert types to Slack', '13 auto-remediated silently', 'P1 SLA: 5 min', 'Daily digest'],
    capabilities: [
      'Slack notification pipeline routing only human-required alerts (level 12+)',
      '13 alert types auto-remediated silently by Wazuh active response — daily digest only',
      'P1-P4 priority classification with defined SLAs and escalation contacts',
      'SOC triage runbook with decision trees for every alert type',
      'Shift handoff procedures and SOC metrics reporting (MTTD, MTTR, FP rate)',
      '7 incident response playbooks (ransomware, phishing, data breach, DDoS, and more)',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <SEO title="Features" description="Enterprise security capabilities: SIEM and log management, endpoint protection, threat intelligence, vulnerability scanning, and AI-powered operations." path="/features" />
      <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="font-serif text-4xl tracking-tight text-text-heading sm:text-5xl">Features</h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Everything you need to detect, respond to, and prevent security threats.
            Powered by 42 open-source tools and AI operations.
          </p>
        </motion.div>

        {/* Feature sections */}
        <div className="mt-16 space-y-20">
          {features.map(({ icon: Icon, name, tagline, metrics, capabilities }, i) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {/* Section header */}
              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-green/10">
                  <Icon className="h-6 w-6 text-accent-green-light" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-text-heading sm:text-3xl">{name}</h2>
                  <p className="mt-1 text-sm font-medium text-accent-green-light">{tagline}</p>
                </div>
              </motion.div>

              {/* Metrics bar */}
              <motion.div
                variants={fadeIn}
                className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {metrics.map((metric) => (
                  <div key={metric} className="rounded-lg bg-bg-card border border-border-subtle px-4 py-3 text-center">
                    <span className="text-sm font-semibold text-accent-green-light">{metric}</span>
                  </div>
                ))}
              </motion.div>

              {/* Capability list */}
              <motion.ul variants={stagger} className="mt-6 space-y-3">
                {capabilities.map((cap) => (
                  <motion.li
                    key={cap}
                    variants={fadeIn}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-primary"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" strokeWidth={2} />
                    {cap}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Divider */}
              {i < features.length - 1 && (
                <div className="mt-16 h-px bg-border-subtle" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24 text-center"
        >
          <h2 className="font-serif text-2xl text-text-heading">Ready to deploy?</h2>
          <p className="mt-3 text-text-secondary">See how these features fit your budget.</p>
          <Link
            to="/pricing"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-green px-8 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all"
          >
            View Pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  )
}
