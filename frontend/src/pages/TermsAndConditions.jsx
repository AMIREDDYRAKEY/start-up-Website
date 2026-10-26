import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Lock,
  Clock,
  ArrowLeft,
  Mail,
  HelpCircle,
} from "lucide-react";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms & Engagement",
      icon: Scale,
      content: [
        "By accessing or using the services, websites, client portals, and digital deliverables provided by DMANBRAY Innovations ('DMANBRAY', 'Company', 'we', 'our', or 'us'), you ('Client', 'Customer', 'You') agree to be bound by these Terms and Conditions in full.",
        "If you are executing these terms on behalf of a company, enterprise, or legal entity, you represent and warrant that you possess the full corporate authority to bind such entity to these covenants.",
        "Individual project contracts, Statements of Work (SOW), master service agreements (MSA), and proposal approval forms will supplement and supersede conflicting terms herein when executed in writing.",
      ],
    },
    {
      id: "scope-services",
      title: "2. Engineering Scope, Architecture & Deliverables",
      icon: FileText,
      content: [
        "DMANBRAY provides software engineering, web application development, native Android and iOS mobile development, bespoke artificial intelligence (AI/ML) pipeline design, SaaS architectures, cloud infrastructure deployment, and technical consulting.",
        "All development will be executed according to the technical specifications, architectural diagrams, wireframes, and milestones explicitly outlined in the mutually agreed Project Proposal or Statement of Work.",
        "Any alterations, functional enhancements, or architectural deviations requested after milestone sign-off will be treated as Change Requests and quoted separately under transparent milestone estimates.",
      ],
    },
    {
      id: "approval-acceptance",
      title: "3. Project Approval & Milestone Acceptance Criteria",
      icon: CheckCircle2,
      content: [
        "Milestone Review: Upon completion of each development sprint or delivery phase (e.g., Discovery, UI/UX Prototypes, Staging Environment Build, Final Production Release), DMANBRAY will submit the deliverables for Client acceptance testing.",
        "Review Period: The Client shall have ten (10) business days from delivery notification to inspect, test, and provide written approval or detailed defect reports.",
        "Deemed Approval: If no written objection or reproducible defect list is submitted within the designated review period, the deliverable or milestone will be formally deemed approved and accepted.",
        "Approval Sign-off: Production deployment, domain handover, and repository transfer will proceed immediately following formal milestone approval and settlement of corresponding invoices.",
      ],
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property & Code Ownership",
      icon: Lock,
      content: [
        "Client Deliverables: Upon receipt of full and final payment for the project or respective milestone, all customized source code, database schemas, digital assets, and documentation uniquely engineered for the Client become the exclusive intellectual property of the Client.",
        "Pre-Existing Frameworks: DMANBRAY retains all rights, title, and interest in its proprietary development libraries, boilerplate modules, utility tooling, and algorithms ('Background Technology') utilized during engineering. The Client receives a perpetual, worldwide, royalty-free, non-exclusive license to utilize and modify such modules as embedded within the deliverable.",
        "Open-Source Components: Third-party open-source libraries (e.g., React, Node.js, Linux, Docker) remain subject to their respective licenses (MIT, Apache 2.0, BSD).",
      ],
    },
    {
      id: "payment-terms",
      title: "5. Financial Terms, Milestones & Retainers",
      icon: Clock,
      content: [
        "Payment Schedules: Projects are structured on milestone-based billing (e.g., 30% upfront commitment, 40% intermediate staging deliverable, 30% upon final acceptance before production handover).",
        "Due Dates: All invoices issued by DMANBRAY are payable within fifteen (15) calendar days from the invoice issuance date.",
        "Late Settlement: Overdue accounts may result in temporary suspension of staging server access, active development sprints, or scheduled deployments until settled in full.",
      ],
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality & Non-Disclosure (NDA)",
      icon: ShieldCheck,
      content: [
        "Mutual Non-Disclosure: Both DMANBRAY and the Client acknowledge that during the course of engagement, proprietary business concepts, trade secrets, architecture designs, API keys, customer databases, and financial figures may be exchanged.",
        "Protection Standard: Both parties agree to maintain strict confidentiality, prevent unauthorized disclosure to third parties, and utilize such confidential information exclusively for the purpose of executing the project.",
        "Non-compete & Integrity: DMANBRAY does not utilize Client business logic or proprietary data for any competing internal products.",
      ],
    },
    {
      id: "warranty-liability",
      title: "7. Warranties, Bug Fix Guarantees & Limitation of Liability",
      icon: HelpCircle,
      content: [
        "Quality Warranty: DMANBRAY warrants that all software delivered will perform substantially in accordance with the agreed functional specifications.",
        "30-Day Post-Launch Support: We provide thirty (30) days of complimentary bug fixing and stability remediation for reproducible defects originating from our delivered codebase following production release.",
        "Limitation of Liability: In no event shall DMANBRAY, its directors, engineers, or partners be liable for indirect, punitive, or consequential damages, including loss of business profits or data downtime. Maximum liability under any claim shall not exceed the aggregate professional fees paid by the Client to DMANBRAY under the applicable project contract.",
      ],
    },
    {
      id: "jurisdiction",
      title: "8. Termination, Governing Law & Jurisdiction",
      icon: Scale,
      content: [
        "Termination for Cause: Either party may terminate a project agreement upon fifteen (15) days written notice if the other party breaches any material term and fails to cure such breach within the notice window.",
        "Governing Law: These Terms and Conditions shall be governed by and construed in accordance with the substantive laws of India, without regard to conflict of law principles.",
        "Dispute Resolution: Any unresolved dispute arising out of or related to our services shall be submitted to the exclusive jurisdiction of the competent courts in India.",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Terms and Conditions | DMANBRAY Innovations"
        description="Comprehensive Terms of Service, Project Approvals, IP Ownership, Milestone Deliverables and Client Contracts for DMANBRAY Innovations."
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
              <FileText className="w-3.5 h-3.5" /> Legal Governance
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
              Terms & <span className="gradient-text-gold">Conditions</span>
            </h1>
            <p className="text-charcoal-200 text-sm sm:text-base leading-relaxed">
              Effective Date: January 1, 2026 • Last Updated: October 2026. <br />
              Please review these terms governing project approvals, milestones, intellectual property, and engineering services.
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
                Sections Quick Jump
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
                Need a signed Master Services Agreement (MSA) or custom mutual NDA?
                <Link to="/contact" className="text-[#d4af37] block mt-1.5 font-semibold hover:underline">
                  Contact Legal & Enterprise Support →
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

            {/* Inquiries Banner */}
            <div className="charcoal-card p-6 sm:p-8 border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#1e2023] via-[#1a1c1f] to-[#16181b]">
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Questions regarding these terms?
                </h3>
                <p className="text-xs text-charcoal-300">
                  Our management and legal operations team is available to assist you.
                </p>
              </div>
              <Link to="/contact" className="btn-gold whitespace-nowrap text-xs px-5 py-2.5">
                Contact Legal Operations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
