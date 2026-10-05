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
} from "lucide-react";
import SEO from "../components/SEO";
import { submitContact } from "../services/api";
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
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [responseMessage, setResponseMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
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
        setResponseMessage(
          response.message || "Thank you! Your inquiry has been received. Our team will contact you shortly."
        );
        setFormData(initialFormState);
      } else {
        setStatus("error");
        setResponseMessage(
          response.message || "Failed to submit message. Please try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setResponseMessage(
        err.response?.data?.message || "Something went wrong. Please try again later."
      );
    }
  };

  const inputClasses =
    "w-full bg-[#16181b] border border-[#47484c]/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-charcoal-400 focus:outline-none focus:border-[#d4af37] focus:bg-[#1e2023] transition-all duration-300";

  return (
    <>
      <SEO
        title="Contact Us | DHANVIRA Technologies"
        description="Get in touch with DHANVIRA Technologies. Tell us about your project requirements."
      />

      {/* Hero */}
      <section className="relative pt-[120px] pb-14 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-4 font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Extraordinary Together.</span>
            </h1>
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Tell us what you're creating. We'll analyze your requirements and provide an architectural roadmap and estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="charcoal-card p-8 border border-[#47484c]/50">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Company Headquarters
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 font-mono uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium mt-0.5">contact@dhanvira.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 font-mono uppercase tracking-wider">Phone</p>
                    <p className="text-white font-medium mt-0.5">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center flex-shrink-0 text-accent-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 font-mono uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium mt-0.5">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#47484c]/40 text-xs text-charcoal-300 leading-relaxed">
                Response guarantee within 24 hours during business days.
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8">
            <div className="charcoal-card p-8 sm:p-10 border border-[#47484c]/50">
              <h2 className="text-2xl font-display font-bold text-white mb-2">
                Project Inquiry
              </h2>
              <p className="text-xs text-charcoal-300 mb-8">
                Fill out the details below and an engineering lead will reach out.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{responseMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{responseMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
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
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                      Work Email *
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                      Phone Number
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
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a Project Type</option>
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
                    <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a Range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#1e2023] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-200 mb-2 font-mono">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the product you want to build, requirements, or timeline..."
                    className={inputClasses}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Project Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
