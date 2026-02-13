import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";

export default function OpenRolesSection({ roles, onSecureApply }) {
  return (
    <section id="open-roles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Open Technical Roles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and help us build the future of government technology in India.
          </p>
        </motion.div>

        <div className="space-y-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />{role.type}</div>
                    <div className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{role.location}</div>
                    <div className="flex items-center"><Users className="h-4 w-4 mr-1" />{role.experience}</div>
                  </div>
                </div>

                <button
                  onClick={() => onSecureApply(role.link)}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
                  style={{ background: "linear-gradient(to right, #0039a6, #04327b)" }}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{role.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition-colors"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
