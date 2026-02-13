import React from "react";
import PageSEO from "../components/shared/PageSEO";
import Hero from "../components/Home/Hero";
import VisionMissionSection from "../components/Home/VisionMissionSection";
import FeaturedProductSection from "../components/Home/FeaturedProductSection";
import IndustriesSection from "../components/Home/IndustriesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CallToActionSection from "../components/Home/CallToActionSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EyeQlytics Technologies",
  alternateName: "EyeQlytics Tech Pvt. Ltd.",
  url: "https://eyeqlytics.com",
  logo: {
    "@type": "ImageObject",
    "url": "https://eyeqlytics.com/EyeQlytics Technologies.png",
    "width": 200,
    "height": 60
  },
  description: "Indian GovTech and B2B product innovation company focused on building tailored digital solutions for underserved sectors",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10/81, Near SJP Petrol Pump, Bidkin",
    addressLocality: "Chhatrapati Sambhaji Nagar",
    addressRegion: "Maharashtra",
    postalCode: "431015",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9970283329",
    contactType: "customer service",
  },
};

export default function Home() {
  return (
    <>
      <PageSEO
        title="EyeQlytics Technologies - Indian GovTech & B2B Innovation Company"
        description="EyeQlytics Tech Pvt. Ltd. - Indian GovTech and B2B product innovation company. From Code to Capital. Empowering government agencies, businesses, and communities with scalable, impact-driven technology solutions including CopMap for police departments."
        keywords="GovTech India, Public Systems, Custom Software Development, CopMap, Government Technology, B2B Solutions, Police Technology, Maharashtra, Chhatrapati Sambhaji Nagar,Law Enforcement operational excellence, data-driven SaaS"
        canonical="https://eyeqlytics.com/"
        ogTitle="EyeQlytics Technologies - Engineering operational excellence in government and enterprise"
        ogDescription="Indian GovTech company empowering government agencies with scalable technology solutions. CopMap for police departments now live in Maharashtra."
        twitterTitle="EyeQlytics Technologies - GovTech Solutions India"
        twitterDescription="Custom technology solutions for government and enterprise. CopMap live in Maharashtra police departments."
        structuredData={structuredData}
      />

      <Hero />
      <VisionMissionSection />
      <FeaturedProductSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}