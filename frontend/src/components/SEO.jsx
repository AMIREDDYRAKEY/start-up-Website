import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "DHANVIRA Technologies | Web, Mobile, AI & Software Solutions",
  description = "DHANVIRA Technologies builds modern web applications, Android apps, custom software, AI solutions and scalable SaaS products.",
  keywords = "web development, android apps, AI solutions, SaaS, custom software, DHANVIRA Technologies",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
