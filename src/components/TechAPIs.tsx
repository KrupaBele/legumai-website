import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Lock, RefreshCw, Zap } from "lucide-react";

export default function TechAPIs() {
  const apis = [
    {
      icon: <Database className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Advisory & Interpretations under Labour & Employment Law",
      description:
        "Receive expert guidance and clear interpretations of complex labor regulations, ensuring your business stays compliant and understands legal requirements.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Monthly Compliance Management under S&E",
      description:
        "Automate monthly compliance tasks for labor law management, including register generation and real-time status updates.",
    },
    {
      icon: <Code className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Periodic Filing Returns under S&E",
      description:
        "Streamline periodic filings under Shop & Establishment laws with automated processes and deadline tracking.",
    },
    {
      icon: <Lock className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Audits & Risk Mitigation under S&E",
      description:
        "Simplify the process of obtaining and renewing business registrations and licenses, ensuring timely compliance.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Registrations & Licenses",
      description: "Automated data synchronization across all platforms",
    },
    {
      icon: <Zap className="h-8 w-8 text-gray-800 dark:text-white" />,
      name: "Notice Closures",
      description:
        "Efficiently manage and resolve legal notices by tracking responses and ensuring timely submissions.",
    },
  ];

  return (
    <section className="py-24 section-gradient-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-6 gradient-text">
            Seamless Legal & Compliance Transformation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Empowering Clients with AI-Driven Automation
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
              <h3 className="text-xl font-medium mb-4 gradient-text">
                {api.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {api.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
