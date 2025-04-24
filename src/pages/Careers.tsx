import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Building2, Users2, Brain, Rocket, Heart, Coffee } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      title: "Senior Compliance Consultant",
      location: "Mumbai, India",
      type: "Full-time",
      department: "Consulting",
      description: "Lead compliance advisory services for key clients across multiple industries.",
      requirements: [
        "8+ years of experience in compliance consulting",
        "Strong knowledge of Indian labor laws",
        "Excellent client communication skills",
        "Advanced degree in Law or related field"
      ]
    },
    {
      title: "AI/ML Engineer",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Technology",
      description: "Develop and implement AI solutions for compliance automation.",
      requirements: [
        "5+ years of experience in AI/ML development",
        "Expertise in Python and TensorFlow",
        "Experience with NLP and document processing",
        "MS/PhD in Computer Science or related field"
      ]
    },
    {
      title: "Legal Research Analyst",
      location: "Delhi, India",
      type: "Full-time",
      department: "Legal",
      description: "Conduct research on regulatory changes and update compliance frameworks.",
      requirements: [
        "3+ years of legal research experience",
        "Strong analytical and writing skills",
        "Knowledge of employment laws",
        "Law degree required"
      ]
    },
    {
      title: "Product Manager",
      location: "Pune, India",
      type: "Full-time",
      department: "Product",
      description: "Lead the development of our compliance management platform.",
      requirements: [
        "5+ years of product management experience",
        "Experience with SaaS products",
        "Strong technical background",
        "MBA preferred"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: <Coffee className="h-8 w-8 text-yellow-500" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and hybrid work model"
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "Career Growth",
      description: "Clear career progression and leadership opportunities"
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Build the future of compliance technology with us
              </p>
            </div>

            {/* Why Join Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Why Join SSA?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Building2 className="h-10 w-10 text-blue-500" />,
                    title: "Industry Leader",
                    description: "Work with cutting-edge technology and shape the future of compliance"
                  },
                  {
                    icon: <Users2 className="h-10 w-10 text-purple-500" />,
                    title: "Great Culture",
                    description: "Join a diverse team of passionate professionals"
                  },
                  {
                    icon: <Rocket className="h-10 w-10 text-green-500" />,
                    title: "Growth Opportunities",
                    description: "Accelerate your career with continuous learning and development"
                  }
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl text-center"
                  >
                    <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">{reason.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Benefits & Perks</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 gradient-text">{benefit.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Open Positions</h2>
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 gradient-text">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 button-primary">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                      <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Don't see the right role?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Send us your resume and we'll keep you in mind for future opportunities
              </p>
              <button className="button-primary">
                Submit Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}