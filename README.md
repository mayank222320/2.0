# EyeQlytics Technologies Website

> **Indian GovTech & B2B Innovation Company**  
> From Code to Capital - Empowering government agencies, businesses, and communities with scalable, impact-driven technology solutions.

🌐 **Live Website**: [https://eyeqlytics.com](https://eyeqlytics.com)  
🛡️ **Featured Product**: [CopMap - Police Command & Control](https://copmap.in)

---

## 📋 **Table of Contents**

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)



---

## 🏢 **About**

EyeQlytics Technologies is a modern, responsive website built for an Indian GovTech company specializing in:

- **Government Technology Solutions** - Digital transformation for public sector
- **CopMap** - Revolutionary police command and control system
- **Custom Software Development** - Tailored solutions for enterprises
- **B2B Innovation** - Scalable technology products

### **Company Focus**
- 🏛️ **GovTech Solutions** - Police, healthcare, education systems
- 🚀 **Product Innovation** - CopMap live in Maharashtra Police
- 🌍 **Social Impact** - Technology for public good
- 📈 **Scalable Architecture** - Built for growth and efficiency

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### **Routing & Navigation**
- **React Router DOM** - Client-side routing
- **Dynamic Navigation** - Responsive navbar with dropdown menus

### **SEO & Meta**
- **React Helmet Async** - Dynamic meta tags and SEO
- **Structured Data** - Schema.org markup for rich snippets
- **Open Graph** - Social media optimization
- **Twitter Cards** - Enhanced Twitter sharing

### **Deployment & Hosting**
- **Firebase Hosting** - Fast, secure hosting
- **GoDaddy Domain** - Custom domain management
- **Google Search Console** - SEO monitoring and indexing

---

## 📁 **Project Structure**

```
eyeqlytics-website/
├── public/                     # Static assets
│   ├── logos/                  # Company and partner logos
│   ├── sitemap.xml            # SEO sitemap
│   ├── robots.txt             # Search engine instructions
│   └── favicon files          # Website icons
├── src/
│   ├── components/            # Reusable React components
│   │   ├── shared/            # Shared across multiple pages
│   │   │   ├── PageSEO.jsx    # SEO meta tags component
│   │   │   └── SectionHeader.jsx # Reusable section headers
│   │   ├── Home/              # Home page specific components
│   │   │   ├── Hero.jsx
│   │   │   ├── VisionMissionSection.jsx
│   │   │   ├── FeaturedProductSection.jsx
│   │   │   ├── IndustriesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── CallToActionSection.jsx
│   │   ├── About/             # About page components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StorySection.jsx
│   │   │   ├── ValuesSection.jsx
│   │   │   └── RecognitionSection.jsx
│   │   ├── Careers/           # Careers page components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── BenefitsSection.jsx
│   │   │   ├── OpenRolesSection.jsx
│   │   │   ├── CaptchaModal.jsx
│   │   │   └── ProgramsSection.jsx
│   │   ├── Products/          # Products page components
│   │   │   ├── CopMapHero.jsx
│   │   │   ├── CopMapFeatures.jsx
│   │   │   ├── CopMapStats.jsx
│   │   │   └── CopMapCTA.jsx
│   │   ├── Contact/           # Contact page components
│   │   │   └── LocationMap.jsx
│   │   ├── Navbar/            # Navigation components
│   │   ├── Footer/            # Footer components
│   │   ├── CookieBanner/      # GDPR compliance
│   │   └── ScrollButton/      # Scroll to top functionality
│   ├── pages/                 # Main page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── About.jsx          # Company information
│   │   ├── Products.jsx       # Products overview (redirects to CopMap)
│   │   ├── Products/
│   │   │   └── CopMapPage.jsx # CopMap product page
│   │   ├── Services.jsx       # Services offered
│   │   ├── Careers.jsx        # Job opportunities
│   │   ├── Clients.jsx        # Client testimonials
│   │   ├── Blog.jsx           # Company blog
│   │   ├── Contact.jsx        # Contact information
│   │   └── Legal.jsx          # Legal information
│   ├── constants/             # Data and configuration
│   │   └── data.js            # Static data (industries, testimonials, etc.)
│   ├── styles/                # Global styles
│   │   └── globals.css        # Tailwind CSS and custom styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── index.html                 # HTML template with SEO meta tags
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite build configuration
├── firebase.json              # Firebase hosting configuration
├── .firebaserc                # Firebase project configuration
├── README.md                  # This file
├── SEO_DEPLOYMENT_CHECKLIST.md # SEO setup guide
└── COMPLETE_DEPLOYMENT_GUIDE.md # Deployment instructions
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase CLI** (for deployment)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eyeqlytics-website.git
   cd eyeqlytics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 💻 **Development**

### **Available Scripts**

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Deploy to Firebase
firebase deploy --only hosting
```

### **Development Guidelines**

#### **Component Structure**
- **Page-specific components** go in their respective folders (`Home/`, `About/`, etc.)
- **Shared components** go in `shared/` folder
- **Global components** (Navbar, Footer) stay at component root level

#### **Styling**
- Use **Tailwind CSS** utility classes
- Custom styles in `src/styles/globals.css`
- Responsive design: mobile-first approach
- Consistent color scheme: Blue (#0039a6) and Orange accents

#### **SEO Best Practices**
- Each page uses `PageSEO` component for meta tags
- Structured data for rich snippets
- Optimized images with proper alt tags
- Clean URLs and proper heading hierarchy

---

### **Environment Variables**
Create `.env` file for sensitive data (copy from `.env.example`):
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here

# reCAPTCHA Configuration
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

**Setup Instructions:**
1. Copy `.env.example` to `.env`
2. Get EmailJS credentials from [EmailJS Dashboard](https://www.emailjs.com/)
3. Get reCAPTCHA key from [Google reCAPTCHA](https://www.google.com/recaptcha/)
4. Replace placeholder values with your actual credentials
