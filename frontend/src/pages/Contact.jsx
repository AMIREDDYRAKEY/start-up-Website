import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import { EASE, MaskLine, Reveal, Magnetic } from "../components/Motion";
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

/* Labelled underline input */
const Field = ({ id, label, required, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">
      {label}
      {required && <span className="text-brand-light"> *</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-2 text-xs text-[#ff8a7a]">
        {error}
      </p>
    )}
  </div>
);

/* Chip group backed by real radio inputs — same name/value contract as a <select> */
const ChipGroup = ({ name, label, options, value, onChange, required, error }) => (
  <fieldset>
    <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">
      {label}
      {required && <span className="text-brand-light"> *</span>}
    </legend>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const checked = value === opt;
        return (
          <label
            key={opt}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand ${
              checked
                ? "border-white bg-white text-ink"
                : "border-white/15 text-fog-300 hover:border-white/40 hover:text-paper"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={checked}
              onChange={onChange}
              className="sr-only"
            />
            {opt}
          </label>
        );
      })}
    </div>
    {error && <p className="mt-3 text-xs text-[#ff8a7a]">{error}</p>}
  </fieldset>
);

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

  const fieldProps = (name) => ({
    id: name,
    name,
    value: formData[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: "field",
  });

  return (
    <>
      <SEO
        title="Request Approval & Contact | DMANBRAY Innovations"
        description="Request project approval, architectural roadmap and cost estimates from DMANBRAY Innovations principal engineers."
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="grain absolute inset-0" />
        </div>
      <div className="container-site relative pb-section pt-36 sm:pt-44">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: statement + details */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow mb-8">Start a conversation</span>
              <h1 className="font-display text-[clamp(2.75rem,5.4vw,5.75rem)] font-bold leading-[0.9] tracking-[-0.06em] text-paper">
                <MaskLine immediate delay={0.1}>Let's build</MaskLine>
                <MaskLine immediate delay={0.2}>something</MaskLine>
                <MaskLine immediate delay={0.3}>
                  <span className="text-gradient">extraordinary.</span>
                </MaskLine>
              </h1>
              <Reveal delay={0.4}>
                <p className="mt-8 max-w-md text-lead text-fog-300">
                  Tell us what you're creating. We'll analyse your requirements and come back with
                  an architectural roadmap and estimate.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <dl className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  <div className="flex items-baseline justify-between gap-6 py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">Email</dt>
                    <dd>
                      <a href="mailto:contact@dmanbray.com" className="link-draw text-paper">
                        contact@dmanbray.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6 py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">Phone</dt>
                    <dd className="text-paper">Available on request</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6 py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">Location</dt>
                    <dd className="text-paper">India</dd>
                  </div>
                </dl>
                <p className="mt-6 flex items-center gap-2.5 text-sm text-fog-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-work" />
                  Response within 24 hours on business days.
                </p>
              </Reveal>
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

          {/* Right: form */}
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.3}>
            <div className="surface rounded-sm p-6 sm:p-10 lg:p-12">
              <div className="mb-10 flex items-baseline justify-between">
                <h2 className="text-2xl font-medium tracking-[-0.03em] text-paper">Project inquiry</h2>
                <span className="font-mono text-[11px] text-fog-500">* required</span>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    role="status"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mb-8 flex items-center gap-3 rounded-2xl border border-signal-work/30 bg-signal-work/10 p-4 text-sm text-signal-work"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{responseMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    role="alert"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mb-8 flex items-center gap-3 rounded-2xl border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 p-4 text-sm text-[#ff8a7a]"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{responseMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-9">
                <div className="grid gap-9 sm:grid-cols-2">
                  <Field id="name" label="Your name" required error={errors.name}>
                    <input type="text" placeholder="Alex Sharma" autoComplete="name" {...fieldProps("name")} />
                  </Field>
                  <Field id="email" label="Work email" required error={errors.email}>
                    <input type="email" placeholder="alex@company.com" autoComplete="email" {...fieldProps("email")} />
                  </Field>
                </div>

                <div className="grid gap-9 sm:grid-cols-2">
                  <Field id="phone" label="Phone">
                    <input type="tel" placeholder="+91…" autoComplete="tel" {...fieldProps("phone")} />
                  </Field>
                  <Field id="company" label="Company / organisation">
                    <input type="text" placeholder="Your company" autoComplete="organization" {...fieldProps("company")} />
                  </Field>
                </div>

                <ChipGroup
                  name="projectType"
                  label="Project type"
                  required
                  options={projectTypes}
                  value={formData.projectType}
                  onChange={handleChange}
                  error={errors.projectType}
                />

                <ChipGroup
                  name="budget"
                  label="Estimated budget"
                  options={budgetRanges}
                  value={formData.budget}
                  onChange={handleChange}
                />

                <Field id="message" label="Project overview & goals" required error={errors.message}>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the product you want to build, requirements, or timeline…"
                    {...fieldProps("message")}
                    className="field resize-none"
                  />
                </Field>

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-accent group cursor-pointer pr-2.5 disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Send project inquiry
                        <span className="btn-icon group-hover:rotate-45">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
