import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock, RefreshCw, Zap } from 'lucide-react';

export default function TechAPIs() {
  const apis = [
    {
      icon: <Database className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "HRMS Integration",
      description: "Connect with popular HRMS systems including Workday, SAP, and Oracle"
    },
    {
      icon: <Cloud className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Cloud Services",
      description: "AWS, Azure, and GCP integration for scalable compliance solutions"
    },
    {
      icon: <Code className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "REST APIs",
      description: "Comprehensive API suite for seamless system integration"
    },
    {
      icon: <Lock className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Security",
      description: "Enterprise-grade security with OAuth 2.0 and encryption"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Real-time Sync",
      description: "Automated data synchronization across all platforms"
    },
    {
      icon: <Zap className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Webhooks",
      description: "Event-driven integration for real-time updates"
    }
  ];

  return (
    <section className="py-24 section-gradient-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-6 gradient-text">Integration Ecosystem</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Seamlessly connect with your existing technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="api-card"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl inline-block">
                {api.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 gradient-text">{api.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{api.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}