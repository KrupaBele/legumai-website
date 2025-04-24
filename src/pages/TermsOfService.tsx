import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, AlertTriangle, Clock, Mail } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: <Scale className="h-8 w-8 text-blue-500" />,
      title: "Terms of Use",
      content: [
        "By accessing and using SSA Compliance's services, you agree to be bound by these terms.",
        "You must be at least 18 years old to use our services.",
        "You are responsible for maintaining the confidentiality of your account.",
        "You agree to provide accurate and complete information.",
        "Unauthorized use of our services is strictly prohibited."
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Service License",
      content: [
        "We grant you a limited, non-exclusive, non-transferable license to use our services.",
        "You may not modify, distribute, or create derivative works.",
        "All intellectual property rights remain with SSA Compliance.",
        "You may not use our services for unauthorized purposes.",
        "License termination may occur upon violation of terms."
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "User Obligations",
      content: [
        "Comply with all applicable laws and regulations",
        "Maintain accurate and up-to-date information",
        "Protect account credentials and access",
        "Report unauthorized access immediately",
        "Use services in accordance with acceptable use policy"
      ]
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Limitations of Liability",
      content: [
        "Services provided 'as is' without warranties",
        "No guarantee of uninterrupted or error-free service",
        "Limitation of liability for damages",
        "Exclusion of certain warranties",
        "Force majeure provisions"
      ]
    }
  ];

  const lastUpdated = "March 15, 2024";

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
              <div className="flex items-center justify-center mt-4 text-gray-600 dark:text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                Last Updated: {lastUpdated}
              </div>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold gradient-text">{section.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <div className="glass p-8 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">legal@ssacompliance.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}