import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Server,
  UserCheck,
  ArrowLeft,
  Mail,
  Cookie,
} from "lucide-react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "collection",
      title: "1. Information We Collect",
      icon: Eye,
      content: [
        "Direct Contact Information: When you submit project inquiries, request engineering estimates, or schedule technical consultations, we collect your name, corporate email address, phone number, company name, and project descriptions.",
        "Technical Specifications: In the course of software development, we may receive functional requirements, API endpoints, wireframes, repository access tokens, and staging credentials supplied by you for engineering execution.",
        "Usage & Telemetry Data: Our web servers automatically log device IP addresses, browser types, referrer URLs, page dwell time, and operating system metrics to optimize performance and prevent malicious DDoS traffic.",
      ],
    },
    {
      id: "usage",
      title: "2. How We Utilize Your Data",
      icon: FileCheck,
      content: [
        "Project Architecture & Development: To design, build, test, and deploy customized web, mobile, SaaS, and AI applications contracted by you.",
        "Operational Communications: To send project status updates, architectural roadmaps, milestone review links, and billing invoices.",
        "Security & Authentication: To monitor system integrity, defend against unauthorized access, and ensure compliance with software licensing agreements.",
        "Strict No-Sale Guarantee: DMANBRAY never sells, rents, monetizes, or trades client personal or commercial data to third-party data brokers or marketing networks.",
      ],
    },
    {
      id: "security",
      title: "3. Enterprise Security & Encryption Standards",
      icon: Lock,
      content: [
        "Encryption in Transit: All data exchanged across our web applications, client dashboards, and API endpoints is encrypted using Transport Layer Security (TLS 1.3 / HTTPS).",
        "Encryption at Rest: Sensitive environment variables, production access keys, and confidential database records are encrypted using AES-256 standards.",
        "Access Controls & Least Privilege: Only authorized engineers assigned to your specific project repository have access to project code and configuration files, backed by hardware-enforced 2FA.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Infrastructure & Service Providers",
      icon: Server,
      content: [
        "To provide high-availability cloud solutions, DMANBRAY utilizes trusted tier-1 infrastructure partners:",
        "• Cloud Infrastructure: Amazon Web Services (AWS), Vercel Inc., Cloudflare CDN, and Render Cloud.",
        "• Code Versioning & CI/CD: GitHub Enterprise.",
        "• Form & Communication Routing: Formspree API and secure transactional SMTP relays.",
        "All third-party processors adhere strictly to SOC 2 Type II, ISO 27001, and GDPR compliance standards.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies & Analytical Technologies",
      icon: Cookie,
      content: [
        "We utilize minimal, non-intrusive essential cookies strictly required for security validation, session management, and CSRF protection.",
        "We do not utilize intrusive tracking pixels or third-party behavioral advertising cookies.",
        "You can configure your browser to reject cookies; however, some interactive features of our client consultation portals may be affected.",
      ],
    },
    {
      id: "client-rights",
      title: "6. Your Privacy Rights & Data Control",
      icon: UserCheck,
      content: [
        "Under applicable privacy regulations (including India's Digital Personal Data Protection Act and global GDPR standards), you possess the right to:",
        "• Request access to the personal data we maintain about you.",
        "• Request rectification of any inaccurate or outdated information.",
        "• Request immediate erasure of your contact details from our active communication databases upon project completion.",
        "• Withdraw consent at any time for non-essential communications.",
      ],
    },
    {
      id: "retention",
      title: "7. Data Retention & Repository Archival",
      icon: ShieldCheck,
      content: [
        "Inquiry Data: General contact inquiries are retained for up to twelve (12) months to facilitate ongoing technical correspondence, after which they are purged.",
        "Project Repositories: Active project source code is maintained on secure private branches during the warranty support period. Following client acceptance and repository transfer, staging environments are decommissioned.",
        "Tax & Accounting Records: Billing transaction invoices are retained for the statutory period required by Indian tax legislation.",
      ],
    },
    {
      id: "contact-dpo",
      title: "8. Data Protection Officer & Privacy Inquiries",
      icon: Mail,
      content: [
        "If you have questions, data rectification requests, or security inquiries regarding this Privacy Policy, please contact our Data Protection and Compliance team:",
        "DMANBRAY Innovations • Legal & Security Office",
        "Email: contact@dmanbray.com • rakeyr213@gmail.com",
        "Response time: Within 48 business hours.",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | DMANBRAY Innovations"
        description="Learn how DMANBRAY Innovations collects, secures, and protects your project information, confidential requirements, and data privacy."
      />

      {/* Hero Header */}
      <section className="relative pt-[120px] pb-12 select-none overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-300 hover:text-white mb-6 transition-colors group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-4 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> Data Security & Compliance
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
              Privacy <span className="gradient-text-gold">Policy</span>
            </h1>
            <p className="text-charcoal-200 text-sm sm:text-base leading-relaxed">
              Effective Date: January 1, 2026 • Last Reviewed: October 2026. <br />
              DMANBRAY Innovations is committed to transparent data practices, rigorous encryption, and uncompromising client confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="charcoal-card p-6 border border-[#47484c]/50">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-300 font-mono mb-4">
                Policy Sections
              </h3>
              <nav className="space-y-2 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-charcoal-200 hover:text-[#d4af37] transition-colors py-1 truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-[#47484c]/40 text-xs text-charcoal-400">
                Have a proprietary NDA or enterprise vendor assessment requirement?
                <Link to="/contact" className="text-[#d4af37] block mt-1.5 font-semibold hover:underline">
                  Submit NDA Request →
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Clauses */}
          <div className="lg:col-span-8 space-y-6">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="charcoal-card p-6 sm:p-8 border border-[#47484c]/40 hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center text-[#d4af37] flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-display font-bold text-white">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Questions Banner */}
            <div className="charcoal-card p-6 sm:p-8 border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#1e2023] via-[#1a1c1f] to-[#16181b]">
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Need data verification or custom compliance?
                </h3>
                <p className="text-xs text-charcoal-300">
                  Our privacy compliance leads will assist you with any inquiries.
                </p>
              </div>
              <Link to="/contact" className="btn-gold whitespace-nowrap text-xs px-5 py-2.5">
                Contact Privacy Lead
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
