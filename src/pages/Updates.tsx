import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, ArrowRight, Tag, FileText } from 'lucide-react';

export default function Updates() {
  const updates = [
    {
      category: "Product Updates",
      date: "March 15, 2024",
      title: "New AI-Powered Compliance Monitoring Features",
      description: "Enhanced real-time monitoring capabilities with advanced AI algorithms for better risk detection.",
      tag: "Feature Release"
    },
    {
      category: "Regulatory Updates",
      date: "March 12, 2024",
      title: "Updated Labor Law Guidelines for Remote Work",
      description: "New compliance requirements for companies with remote workforce across multiple states.",
      tag: "Regulatory Change"
    },
    {
      category: "Platform Updates",
      date: "March 10, 2024",
      title: "Enhanced Dashboard Analytics",
      description: "New visualization tools and reporting features for better compliance insights.",
      tag: "Enhancement"
    },
    {
      category: "Security Updates",
      date: "March 8, 2024",
      title: "Advanced Data Protection Features",
      description: "Implementation of additional security measures for enhanced data protection.",
      tag: "Security"
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Latest Updates
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Stay informed about the latest product updates, regulatory changes, and platform enhancements
              </p>
            </div>

            <div className="space-y-8">
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {update.date}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {update.tag}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 gradient-text">{update.title}</h2>
                      <p className="text-gray-700 dark:text-gray-300">{update.description}</p>
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap">
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="glass p-8 rounded-3xl">
                <Bell className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Subscribe to our newsletter to receive the latest updates directly in your inbox
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="button-primary whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}