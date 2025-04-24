import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, AlertTriangle, Clock, Mail } from 'lucide-react';

export default function CookiePolicy() {
  const sections = [
    {
      icon: <Cookie className="h-8 w-8 text-blue-500" />,
      title: "What Are Cookies",
      content: [
        "Small text files stored on your device",
        "Help remember your preferences",
        "Track website usage and performance",
        "Enable certain website functionalities",
        "Improve your browsing experience"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Types of Cookies We Use",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand usage",
        "Preference cookies to remember settings",
        "Marketing cookies for targeted advertising",
        "Third-party cookies from our partners"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Cookie Management",
      content: [
        "Control cookie settings in your browser",
        "Option to reject non-essential cookies",
        "Regular cookie audit and cleanup",
        "Transparent cookie usage policy",
        "Easy opt-out mechanisms"
      ]
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Cookie Security",
      content: [
        "Secure storage and transmission",
        "Regular security updates",
        "Compliance with privacy laws",
        "Protection of user data",
        "Third-party cookie restrictions"
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
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Understanding how and why we use cookies on our website.
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
                <h2 className="text-2xl font-bold mb-6 gradient-text">Cookie Preferences</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  You can manage your cookie preferences at any time through your browser settings.
                </p>
                <button className="button-primary">
                  Manage Cookie Settings
                </button>
              </div>

              <div className="glass p-8 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  If you have any questions about our Cookie Policy, please contact us:
                </p>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">privacy@ssacompliance.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}