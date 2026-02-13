import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Building, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  {
    name: "Maharashtra State Police",
    project: "CopMap Implementation",
    description:
      "CopMap is actively deployed across districts, transforming real-time policing operations.",
    logo: Shield,
    status: "Active",
    color: "blue",
  },
  {
    name: "Healthcare Practitioners & NGOs",
    project: "Healthcare Systems",
    description:
      "Our systems streamline doctor task management and reporting workflows in rural and emergency healthcare setups.",
    logo: Building,
    status: "Ongoing",
    color: "green",
  },
  {
    name: "Educational Institutions",
    project: "Talent Partnerships",
    description:
      "Collaborations with engineering colleges for talent partnerships, research, and field validation pilots.",
    logo: Users,
    status: "Active",
    color: "purple",
  },
  {
    name: "Early-Stage Startups & Founders",
    project: "Technology Development",
    description:
      "Technology development and co-creation for sector-specific ventures across logistics, agri, civic tech, and more.",
    logo: Building,
    status: "Ongoing",
    color: "orange",
  },
];

// const testimonials = [
//   {
//     quote:
//       "EyeQlytics has revolutionized how we manage our police operations. CopMap has significantly improved our coordination and response times.",
//     author: "Senior Police Officer",
//     organization: "Maharashtra State Police",
//     rating: 5,
//   },
//   {
//     quote:
//       "The team's deep understanding of government processes and technical expertise made them the perfect partner for our digital transformation.",
//     author: "Project Director",
//     organization: "Government Partner",
//     rating: 5,
//   },
//   {
//     quote:
//       "Working with EyeQlytics has been exceptional. Their solutions are not just technically sound but also user-friendly and practical.",
//     author: "Technology Head",
//     organization: "Educational Institution",
//     rating: 5,
//   },
// ];

export default function Clients() {
  return (
    <>
      <Helmet>
        <title>
          Organizations and Institutions Backed by EyeQlytics Technology
        </title>
        <meta
          name="description"
          content="EyeQlytics is proud to collaborate with forward-thinking organizations across the public, private, and academic sectors. Maharashtra State Police, Healthcare Practitioners, Educational Institutions, and Early-Stage Startups trust our technology solutions."
        />
        <meta
          name="keywords"
          content="EyeQlytics clients, Maharashtra State Police, CopMap users, healthcare technology, educational partnerships, startup collaboration"
        />
        <link rel="canonical" href="https://eyeqlytics.com/clients" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
              <span className="text-sm font-semibold text-blue-600">
                Our Partners
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Organizations and Institutions Backed by{" "}
              <span
                className="inline-block text-4xl md:text-5xl text-transparent bg-clip-text pb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                EyeQlytics Technologies
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              EyeQlytics is proud to collaborate with forward-thinking
              organizations across the public, private, and academic sectors.
              Our solutions are already trusted by institutions working on
              mission-critical operations in governance, healthcare, and
              innovation.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with forward-thinking organizations to deliver impactful
              technology solutions across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${client.color}-100 mr-4`}
                  >
                    <client.logo
                      className={`h-6 w-6 text-${client.color}-600`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {client.name}
                    </h3>
                    <div className="flex items-center">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {client.status}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  {client.project}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.organization}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Looking to collaborate on a system that matters?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our growing network of clients and partners who are
              transforming their operations with innovative technology
              solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                background: "linear-gradient(to right, #0039a6, #04327b)",
              }}
            >
              Let's Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
