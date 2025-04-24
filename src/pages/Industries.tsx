import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Car, 
  ShoppingBag, 
  Factory, 
  HeadphonesIcon, 
  Monitor,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    {
      icon: <Building2 className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Fintech: Secure Remote Teams",
      description: "Ensuring compliance and security for modern financial technology companies.",
      benefits: [
        "Stay ahead with automated compliance tracking for labor laws and regulatory changes",
        "Ensure data privacy and employment compliance across borders",
        "Simplify remote work management and reduce risks"
      ]
    },
    {
      icon: <Car className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Automotive Industry: Streamline HR Practices",
      description: "Comprehensive compliance solutions for automotive manufacturing and operations.",
      benefits: [
        "Manage compliance for diverse labor standards, safety protocols, and shift regulations",
        "Stay legally compliant across production and assembly locations",
        "Enhance operational efficiency with our expert support"
      ]
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "E-Commerce: Complex Labor Regulations Made Simple",
      description: "Simplified compliance management for digital retail operations.",
      benefits: [
        "Ensure real-time compliance with shifting labor regulations",
        "Reduce the risk of violations and enhance operational efficiency across large workforces",
        "Simplify flexible working hours, part-time employees, and seasonal staff management"
      ]
    },
    {
      icon: <Factory className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Manufacturing: Rigorous Safety Standards Ensured",
      description: "Comprehensive compliance solutions for manufacturing operations.",
      benefits: [
        "Monitor compliance for workforce management, occupational health, and employee training",
        "Reduce risks of penalties and enhance workforce safety",
        "Support rigorous regulatory adherence in a fast-paced industry"
      ]
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Service Industry: Adaptable Workforce Solutions",
      description: "Flexible compliance management for service-oriented businesses.",
      benefits: [
        "Monitor compliance for diverse work schedules, contract types, and regional employment standards",
        "Maintain a legally compliant and adaptable workforce",
        "Stay ahead with expert support for your unique needs"
      ]
    },
    {
      icon: <Monitor className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "IT & ITES: Distributed Teams Made Secure",
      description: "Specialized compliance solutions for technology companies.",
      benefits: [
        "Ensure compliance with employee contractual terms, overtime regulations, and remote work standards",
        "Reduce risks of non-compliance in a fast-paced industry",
        "Simplify distributed team management and enhance operational efficiency"
      ]
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
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                At SSA Compliance Services LLP, we understand that every industry has its unique set of challenges when it comes to labor laws and regulatory compliance. That's why we've designed our solutions to cater to the specific needs of various industries.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl card-hover"
                >
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{industry.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{industry.description}</p>
                  <ul className="space-y-4">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-emerald-500" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Ready to Transform Your Industry's Compliance?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Let's discuss how we can help you stay ahead of regulatory requirements
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <Link to="/consulting" className="button-primary">
                  Schedule Consultation
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