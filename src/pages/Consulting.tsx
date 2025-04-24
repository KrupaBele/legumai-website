import React from 'react';
import { Users2, FileCheck2, Scale, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consulting() {
  const services = [
    {
      icon: <Users2 className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "HR Advisory",
      description: "Strategic HR consulting for organizational growth and compliance excellence."
    },
    {
      icon: <FileCheck2 className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Compliance Consulting",
      description: "Navigate complex regulatory requirements with expert guidance and support."
    },
    {
      icon: <Scale className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Legal Advisory",
      description: "Comprehensive legal guidance for labor law compliance and risk management."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Training Programs",
      description: "Customized training solutions to build a compliance-aware workforce."
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Expert Consulting Services
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Partner with our experts for comprehensive compliance solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="glass p-8 rounded-3xl card-hover">
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/resources" className="button-primary inline-flex">
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}