import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, Globe, Mail, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Company information and business details",
        "Usage data and analytics",
        "Technical data (IP address, browser type, device information)",
        "Compliance-related documentation and records"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-500" />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our compliance management services",
        "Notify you about changes to our services",
        "Provide customer support and respond to inquiries",
        "Monitor usage of our services",
        "Detect, prevent, and address technical issues"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: "Data Storage and Security",
      content: [
        "Data is stored in secure, ISO-certified data centers",
        "Implementation of industry-standard security measures",
        "Regular security audits and assessments",
        "Encryption of data in transit and at rest",
        "Access controls and authentication mechanisms"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "International Data Transfers",
      content: [
        "Compliance with international data protection laws",
        "Data transfer agreements and safeguards",
        "Regional data storage options",
        "Transparency in data movement",
        "Protection of cross-border data transfers"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">privacy@ssacompliance.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">www.ssacompliance.com/privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}