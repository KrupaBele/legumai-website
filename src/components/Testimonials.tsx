import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director, Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "SSA Compliance has transformed our HR operations. Their AI-driven solutions have reduced our compliance workload by 70%."
    },
    {
      name: "Michael Chang",
      role: "CEO, Global Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The level of expertise and technological innovation at SSA is unmatched. They're not just a service provider, but a strategic partner."
    },
    {
      name: "Priya Patel",
      role: "Compliance Manager, Enterprise Inc",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote: "Their automated compliance monitoring has helped us maintain 100% compliance across multiple jurisdictions."
    }
  ];

  return (
    <section className="py-24 section-gradient-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-6 gradient-text">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Success stories from industry leaders who trust SSA Compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <Quote className="h-8 w-8 text-blue-500 mb-6" />
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}