import React from "react";
import { Helmet } from "react-helmet-async";

const PageSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  structuredData,
  ogImage = "https://eyeqlytics.com/favicon.png",
  ogImageAlt = "EyeQlytics Technologies - Indian GovTech Solutions"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="EyeQlytics Tech Pvt. Ltd." />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon and Icons */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EyeQlytics Technologies" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/png" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EyeQlytics" />
      <meta name="twitter:creator" content="@EyeQlytics" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#0039a6" />
      <meta name="msapplication-TileColor" content="#0039a6" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSEO;