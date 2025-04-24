import React from 'react';
import { motion } from 'framer-motion';
import { Award, Newspaper, BookOpen, Radio, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

export default function NewsAndMedia() {
  const sliderRef = React.useRef<Slider>(null);

  const news = [
    {
      type: "Award",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Best Compliance Solution Provider 2024",
      description: "Recognized for excellence in AI-driven compliance solutions",
      image: "https://images.unsplash.com/photo-1579447745419-e47f0f8c2736?auto=format&fit=crop&q=80",
      date: "March 2024"
    },
    {
      type: "Media",
      icon: <Newspaper className="h-8 w-8 text-blue-500" />,
      title: "Featured in Forbes: Revolutionizing Compliance",
      description: "How SSA is transforming regulatory compliance with AI",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80",
      date: "February 2024"
    },
    {
      type: "Book Launch",
      icon: <BookOpen className="h-8 w-8 text-emerald-500" />,
      title: "The Future of Compliance: AI-Driven Solutions",
      description: "A comprehensive guide to modern compliance strategies",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
      date: "January 2024"
    },
    {
      type: "Press",
      icon: <Radio className="h-8 w-8 text-purple-500" />,
      title: "SSA Launches Revolutionary Compliance Platform",
      description: "New AI-powered platform sets industry standards",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      date: "December 2023"
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-24 section-gradient-2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Latest News & Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with our latest news, awards, and publications
            </p>
          </div>

          <div className="relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {news.map((item, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl overflow-hidden h-[480px] relative group"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
                    </div>
                    
                    <div className="relative h-full p-8 flex flex-col justify-end">
                      <div className="mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-2xl inline-block w-fit">
                        {item.icon}
                      </div>
                      <div className="space-y-4">
                        <span className="text-sm font-medium text-gray-300">{item.date}</span>
                        <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                        <button className="flex items-center text-white group/btn">
                          Read More
                          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>

            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:scale-110 transition-transform z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:scale-110 transition-transform z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}