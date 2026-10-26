import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";
import { submitContact, buildWhatsAppLink } from "../services/api";
import { projectTypes, budgetRanges } from "../data/siteData";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [responseMessage, setResponseMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project category";
    if (!formData.message.trim()) {
      newErrors.message = "Project overview is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please describe in at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await submitContact(formData);
      if (response.success) {
        setStatus("success");
        const ref = `DMB-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceId(ref);
        setLastSubmitted({ ...formData, ref });
        setResponseMessage(
          response.message || "Thank you! Your project request has been approved and received."
        );
        setFormData(initialFormState);
      } else {
        setStatus("error");
        setResponseMessage(
          response.message || "Unable to send at this moment. Please reach us via WhatsApp or direct email."
        );
      }
    } catch (err) {
      setStatus("error");
      setResponseMessage(
        err.response?.data?.message || "Inquiry recorded locally. Please connect on WhatsApp for immediate response."
      );
    }
  };

  const inputClasses =
    "w-full bg-[#16181b] border border-[#47484c]/60 rounded-xl px-4 py-3 text-white text-sm placeholder-charcoal-400 focus:outline-none focus:border-[#d4af37] focus:bg-[#1e2023] transition-all duration-300";

  return (
    <>
      <SEO
        title="Request Approval & Contact | DMANBRAY Innovations"
        description="Request project approval, architectural roadmap and cost estimates from DMANBRAY Innovations principal engineers."
      />

      {/* Hero Header */}
      <section className="relative pt-[120px] pb-10 select-none overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-4 font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Project Approval & Estimates
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-4 leading-tight">
              Request Project <span className="gradient-text-gold">Approval & Quote</span>
            </h1>
            <p className="text-charcoal-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Submit your software vision, technical specs, or mobile app scope. Our principal engineers evaluate every submission with guaranteed 24-hour turnaround.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="charcoal-card p-6 sm:p-7 border border-[#47484c]/50">
              <h3 className="text-lg font-display font-bold text-white mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                Direct Communication
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-charcoal-400 font-mono uppercase tracking-wider">Direct Email</p>
                    <a href="mailto:contact@dmanbray.com" className="text-white hover:text-[#d4af37] font-medium text-xs mt-0.5 block transition-colors">
                      contact@dmanbray.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-charcoal-400 font-mono uppercase tracking-wider">Fast WhatsApp Dispatch</p>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20DMANBRAY,%20I%20would%20like%20to%20discuss%20a%20project%20proposal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4af37] hover:underline font-medium text-xs mt-0.5 block"
                    >
                      +91 98765 43210 (Direct Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-charcoal-400 font-mono uppercase tracking-wider">SLA Commitment</p>
                    <p className="text-white font-medium text-xs mt-0.5">
                      Response within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#47484c]/40 text-xs text-charcoal-300 leading-relaxed">
                All inquiries are covered under our strict Mutual Non-Disclosure Agreement (NDA). Your code and proprietary business ideas remain 100% confidential.
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="charcoal-card p-6 border border-[#d4af37]/30 bg-gradient-to-br from-[#1e2023] via-[#1b1d21] to-[#121316]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                Enterprise & Fast-Track
              </span>
              <h4 className="text-sm font-bold text-white mb-2">
                Need urgent technical scoping?
              </h4>
              <p className="text-xs text-charcoal-300 mb-4 leading-relaxed">
                Skip the queue and speak immediately with an engineering lead on WhatsApp.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello%20DMANBRAY,%20I%20have%20an%20urgent%20engineering%20requirement"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center text-xs py-2.5 inline-flex items-center justify-center gap-1.5"
              >
                Instant WhatsApp Chat
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8">
            <div className="charcoal-card p-7 sm:p-9 border border-[#47484c]/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-[#47484c]/30 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Request Approval & Scope
                  </h2>
                  <p className="text-xs text-charcoal-300 mt-0.5">
                    Fill out the form below. Zero commitment required.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering Leads Online
                </div>
              </div>

              {/* Success Notification Banner */}
              {status === "success" && (
                <div className="mb-6 p-5 rounded-2xl bg-[#1e2820] border border-emerald-500/40 text-emerald-300 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Project Request Approved & Dispatched!
                      </h4>
                      <p className="text-xs text-emerald-200/90 mt-1 leading-relaxed">
                        {responseMessage}
                      </p>
                      {referenceId && (
                        <p className="text-[11px] font-mono text-charcoal-300 mt-2">
                          Tracking Reference: <span className="text-[#d4af37] font-bold">{referenceId}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {lastSubmitted && (
                    <div className="pt-3 border-t border-emerald-500/20 flex flex-wrap gap-3">
                      <a
                        href={buildWhatsAppLink(lastSubmitted)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Send Backup Copy via WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="btn-charcoal text-xs py-2 px-4"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Error Notification Banner */}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{responseMessage}</span>
                  </div>
                  <a
                    href={buildWhatsAppLink(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-white whitespace-nowrap"
                  >
                    Send on WhatsApp →
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className={inputClasses}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Corporate / Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={inputClasses}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Startup / Company Name"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Project Category *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select Project Scope</option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-[#1e2023] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                      Target Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select Estimated Budget</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#1e2023] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-200 mb-1.5 font-mono">
                    Project Requirements & Architectural Goals *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, tech preferences, user scale, target timeline..."
                    className={inputClasses}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer px-8 py-3"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Evaluating & Dispatching...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request for Approval
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-charcoal-400 text-center sm:text-right">
                    🔒 Protected under Mutual Non-Disclosure Agreement
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
