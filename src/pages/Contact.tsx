import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contact() {
  const offices = [
    {
      city: "Mumbai",
      address: "One World Center, Lower Parel",
      phone: "+91 22 4123 4567",
      email: "mumbai@ssacompliance.com"
    },
    {
      city: "Delhi",
      address: "Cyber City, Gurugram",
      phone: "+91 124 4123 4567",
      email: "delhi@ssacompliance.com"
    },
    {
      city: "Bangalore",
      address: "Manyata Tech Park, Hebbal",
      phone: "+91 80 4123 4567",
      email: "bangalore@ssacompliance.com"
    },
    {
      city: "Singapore",
      address: "Marina Bay Financial Centre",
      phone: "+65 6123 4567",
      email: "singapore@ssacompliance.com"
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Get in touch with our experts for all your compliance needs
              </p>
            </div>

            {/* Contact Form */}
            <div className="mb-16">
              <div className="glass p-8 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Send us a message</h2>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                          placeholder="Your message..."
                        />
                      </div>
                      <button type="submit" className="button-primary w-full">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Get in touch</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                      Have questions about our services? Our team is here to help. Contact us through any of the following channels:
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Globe className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Global Presence</h3>
                          <p className="text-gray-700 dark:text-gray-300">Serving clients in 28+ countries</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">24/7 Support</h3>
                          <p className="text-gray-700 dark:text-gray-300">Call us anytime: +91 1800 123 4567</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Email Support</h3>
                          <p className="text-gray-700 dark:text-gray-300">info@ssacompliance.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Our Offices</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl inline-block">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 gradient-text">{office.city}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{office.address}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center text-gray-600 dark:text-gray-400">
                        <Phone className="h-4 w-4 mr-2" />
                        {office.phone}
                      </p>
                      <p className="flex items-center text-gray-600 dark:text-gray-400">
                        <Mail className="h-4 w-4 mr-2" />
                        {office.email}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}