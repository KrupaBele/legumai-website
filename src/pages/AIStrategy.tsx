import React from 'react';
import { Brain, Cpu, Network, Lightbulb, ArrowRight, Shield, FileCheck, Database, Bot, BarChart as ChartBar, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AIStrategy() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Intelligent Document Processing",
      description: "Advanced OCR and NLP to automatically extract, classify, and validate compliance documents with 99.9% accuracy."
    },
    {
      icon: <Shield className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Automated Risk Assessment",
      description: "Real-time risk monitoring and predictive analytics to identify potential compliance issues before they occur."
    },
    {
      icon: <Database className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Smart Data Management",
      description: "Centralized data repository with AI-powered categorization and instant retrieval capabilities."
    },
    {
      icon: <Bot className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "AI Compliance Assistant",
      description: "24/7 virtual assistant providing instant answers to compliance queries and regulatory guidance."
    }
  ];

  const benefits = [
    {
      icon: <ChartBar className="h-8 w-8 text-gray-800 dark:text-white" />,
      title: "95% Reduction in Processing Time",
      description: "Automate routine compliance tasks and documentation processing."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-gray-800 dark:text-white" />,
      title: "99.9% Accuracy Rate",
      description: "AI-powered validation ensures precise compliance documentation."
    },
    {
      icon: <Zap className="h-8 w-8 text-gray-800 dark:text-white" />,
      title: "Real-time Monitoring",
      description: "Instant alerts and notifications for compliance updates."
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
                AI-Powered Compliance Strategy
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your compliance operations with our cutting-edge AI solutions that automate processes, reduce risks, and ensure 100% regulatory compliance.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl card-hover"
                >
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 gradient-text">
                  Measurable Benefits
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our AI solutions deliver tangible results for your compliance operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl text-center card-hover"
                  >
                    <div className="mb-6 p-4 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl inline-block">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 gradient-text">{benefit.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Compliance Automation Section */}
            <div className="glass p-8 rounded-3xl mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">
                    Intelligent Compliance Automation
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Automated document processing and validation",
                      "Real-time compliance monitoring and alerts",
                      "Smart workflows with adaptive learning",
                      "Predictive analytics for risk assessment",
                      "Automated reporting and documentation"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="AI Technology"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Ready to Transform Your Compliance Operations?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Schedule a demo to see our AI-powered compliance solutions in action
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <Link to="/consulting" className="button-primary">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/resources" className="button-secondary">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}