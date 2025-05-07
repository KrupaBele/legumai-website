import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Shield,
  Scale,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle,
  Building2,
  Sun,
  Moon,
  Globe,
  Target,
  Lightbulb,
  Code,
  Cpu,
  AlertTriangle,
  Clock,
  Map,
  RefreshCw,
  FileText,
  Gavel,
  FileCheck,
  UserCheck,
  FolderCheck,
  ChevronLeft,
  ChevronRight,
  BookOpenCheck,
  Globe2,
  Brain,
  Briefcase,
  Play,
  Award,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Chatbot from "./components/Chatbot";
import complexityIcon from "./icons/complexity.svg";
import evolvingLaws from "./icons/evolving.svg";
import jurisdictional from "./icons/Jurisdictional.svg";
import manual from "./icons/manual.svg";

// Import pages
import AIStrategy from "./pages/AIStrategy";
import Consulting from "./pages/Consulting";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import Training from "./pages/Training";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Updates from "./pages/Updates";
import KnowledgeBase from "./pages/KnowledgeBase";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Import components
import Clientele from "./components/Clientele";
import Testimonials from "./components/Testimonials";
import TechAPIs from "./components/TechAPIs";
import NewsAndMedia from "./components/NewsAndMedia";

function StatsCarousel() {
  const stats = [
    {
      icon: <Building2 className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "5000+ Companies Served",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "99.9% Compliance Rate",
    },
    {
      icon: <Shield className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "Industry Leaders",
    },
    {
      icon: <Award className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "Expert Advisory",
    },
    // Duplicate for seamless loop
    {
      icon: <Building2 className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "5000+ Companies Served",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "99.9% Compliance Rate",
    },
    {
      icon: <Shield className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "Industry Leaders",
    },
    {
      icon: <Award className="h-6 w-6 text-gray-800 dark:text-white" />,
      text: "Expert Advisory",
    },
  ];

  return (
    <div className="stats-carousel-container">
      <div className="stats-track">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <span className="stat-text">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ service, isActive, onMouseEnter }) {
  return (
    <div
      className={`product-card ${isActive ? "product-card-active" : ""}`}
      onMouseEnter={onMouseEnter}
    >
      <div className="product-image-container">
        <img
          src={service.image}
          alt={service.title}
          className={`product-image ${isActive ? "product-image-hover" : ""}`}
        />
      </div>
      <div className="product-content">
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            gap: "4px",
            left: "0px",
          }}
        >
          <div
            className={`product-icon ${isActive ? "product-icon-hover" : ""}`}
          >
            {service.icon}
          </div>
          <h3
            className="product-title"
            style={{ fontSize: "34px", display: "flex", alignItems: "center" }}
          >
            {service.title}
          </h3>
        </div>
        <p className="product-description">{service.description}</p>

        <div className="product-features">
          {service.features.map((feature, index) => (
            <div key={index} className="product-feature">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <button className="button-primary mt-8">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function ExpertiseTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const expertise = [
    { text: "Compliance Management", class: "expertise-1" },
    { text: "Expert Audits", class: "expertise-2" },
    { text: "Advisory Services", class: "expertise-3" },
    { text: "AI-driven Solutions", class: "expertise-4" },
    { text: "POSH Training", class: "expertise-5" },
    { text: "Corporate Training", class: "expertise-6" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertise.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[40px] flex items-center justify-center">
      <div
        key={currentIndex}
        className={`typewriter ${expertise[currentIndex].class}`}
      >
        {expertise[currentIndex].text}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="glass p-8 rounded-3xl overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${service.image})`,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
          {service.icon}
        </div>

        <h3 className="text-3xl font-medium mb-6 gradient-text">
          {service.title}
        </h3>

        <div className="space-y-6">
          {service.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="button-primary mt-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 inline" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function ExpertiseCard({ expertise, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass p-8 rounded-3xl card-hover relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 dark:from-gray-100/5 dark:to-gray-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="relative z-10">
        <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
          {expertise.icon}
        </div>

        <h3 className="text-2xl font-medium mb-4 gradient-text">
          {expertise.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {expertise.description}
        </p>

        {expertise.stats && (
          <div className="text-3xl font-bold gradient-text">
            {expertise.stats}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  const services = [
    {
      icon: <Gavel className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Labour Law Advisory",
      description:
        "Expert guidance through complex labor laws and compliance requirements.",
      image: "./src/imgs/advisory.jpg",
      features: [
        "Drafts replies to PF/ESI and wage dispute notices",
        "Liaises with authorities to resolve inspections",
        "Represents clients in labor courts and tribunals",
        "Advises on IPO labor compliance and ESOPs",
        "Conducts due diligence for public listings",
      ],
    },
    {
      icon: <FileCheck className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Labor Law Audits",
      description:
        "Comprehensive audits to ensure complete regulatory compliance.",
      image: "./src/imgs/aduit.jpg",
      features: [
        "Reviews payroll and statutory filings",
        "Checks contract labor licensing",
        "Audits workplace safety measures",
        "Flags wage and compliance issues",
        "Provides actionable audit reports",
      ],
    },
    {
      icon: <FolderCheck className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "HR Policies Drafting",
      description: "End-to-end compliance management powered by AI technology.",
      image: "./src/imgs/hrpolicy.jpg",
      features: [
        "Prepares model standing orders",
        "Writes compliant offer letters and contracts",
        "Aligns policies with labor laws",
        "Updates documents for legal changes",
      ],
    },
    {
      icon: <UserCheck className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "POSH (Prevention of Sexual Harassment)",
      description:
        "Comprehensive training programs for workplace harassment prevention.",
      image: "./src/imgs/POSH.jpg",
      features: [
        "Conducts POSH awareness workshops",
        "Sets up Internal Complaints Committees",
        "Drafts and implements POSH policies",
        "Guides on case investigations",
        "Maintains required compliance records",
      ],
    },
    {
      icon: <Scale className="h-10 w-10 text-gray-800 dark:text-white" />, // Assuming you'll add an appropriate icon
      title: "Labour Codes Advisory",
      description:
        "Guidance on implementing and complying with new labor codes.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80", // You might want to add a specific image
      features: [
        "Simplifies wage and bonus compliance",
        "Advises on trade union and worker relations",
        "Streamlines PF, ESI, and gratuity for gig workers",
        "Updates contracts for new code requirements",
        "Trains HR on latest compliance rules",
      ],
    },
  ];

  const challenges = [
    {
      icon: (
        <img src={manual} className="h-8 w-8 text-gray-800 dark:text-white" />
      ),
      title: "Manual Processes",
      description: "Time-consuming audits, documentation, and record-keeping",
    },
    {
      icon: (
        <img
          src={jurisdictional}
          className="h-8 w-8 text-gray-800 dark:text-white"
        />
      ),
      title: "Jurisdictional Variations",
      description: "Navigating 28+ state laws and 236+ central Acts.",
    },
    {
      icon: (
        <img
          src={complexityIcon}
          className="h-8 w-8 text-gray-800 dark:text-white"
        />
      ),
      title: "Complexity",
      description: "Over 10,000 compliances requiring constant monitoring.",
    },
    {
      icon: (
        <img
          src={evolvingLaws}
          className="h-8 w-8 text-gray-800 dark:text-white"
        />
      ),
      title: "Evolving Laws",
      description: "Frequent amendments demand real-time updates.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const serviceSliderSettings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    // Remove beforeChange and afterChange - we'll handle this differently
  };

  const HomePage = () => (
    <>
      <div className="section-height hero-gradient pt-64 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 gradient-text leading-relaxed">
              Simplifying HR Compliance &<br />
              Labor Law Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Your One-Stop Solution for Labor Law Compliance
            </p>
            <div className="mb-12">
              <ExpertiseTypewriter />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
              <button className="button-primary text-lg py-3 px-6 font-semibold">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="button-secondary text-lg py-3 px-6 font-semibold group">
                Book a Consultation
                <Play className="ml-2 h-5 w-5 inline-block transform transition-transform group-hover:scale-110" />
              </button>
            </div>

            <StatsCarousel />
          </div>
        </div>
      </div>

      <Clientele />

      <section className="section-height section-gradient-1">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-12 md:p-16 dark:bg-gray-800/50">
              <div className="text-center mb-16">
                <h2
                  className="text-4xl md:text-5xl font-medium mb-4 gradient-text"
                  style={{ fontSize: "47px", paddingBottom: "4px" }}
                >
                  Navigating Labour Law Compliance Made Easy
                </h2>
                <h3 className="text-2xl md:text-3xl font-medium mb-8 text-gray-600 dark:text-gray-300">
                  Transforming Labour Law Compliance for Indian Businesses
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  SSA delivers expert-driven compliance solutions, comprehensive
                  audits, and up-to-date guidance to help organizations maintain
                  statutory compliance, minimize risks, and streamline HR and
                  payroll processes with assurance and efficiency
                </p>
              </div>

              <div className="mb-16">
                <Slider {...sliderSettings}>
                  {challenges.map((challenge, index) => (
                    <div key={index} className="px-2">
                      <div className="glass p-8 rounded-3xl card-hover h-full">
                        <div className="mb-6 p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl inline-block">
                          {challenge.icon}
                        </div>
                        <h3 className="text-xl font-medium mb-4 gradient-text">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="glass p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                <div className="text-center">
                  <h3 className="text-2xl font-medium mb-6 gradient-text">
                    Our Solution
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Our solutions streamline regulatory tracking, document
                    management, risk assessments, and audits—helping businesses
                    stay compliant effortlessly, reduce risks, and save time.
                    Let AI take the complexity out of compliance, so you can
                    focus on growing your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-height section-gradient-1">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Products & Services
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions tailored to meet your labor law
                compliance needs
              </p>
            </div>

            <div className="relative service-slider-container">
              <Slider ref={sliderRef} {...serviceSliderSettings}>
                {services.map((service, index) => (
                  <ProductCard
                    key={`service-${index}`}
                    service={service}
                    isActive={currentService === index}
                    onMouseEnter={() => {
                      if (sliderRef.current) {
                        sliderRef.current.slickGoTo(index);
                      }
                    }}
                  />
                ))}
              </Slider>

              <div className="product-nav">
                <div className="flex space-x-3">
                  {/* {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(index);
                        }
                      }}
                      className={`product-dot ${
                        currentService === index
                          ? "product-dot-active"
                          : "product-dot-inactive"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))} */}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      if (sliderRef.current) {
                        sliderRef.current.slickPrev();
                      }
                    }}
                    className="product-arrow"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => {
                      if (sliderRef.current) {
                        sliderRef.current.slickNext();
                      }
                    }}
                    className="product-arrow"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-height section-gradient-2">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive legal expertise combined with cutting-edge
                technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BookOpenCheck className="h-10 w-10" />,
                  title: "Labor Law Mastery",
                  description:
                    "Expert knowledge covering 236+ Acts and 10,000+ compliances across various industries and sectors.",
                  stats: "236+ Acts",
                },
                {
                  icon: <Globe2 className="h-10 w-10" />,
                  title: "Multi-Jurisdictional Compliance",
                  description:
                    "Navigate complex state-specific laws across India, SEA, and MEA regions with confidence.",
                  stats: "28+ States",
                },
                {
                  icon: <Brain className="h-10 w-10" />,
                  title: "HR Due Diligence",
                  description:
                    "Comprehensive support for mergers and acquisitions, ensuring smooth transitions and compliance.",
                  stats: "500+ M&As",
                },
                {
                  icon: <Briefcase className="h-10 w-10" />,
                  title: "AI Integration",
                  description:
                    "Leverage advanced AI to automate 95% of compliance tasks, from payroll to documentation.",
                  stats: "95% Automation",
                },
              ].map((expertise, index) => (
                <ExpertiseCard
                  key={index}
                  expertise={expertise}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsAndMedia />

      <TechAPIs />
      <Testimonials />

      <section className="section-height section-gradient-1">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto glass rounded-3xl p-16 text-center dark:bg-gray-800/50">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
              Ready to Simplify Your Labor Law Compliance?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of businesses across India who trust us with their
              compliance needs.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="button-primary">Get Started Now</button>
              <button className="button-secondary">Talk to an Expert</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <Router>
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-200">
        <nav className="fixed w-full z-50 top-0">
          <div className="glass-strong mx-4 mt-4 px-6 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-orange-600 dark:text-blue-400" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  SSA Compliance
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/ai-strategy" className="nav-link">
                  AI Strategy
                </Link>
                <Link to="/consulting" className="nav-link">
                  Consulting
                </Link>
                <Link to="/training" className="nav-link">
                  Training
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/ai-strategy" element={<AIStrategy />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Chatbot />

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>

        <footer className="section-gradient-2 py-32">
          <div className="container mx-auto px-4">
            <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      SSA Compliance
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your trusted partner for pan-India labor law compliance
                    solutions.
                  </p>
                </div>
                <div>
                  <h3 className="footer-heading">Quick Links</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/resources" className="footer-link">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="footer-link">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/industries" className="footer-link">
                        Industries
                      </Link>
                    </li>
                    <li>
                      <Link to="/updates" className="footer-link">
                        Updates
                      </Link>
                    </li>
                    <li>
                      <Link to="/knowledge-base" className="footer-link">
                        Knowledge Base
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="footer-heading">Company</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/about" className="footer-link">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="footer-link">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="footer-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="footer-heading">Support</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/knowledge-base" className="footer-link">
                        Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link to="/updates" className="footer-link">
                        Updates
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="footer-link">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-gray-700 dark:text-gray-300">
                    © 2024 SSA Compliance. All rights reserved.
                  </p>
                  <div className="flex space-x-6">
                    <Link to="/privacy-policy" className="footer-link">
                      Privacy Policy
                    </Link>
                    <Link to="/terms-of-service" className="footer-link">
                      Terms of Service
                    </Link>
                    <Link to="/cookie-policy" className="footer-link">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
