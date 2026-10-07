import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://start-up-website-0vpo.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export const submitContact = async (formData) => {
  try {
    const response = await api.post("/contacts", formData);
    return response.data;
  } catch (backendError) {
    // If backend is unreachable, gracefully submit to Formspree directly
    const formspreeEndpoint =
      import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mljgjjvn";

    if (formspreeEndpoint) {
      try {
        const fsResponse = await axios.post(formspreeEndpoint, formData, {
          headers: {
            Accept: "application/json",
          },
        });
        if (fsResponse.status === 200 || fsResponse.data?.ok) {
          return {
            success: true,
            message:
              "Thank you! Your project inquiry has been received. Our team will contact you shortly.",
          };
        }
      } catch (fsError) {
        console.error("Formspree fallback error:", fsError);
      }
    }
    throw backendError;
  }
};

export const checkHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};

export default api;
