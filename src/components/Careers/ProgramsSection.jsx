import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProgramsSection = ({ onSecureApply }) => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Domain Expert Track */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Domain Expert – General Track (Tech or Non-Tech)
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Are you someone who's spent 10–30 years inside a system, be it
              healthcare, law enforcement, education, supply chains, or public
              operations?
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We invite doctors, ex-bureaucrats, retired officers, field
              practitioners, and senior industry professionals to join us as
              Domain Experts. Your real-world experience helps us build
              products that actually solve the problem.
            </p>
            <p className="text-blue-600 font-semibold mb-6">
              Let's build your insights into software.
            </p>

            <button
              onClick={() =>
                onSecureApply(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdDGMr1nnD6SQw-IcjEXftSyXgBxft_fPT0zN3DLmiuh3phcg/viewform?usp=header"
                )
              }
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                background: "linear-gradient(to right, #0039a6, #04327b)",
              }}
            >
              Join as Domain Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Internship Program */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Internship & Early Talent Program
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer immersive internships and part-time roles for
              engineering students and recent grads who want hands-on exposure
              to building for impact.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Interns at EyeQlytics work on real products like CopMap — not just
              dummy tasks. Expect to ship code, solve real issues, and learn
              from domain experts and senior devs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  onSecureApply(
                    "https://docs.google.com/forms/d/e/1FAIpQLSe2EeKxj4FTe5Jti-HLhrcIJcIMWpij7TytwsH26NgUhIufPA/viewform?usp=header"
                  )
                }
                className="inline-flex items-center justify-center text-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <a
                href="#open-roles"
                className="inline-flex items-center justify-center text-center px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold rounded-lg transition-all duration-200"
              >
                See All Openings
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;