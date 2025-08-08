import React from "react";
import { Helmet } from "react-helmet-pro";

const SEO = ({
  title = "GeezGeeks - Digital Agency | Web Development, Design & SEO Services",
  description = "GeezGeeks is a leading digital agency specializing in web development, web design, graphics design, SEO, and digital marketing services. We craft digital experiences that inspire and connect.",
  keywords = "web development, web design, graphics design, SEO, digital marketing, software development, branding, Ethiopia, Addis Ababa",
  author = "GeezGeeks",
  image = "/public/Logo.png",
  url = "https://geezgeeks.netlify.app/",
  type = "website",
  structuredData = null,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GeezGeeks",
    description:
      "Digital agency specializing in web development, design, and digital marketing",
    url: "https://geezgeeks.netlify.app/",
    logo: "https://geezgeeks.com/Logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251-931460438",
      contactType: "customer service",
      email: "geezgeeks09@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Ethiopia",
      addressLocality: "Adama",
    },
    sameAs: [
      "https://instagram.com/geezgeeks",
      "https://t.me/geezgeeks",
      "https://www.tiktok.com/@geezgeekss",
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GeezGeeks" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/Logo.png" />
      <link rel="apple-touch-icon" href="/Logo.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
