import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Video, Download, ArrowRight, Search } from 'lucide-react';

export default function KnowledgeBase() {
  const categories = [
    {
      title: "Documentation",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      items: [
        "Getting Started Guide",
        "Implementation Manuals",
        "Best Practices",
        "Compliance Checklists"
      ]
    },
    {
      title: "Video Tutorials",
      icon: <Video className="h-8 w-8 text-purple-500" />,
      items: [
        "Platform Overview",
        "Feature Walkthroughs",
        "Implementation Tips",
        "Case Studies"
      ]
    },
    {
      title: "Templates",
      icon: <Download className="h-8 w-8 text-green-500" />,
      items: [
        "Policy Templates",
        "Compliance Forms",
        "Audit Checklists",
        "Report Templates"
      ]
    },
    {
      title: "Learning Resources",
      icon: <Book className="h-8 w-8 text-orange-500" />,
      items: [
        "Online Courses",
        "Certification Programs",
        "Webinar Recordings",
        "Industry Updates"
      ]
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Knowledge Base
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Access comprehensive resources and documentation for compliance management
              </p>
              
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search knowledge base..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h2>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Need More Help?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <button className="button-primary">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}