import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, Building, ArrowRight } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "20+ years of experience in compliance and regulatory affairs"
    },
    {
      name: "Priya Sharma",
      role: "Chief Legal Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Former advisor to multiple Fortune 500 companies"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "Expert in AI and automation solutions"
    },
    {
      name: "Sarah Williams",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Specialized in process optimization and compliance frameworks"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to revolutionize compliance management"
    },
    {
      year: "2017",
      title: "AI Integration",
      description: "Launched first AI-powered compliance solution"
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to 15+ countries"
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Named Top Compliance Solution Provider"
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Received Global Innovation Award in RegTech"
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
                About SSA Compliance
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Leading the future of compliance management with innovative solutions and expert guidance
              </p>
            </div>

            {/* Company Overview */}
            <div className="mb-16">
              <div className="glass p-8 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Founded in 2015, SSA Compliance has grown from a small consultancy to a global leader in compliance solutions. Our journey began with a simple mission: to make compliance management simpler, smarter, and more efficient for businesses of all sizes.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Today, we serve over 5000 clients across 28 countries, helping them navigate complex regulatory landscapes with our innovative AI-powered solutions and expert guidance.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                      alt="Modern office building"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Target className="h-10 w-10 text-blue-500" />,
                    title: "Excellence",
                    description: "We strive for excellence in everything we do, delivering the highest quality solutions to our clients."
                  },
                  {
                    icon: <Users className="h-10 w-10 text-purple-500" />,
                    title: "Collaboration",
                    description: "We believe in the power of teamwork and partnership with our clients."
                  },
                  {
                    icon: <Globe className="h-10 w-10 text-green-500" />,
                    title: "Innovation",
                    description: "We continuously innovate to stay ahead of evolving compliance needs."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl text-center"
                  >
                    <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">{value.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div className="flex-1 p-6">
                        <div className="glass p-6 rounded-2xl">
                          <h3 className="text-2xl font-bold mb-2 gradient-text">{milestone.year}</h3>
                          <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{milestone.title}</h4>
                          <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-blue-500 rounded-full z-10 mx-4"></div>
                      <div className="flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-3xl text-center"
                  >
                    <div className="mb-4 relative w-32 h-32 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 gradient-text">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Global Presence */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Global Presence</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Serving clients across 28 countries with offices in major business hubs
              </p>
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="Global Network"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-center space-x-8">
                    {['Americas', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                      <div key={index} className="text-white">
                        <p className="font-bold">{region}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}