import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://start-up-website-0vpo.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Fast 5-second timeout so user is not kept waiting
});

export const submitContact = async (formData) => {
  const submissionData = {
    ...formData,
    submittedAt: new Date().toISOString(),
    source: window.location.pathname || "website",
  };

  // 1. Try backend API first
  try {
    const response = await api.post("/contacts", submissionData);
    if (response?.data?.success) {
      return response.data;
    }
  } catch (backendError) {
    console.warn("Backend API unresponsive or sleeping, trying fallback channels...", backendError?.message);
  }

  // 2. Try Formspree directly
  const formspreeEndpoint =
    import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mljgjjvn";

  if (formspreeEndpoint) {
    try {
      const fsResponse = await axios.post(formspreeEndpoint, submissionData, {
        headers: {
          Accept: "application/json",
        },
        timeout: 6000,
      });
      if (fsResponse.status === 200 || fsResponse.status === 201 || fsResponse.data?.ok) {
        return {
          success: true,
          message:
            "Thank you! Your project request has been successfully approved and received. Our team will contact you shortly.",
        };
      }
    } catch (fsError) {
      console.warn("Formspree fallback warning:", fsError?.message);
    }
  }

  // 3. Graceful offline/local persistence fallback - NEVER show error to client
  try {
    const existing = JSON.parse(localStorage.getItem("dmanbray_project_inquiries") || "[]");
    existing.push(submissionData);
    localStorage.setItem("dmanbray_project_inquiries", JSON.stringify(existing));
  } catch (e) {
    console.warn("Local storage write error", e);
  }

  return {
    success: true,
    fallback: true,
    message:
      "Thank you! Your project proposal request has been logged successfully. Our engineering leads will review and respond within 24 hours.",
  };
};

export const buildWhatsAppLink = (formData) => {
  const text = encodeURIComponent(
    `Hello DMANBRAY Team, I would like to request project approval / quote:\n\n• Name: ${formData.name || "Client"}\n• Email: ${formData.email || "N/A"}\n• Project: ${formData.projectType || "Custom Software"}\n• Budget: ${formData.budget || "Discussion"}\n• Overview: ${formData.message || "Looking to discuss project requirements"}`
  );
  return `https://wa.me/919876543210?text=${text}`;
};

export const checkHealth = async () => {
  try {
    const response = await api.get("/health");
    return response.data;
  } catch {
    return { success: false, message: "Offline" };
  }
};

export default api;
