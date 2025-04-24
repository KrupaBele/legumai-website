import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'General',
    'Platform',
    'Compliance',
    'Security',
    'Pricing'
  ];

  const faqs = {
    General: [
      {
        question: "What is SSA Compliance?",
        answer: "SSA Compliance is a leading provider of AI-powered compliance management solutions, helping organizations navigate complex labor laws and regulatory requirements across India."
      },
      {
        question: "How can SSA Compliance help my organization?",
        answer: "We provide comprehensive compliance solutions including automated monitoring, risk assessment, documentation management, and expert advisory services to ensure your organization maintains 100% compliance with labor laws."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including IT/ITES, Manufacturing, Financial Services, Retail, and more. Our solutions are customized to meet industry-specific compliance requirements."
      }
    ],
    Platform: [
      {
        question: "Is the platform cloud-based?",
        answer: "Yes, our platform is cloud-based and accessible from any device with an internet connection. We ensure high availability and security of your data."
      },
      {
        question: "How often is the platform updated?",
        answer: "We regularly update our platform with new features and regulatory changes. Major updates are released quarterly, while critical updates are implemented immediately."
      }
    ],
    Compliance: [
      {
        question: "How do you handle regulatory updates?",
        answer: "Our team of legal experts continuously monitors regulatory changes. Updates are automatically reflected in our platform, and clients are notified of relevant changes affecting their operations."
      },
      {
        question: "What compliance training do you provide?",
        answer: "We offer comprehensive training programs including POSH, anti-harassment, ethics, and industry-specific compliance training. All training is customizable to your organization's needs."
      }
    ],
    Security: [
      {
        question: "How do you ensure data security?",
        answer: "We implement enterprise-grade security measures including encryption, access controls, and regular security audits. Our platform complies with global security standards."
      },
      {
        question: "Where is our data stored?",
        answer: "Data is stored in secure, ISO-certified data centers within India, ensuring compliance with data localization requirements."
      }
    ],
    Pricing: [
      {
        question: "What are your pricing plans?",
        answer: "We offer flexible pricing plans based on organization size and requirements. Contact our sales team for a customized quote."
      },
      {
        question: "Do you offer a trial period?",
        answer: "Yes, we offer a 30-day trial period for organizations to evaluate our platform and services."
      }
    ]
  };

  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    const filtered = questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our platform and services
              </p>
              
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-xl transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs[activeCategory]?.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="glass p-8 rounded-3xl">
                <MessageSquare className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 gradient-text">Still Have Questions?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Can't find what you're looking for? Our support team is ready to help.
                </p>
                <button className="button-primary">
                  Contact Support
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}