import React from "react";
import PageSEO from "../../components/shared/PageSEO";
import CopMapHero from "../../components/Products/CopMapHero";
import CopMapFeatures from "../../components/Products/CopMapFeatures";
import CopMapStats from "../../components/Products/CopMapStats";
import CopMapCTA from "../../components/Products/CopMapCTA";

export default function CopMapPage() {
  return (
    <>
      <PageSEO
        title="CopMap - Police Command & Control System | EyeQlytics Technologies"
        description="CopMap - Revolutionary police command and control solution featuring live officer tracking, bandobast coordination, and real-time deployment management. Trusted by Maharashtra Police."
        keywords="CopMap, police technology, command control system, officer tracking, bandobast management, Maharashtra police, law enforcement software"
        canonical="https://eyeqlytics.com/products/copmap"
      />

      <CopMapHero />
      <CopMapFeatures />
      <CopMapStats />
      <CopMapCTA />
    </>
  );
}