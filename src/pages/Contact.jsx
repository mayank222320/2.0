import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
} from "lucide-react";
import emailjs from "emailjs-com";
import LocationMap from "../components/Contact/LocationMap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Let's Build Something That Matters | Contact EyeQlytics Technologies</title>
        <meta
          name="description"
          content="Get in touch with EyeQlytics Tech Pvt. Ltd. Located at 10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhaji Nagar 431015. Call +91-9970283329 or email contact@eyeqlytics.com for custom software development."
        />
        <meta
          name="keywords"
          content="contact EyeQlytics, software development company Maharashtra, GovTech solutions India, Chhatrapati Sambhaji Nagar tech company"
        />
        <link rel="canonical" href="https://eyeqlytics.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-brand-900 overflow-hidden isolate">
         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
         </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700/50 text-brand-200 text-sm font-medium mb-6 backdrop-blur-md mx-auto">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               We are ready to listen
             </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Engineer Excellence in Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
                Operations
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-surface-50 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                 <p className="text-slate-500 text-lg leading-relaxed">
                    Ready to transform your operations with innovative technology? We'd love to hear from you and discuss how we can help create meaningful impact.
                 </p>
              </div>

              <div className="grid gap-6">
                 {[
                    { icon: MapPin, title: "Visit Us", desc: "10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhaji Nagar, Maharashtra - 431105", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: Phone, title: "Call Us", desc: "+91-9970283329", link: "tel:+919970283329", color: "text-emerald-500", bg: "bg-emerald-50" },
                    { icon: Mail, title: "Email Us", desc: "contact@eyeqlytics.com", link: "mailto:contact@eyeqlytics.com", color: "text-indigo-500", bg: "bg-indigo-50" },
                    { icon: Globe, title: "Online", desc: "www.eyeqlytics.com", color: "text-purple-500", bg: "bg-purple-50" },
                 ].map((item, index) => (
                    <motion.div 
                       key={index}
                       whileHover={{ y: -5 }}
                       className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                       <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                          {item.link ? (
                             <a href={item.link} className="text-slate-500 hover:text-brand-600 transition-colors font-medium">
                                {item.desc}
                             </a>
                          ) : (
                             <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                          )}
                       </div>
                    </motion.div>
                 ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden"
            >
               {/* Decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>

               <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                     <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Send us a message</h3>
               </div>

              {submitted ? (
                <div className="text-center py-12">
                  <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                     <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                    We've received your inquiry and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-600 hover:text-brand-700 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-2 gap-5">
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Name</label>
                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                           placeholder="John Doe"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Organization</label>
                        <input
                           type="text"
                           name="organization"
                           value={formData.organization}
                           onChange={handleChange}
                           className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                           placeholder="Company Ltd."
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-500 hover:shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
             <div className="inline-flex p-3 bg-brand-50 text-brand-600 rounded-xl mb-6">
                <Building className="w-6 h-6" />
             </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visit Our Headquarters
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We welcome partners and clients to visit our innovation hub in Chhatrapati Sambhaji Nagar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <LocationMap />
          </motion.div>
        </div>
      </section>
    </>
  );
}
