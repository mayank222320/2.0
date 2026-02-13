import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "CopMap: From MVP to Multi-District Deployment",
    excerpt:
      "A behind-the-scenes look at how a single pilot scaled across law enforcement operations in Maharashtra.",
    author: "EyeQlytics Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "GovTech & Public Innovation",
    image: "Blogs/Copmap1.jpg",
    featured: true,
  },
  {
    id: 2,
    title:
      "Building Scalable Firebase Architectures for Real-Time Public Systems",
    excerpt:
      "How we structure real-time apps with millions of events, offline resilience, and clean data sync.",
    author: "Engineering Team",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Engineering & Architecture",
    image: "/Blogs/Firebase.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Digitizing Police Bandobast: A 70-Year Workflow Rethought",
    excerpt:
      "What it takes to redesign high-risk manual systems into secure, real-time platforms.",
    author: "Product Team",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "GovTech & Public Innovation",
    image: "Blogs/degitizing-bandobast.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Why Flutter Powers Our Frontend Stack",
    excerpt:
      "A performance, maintainability, and design perspective on using Flutter for serious systems.",
    author: "Development Team",
    date: "2025-01-01",
    readTime: "6 min read",
    category: "Engineering & Architecture",
    image: "Blogs/flutter.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "GovTech in India: Why the Time Is Now",
    excerpt:
      "An honest take on the opportunity, mindset shift, and resistance in the Indian public tech space.",
    author: "Strategy Team",
    date: "2024-12-28",
    readTime: "9 min read",
    category: "GovTech & Public Innovation",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Designing for Users Who Don't Like Change",
    excerpt:
      "What it takes to build UI/UX for legacy workflows and digitally hesitant users.",
    author: "Design Team",
    date: "2024-12-20",
    readTime: "7 min read",
    category: "Product Thinking & Design",
    image: "Blogs/UI.jpg",
    featured: false,
  },
];

const categories = [
  "All",
  "GovTech & Public Innovation",
  "Engineering & Architecture",
  "Product Thinking & Design",
  "Startup & Ecosystem Thinking",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <Helmet>
        <title>
          Insights, Engineering, and Field Stories from the EyeQlytics Team
        </title>
        <meta
          name="description"
          content="At EyeQlytics, we don't just write code — we think deeply about how systems should work. Our blog is where we share what we're building, learning, and reimagining — across sectors, stacks, and stories."
        />
        <meta
          name="keywords"
          content="EyeQlytics blog, GovTech insights, engineering stories, CopMap development, public innovation, system design, Flutter development, Spring Boot"
        />
        <link rel="canonical" href="https://eyeqlytics.com/blog" />
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
                Our Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights, Engineering, and Field Stories from the{" "}
              <span
                className="inline-block text-4xl md:text-5xl text-transparent bg-clip-text pb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                EyeQlytics Team
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At EyeQlytics, we don't just write code we think deeply about how
              systems should work. Our blog is where we share what we're
              building, learning, and reimagining across sectors, stacks, and
              stories.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mb-3 inline-block">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      {/* <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link> */}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Read All Articles CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          ></motion.div>
        </div>
      </section>
    </>
  );
}
