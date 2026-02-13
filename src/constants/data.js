import {
  Shield,
  Building2,
  GraduationCap,
  Heart,
  Factory,
  Briefcase,
  Users,
  Truck,
  Zap,
  Target,
  Lightbulb,
  Code,
  Award
} from "lucide-react";

// Industries data
export const industries = [
  {
    name: "Government & Public Safety",
    description: "Law enforcement, emergency services, and public administration solutions",
    icon: Shield,
    color: "blue"
  },
  {
    name: "Corporate & Enterprise",
    description: "Custom business solutions and digital transformation services",
    icon: Building2,
    color: "green"
  },
  {
    name: "Education",
    description: "Educational technology and institutional management systems",
    icon: GraduationCap,
    color: "purple"
  },
  {
    name: "Healthcare",
    description: "Healthcare management and patient care optimization solutions",
    icon: Heart,
    color: "red"
  },
  {
    name: "Manufacturing",
    description: "Industrial automation and supply chain management systems",
    icon: Factory,
    color: "orange"
  },
  {
    name: "Professional Services",
    description: "Consulting and specialized service delivery platforms",
    icon: Briefcase,
    color: "indigo"
  },
  {
    name: "Non-Profit & NGO",
    description: "Community impact and social service management solutions",
    icon: Users,
    color: "pink"
  },
  {
    name: "Logistics & Transportation",
    description: "Fleet management and supply chain optimization systems",
    icon: Truck,
    color: "teal"
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid and utility management solutions",
    icon: Zap,
    color: "yellow"
  }
];

// Testimonials data
export const testimonials = [
  {
    quote: "EyeQlytics transformed our police operations with CopMap. Real-time tracking and deployment management has significantly improved our response times and operational efficiency.",
    author: "Senior Police Inspector",
    organization: "Maharashtra Police Department",
    rating: 5
  },
  {
    quote: "The team's understanding of government processes and their technical expertise made our digital transformation seamless. Highly recommended for public sector projects.",
    author: "IT Director",
    organization: "Government Agency",
    rating: 4
  },
  {
    quote: "Working with EyeQlytics has been exceptional. They delivered a robust solution that perfectly fits our operational needs and continues to provide excellent support.",
    author: "Operations Manager",
    organization: "Enterprise Client",
    rating: 4
  }
];

// About page data
export const aboutValues = [
  {
    title: "Innovation with Impact",
    description: "We build technology that creates meaningful change in real-world scenarios.",
    icon: Lightbulb,
  },
  {
    title: "Ethical & Responsible Technology",
    description: "Our solutions prioritize user privacy, security, and ethical considerations.",
    icon: Shield,
  },
  {
    title: "Scalable Architecture",
    description: "We design systems that grow with your needs and handle increasing demands.",
    icon: Target,
  },
  {
    title: "Human-Centric Design",
    description: "Every solution we create puts the end user at the center of our design process.",
    icon: Users,
  },
];

export const aboutAchievements = [
  {
    name: "DPIIT Registered Startup",
    logo: "/logos/DPIT.png",
  },
  {
    name: "Udyam Registration",
    logo: "/logos/Udyam.png",
  },
  {
    name: "Startup India Recognition",
    logo: "/logos/startup-india-logo.png",
  },
  {
    name: "Active Government Partnerships",
    logo: "/logos/GOVT.png",
  },
];

// Careers page data
export const careersBenefits = [
  {
    title: "Meaningful Impact",
    description: "Work on projects that directly transform public services and improve citizens' lives.",
    icon: Heart,
    color: "red",
  },
  {
    title: "Innovation Leadership",
    description: "Be at the forefront of GovTech innovation and emerging technologies in India.",
    icon: Lightbulb,
    color: "yellow",
  },
  {
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career advancement paths.",
    icon: Target,
    color: "green",
  },
  {
    title: "Collaborative Culture",
    description: "Work with passionate professionals who value teamwork and creativity.",
    icon: Users,
    color: "blue",
  },
];

export const careersPerks = [
  {
    icon: Code,
    title: "Latest Technology",
    description: "Work with cutting-edge tools and frameworks",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote and hybrid work options available",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance-based rewards and recognition programs",
  },
  {
    icon: Target,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications",
  },
];

export const careersOpenRoles = [
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "2-4 years",
    description: "Craft seamless cross-platform mobile experiences for real-time field operations.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScBqmB5cw1VZlupEMXJUtwq-IjBNACRp2QXc3JlvV9eMvKGeQ/viewform?usp=header",
    requirements: [
      "Flutter/Dart expertise",
      "State management (Provider/Bloc)",
      "REST API integration",
      "Git workflow",
    ],
  },
  {
    title: "Spring Boot Backend Developer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "3-5 years",
    description: "Build scalable, modular APIs powering core public systems.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeDVPrboI44Y_docPAgvB81XNthP14V3q4LygJEaaFmv0IqZQ/viewform",
    requirements: [
      "Spring Boot",
      "RESTful APIs",
      "Database design",
      "Cloud platforms (GCP/AWS)",
    ],
  },
  {
    title: "DevOps & Infrastructure Engineer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "4-6 years",
    description: "Architect cloud-native systems with CI/CD, Docker, and observability stacks.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeokRzP7PIQ8gBcUYeDu8KsA_u8mYxDThvYPBKzHoe12fQWAw/viewform",
    requirements: [
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Cloud infrastructure",
    ],
  },
  {
    title: "GovTech Project Manager",
    type: "Full-time",
    location: "On-site",
    experience: "5+ years",
    description: "Drive product deployments across police forces, healthcare teams, and civic departments.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScVK2bmFjQMSti5-wBZ0aBXs6xcGKvz6vJkqLvfifJZfZaWvQ/viewform?usp=header",
    requirements: [
      "Project management",
      "Government sector experience",
      "Stakeholder management",
      "Agile methodologies",
    ],
  },
];