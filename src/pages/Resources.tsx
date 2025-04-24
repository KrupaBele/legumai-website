import React from 'react';
import { FileText, Download, Video, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      icon: <FileText className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Whitepapers",
      description: "In-depth analysis and insights on the latest compliance trends and best practices."
    },
    {
      icon: <Download className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Templates",
      description: "Ready-to-use compliance document templates and implementation guides."
    },
    {
      icon: <Video className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Webinars",
      description: "Educational webinars featuring industry experts and compliance specialists."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-gray-800 dark:text-white" />,
      title: "Guides",
      description: "Comprehensive step-by-step guides for effective compliance management."
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Knowledge Resources
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive library of compliance resources and tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {resources.map((resource, index) => (
                <div key={index} className="glass p-8 rounded-3xl card-hover">
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{resource.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{resource.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/blog" className="button-primary inline-flex">
                Read Our Blog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}