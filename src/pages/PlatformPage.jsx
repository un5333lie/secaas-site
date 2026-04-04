import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import {
  ArrowRight, Shield, Network, Fingerprint, Code, BarChart3,
  Server, Database, Cloud, Bot, Lock, Eye, Cpu
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const tiers = [
  {
    icon: Shield,
    name: 'Detection & Response',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    tools: ['Wazuh SIEM/XDR', 'Security Onion', 'TheHive', 'Cortex', 'Shuffle SOAR'],
    description: 'Centralized log collection, intrusion detection, case management, automated analysis, and SOAR orchestration.',
  },
  {
    icon: Network,
    name: 'Network Security',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    tools: ['Suricata IPS', 'Zeek', 'OPNsense', 'ModSecurity WAF', 'Istio mTLS'],
    description: 'Inline packet inspection, network metadata extraction, edge firewall, web application firewall, and service mesh encryption.',
  },
  {
    icon: Fingerprint,
    name: 'Identity & Access',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    tools: ['Keycloak SSO/MFA', 'FreeIPA LDAP', 'OpenBao Secrets', 'Guacamole PAM'],
    description: 'Single sign-on with MFA, LDAP/Kerberos directory, secrets management with rotation, and privileged access with session recording.',
  },
  {
    icon: Code,
    name: 'DevSecOps',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    tools: ['Grype Scanner', 'Semgrep SAST', 'OWASP ZAP DAST', 'Checkov IaC', 'Sigstore Signing'],
    description: 'Container vulnerability scanning, static code analysis, dynamic web testing, infrastructure-as-code security, and artifact signing.',
  },
  {
    icon: BarChart3,
    name: 'Compliance & Visibility',
    color: 'text-accent-green-light',
    bg: 'bg-accent-green/10',
    tools: ['Prowler CSPM', 'Eramba GRC', 'OpenVAS', 'FleetDM/osquery', 'GLPI CMDB', 'Prometheus', 'Grafana'],
    description: 'Cloud posture management, governance/risk/compliance, vulnerability assessment, endpoint visibility, asset management, and observability.',
  },
]

const architectureFeatures = [
  {
    icon: Cloud,
    title: 'Your Cloud, Your Data',
    description: 'Deployed in your own AWS, Azure, or GCP account. Your data never leaves your VPC. Full tenant isolation with dedicated namespaces, network policies, and encryption.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Operations',
    description: 'Claude AI automates infrastructure provisioning, alert triage (40-60% auto-triaged), incident enrichment, compliance reporting, and security posture assessment.',
  },
  {
    icon: Lock,
    title: 'Defense in Depth',
    description: 'Three layers of IOC blocking (perimeter, network IPS, endpoint). Default-deny network policies. mTLS everywhere. KMS-encrypted storage. 12 automated response rules.',
  },
  {
    icon: Database,
    title: 'Production-Grade Data Tier',
    description: 'Elasticsearch cluster (6 nodes), Kafka (3 brokers), PostgreSQL, MongoDB, MySQL, Redis, RabbitMQ — all with persistent encrypted storage and health monitoring.',
  },
  {
    icon: Eye,
    title: 'Full Packet Capture',
    description: 'Security Onion on dedicated nodes captures every packet for forensic analysis. Up to 2TB PCAP storage for deep investigation when incidents occur.',
  },
  {
    icon: Cpu,
    title: 'Cost Optimized',
    description: 'Graviton3 ARM instances, spot nodes for stateless workloads, right-sized node groups. Three tiers from $1,139/mo to $7,129/mo based on your needs.',
  },
]

export default function PlatformPage() {
  return (
    <>
      <SEO title="Platform Architecture" description="Five-layer security architecture with 42 open-source tools. SIEM, EDR, threat intelligence, network security, and compliance scanning." path="/platform" />
      <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="font-serif text-4xl tracking-tight text-text-heading sm:text-5xl">
            The Platform
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            42 open-source security tools across 5 tiers, deployed in your cloud
            on Kubernetes, managed by AI-powered operations. 100% open source —
            zero vendor lock-in.
          </p>
        </motion.div>

        {/* 5-Tier Stack */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 space-y-6"
        >
          {tiers.map(({ icon: Icon, name, color, bg, tools, description }) => (
            <motion.div
              key={name}
              variants={fadeIn}
              className="group rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-8 transition-all duration-300 hover:border-accent-green/20"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="flex-shrink-0">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-text-heading">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg bg-bg-deep px-3 py-1.5 text-xs font-medium text-text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
          className="mt-24"
        >
          <h2 className="font-serif text-3xl text-text-heading">Built for Production</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Not a demo or a POC — this is a production-grade security platform with
            HA databases, encrypted storage, and a 10-phase deployment guide.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {architectureFeatures.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeIn} className="rounded-2xl border border-border-subtle bg-bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
                <Icon className="h-5 w-5 text-accent-green-light" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-text-heading">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24 text-center"
        >
          <Link
            to="/features"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-green px-8 py-4 text-base font-semibold text-bg-deep hover:bg-accent-green-light transition-all"
          >
            See All Features <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  )
}
