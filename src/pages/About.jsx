import React from "react";
import PageSEO from "../components/shared/PageSEO";
import HeroSection from "../components/About/HeroSection";
import StorySection from "../components/About/StorySection";
import ValuesSection from "../components/About/ValuesSection";
import RecognitionSection from "../components/About/RecognitionSection";

export default function About() {
  return (
    <>
      <PageSEO
        title="Who We Are – The Team Behind India's Most Scalable Public Sector Tech Tools | EyeQlytics Technologies"
        description="Founded by engineers and entrepreneurs passionate about public innovation, EyeQlytics began with CopMap to digitize India's police deployment workflows. Learn about our mission to transform public infrastructure through intelligent systems."
        keywords="EyeQlytics team, GovTech company India, police technology, CopMap founders, Maharashtra startup, public sector innovation"
        canonical="https://eyeqlytics.com/about"
      />

      <HeroSection />
      <StorySection />
      <ValuesSection />
      <RecognitionSection />
    </>
  );
}