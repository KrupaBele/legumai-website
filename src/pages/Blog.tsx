import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogs = [
    {
      title: "The Future of AI in Compliance Management",
      excerpt: "Explore how artificial intelligence is revolutionizing compliance operations and transforming the way organizations manage their regulatory obligations.",
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Understanding Labor Laws Across SEA Region",
      excerpt: "A comprehensive guide to navigating the complex landscape of labor laws in Southeast Asia, with insights on compliance best practices.",
      date: "March 12, 2024",
      author: "Adv. Rajesh Kumar",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
    },
    {
      title: "Best Practices for POSH Implementation",
      excerpt: "Essential guidelines for implementing Prevention of Sexual Harassment (POSH) policies effectively in your organization.",
      date: "March 10, 2024",
      author: "Emma Thompson",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Transformation in HR Compliance",
      excerpt: "How digital tools and technologies are revolutionizing HR compliance management and improving efficiency.",
      date: "March 8, 2024",
      author: "Michael Chang",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Latest Insights & Updates
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Stay informed with the latest compliance news and expert analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <div key={index} className="glass p-8 rounded-3xl card-hover relative overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-10"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blog.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blog.author}
                      </span>
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">{blog.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{blog.excerpt}</p>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/" className="button-primary inline-flex">
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}