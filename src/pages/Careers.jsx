import React, { useState } from "react";
import PageSEO from "../components/shared/PageSEO";
import HeroSection from "../components/Careers/HeroSection";
import BenefitsSection from "../components/Careers/BenefitsSection";
import OpenRolesSection from "../components/Careers/OpenRolesSection";
import ProgramsSection from "../components/Careers/ProgramsSection";
import CaptchaModal from '../components/Careers/CaptchaModal';
import { careersOpenRoles } from "../constants/data";

export default function Careers() {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClickWithCaptcha = (link) => {
    setSelectedLink(link);
    setShowCaptcha(true);
  };

  const handleCaptchaSuccess = () => {
    if (selectedLink?.startsWith("http")) {
      window.location.href = selectedLink;
    } else {
      window.location.assign(selectedLink || "/contact");
    }
  };

  return (
    <>
      <PageSEO
        title="Join EyeQlytics Technologies — Where Impact Meets Engineering"
        description="At EyeQlytics, we're not hiring for job titles — we're building a team of problem solvers, system thinkers, and domain experts who care about making technology work in the real world. Open positions for Flutter Developer, Spring Boot Developer, DevOps Engineer, GovTech Project Manager, and internships."
        keywords="EyeQlytics careers, GovTech jobs India, Flutter developer jobs, Spring Boot developer, government technology careers, Maharashtra tech jobs, domain expert roles"
        canonical="https://eyeqlytics.com/careers"
      />

      <HeroSection />
      <BenefitsSection />
      <OpenRolesSection roles={careersOpenRoles} onSecureApply={handleClickWithCaptcha} />
      <ProgramsSection onSecureApply={handleClickWithCaptcha} />

      {showCaptcha && (
        <CaptchaModal
          onClose={() => setShowCaptcha(false)}
          onSuccess={handleCaptchaSuccess}
        />
      )}
    </>
  );
}