import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Users, BookOpen, FileText, Lock, Database, UserPlus, ArrowRight } from 'lucide-react';

interface TrainingCard {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  summary: string;
}

export default function Training() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const trainings: TrainingCard[] = [
    {
      id: 1,
      title: "Prevention of Workplace Violence",
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      description: "Learn to recognize and prevent workplace violence in all its forms.",
      summary: "This training focuses on recognizing and preventing workplace violence in all its forms, including physical, verbal, and psychological aggression. Learn about risk factors, warning signs, and de-escalation techniques."
    },
    {
      id: 2,
      title: "Anti-Harassment & Discrimination",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      description: "Comprehensive training on preventing harassment and discrimination.",
      summary: "Learn about different types of harassment and discrimination, your rights and responsibilities, and how to identify, prevent, and report inappropriate behavior. Foster a culture of inclusivity and respect."
    },
    {
      id: 3,
      title: "Conflict of Interest",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      description: "Understanding and managing potential conflicts of interest.",
      summary: "Learn what constitutes a conflict of interest, how to identify potential conflicts, and the importance of transparency. Navigate challenging situations ethically and maintain public trust."
    },
    {
      id: 4,
      title: "Insider Trading",
      icon: <FileText className="h-10 w-10 text-green-500" />,
      description: "Legal and ethical implications of insider trading.",
      summary: "Understand confidential information handling, prohibited trading activities, and reporting requirements. Protect company reputation and ensure compliance with regulations."
    },
    {
      id: 5,
      title: "FCPA - Foreign Corrupt Practices Act",
      icon: <BookOpen className="h-10 w-10 text-yellow-500" />,
      description: "Understanding FCPA and international business practices.",
      summary: "Learn about FCPA implications, prohibited activities like bribery, and record-keeping requirements. Ensure ethical business practices and comply with legal obligations."
    },
    {
      id: 6,
      title: "Code of Conduct",
      icon: <Shield className="h-10 w-10 text-indigo-500" />,
      description: "Core values and ethical principles for all employees.",
      summary: "Understand our core values, ethical principles, and expected behaviors. Learn about honesty, integrity, confidentiality, and compliance with applicable regulations."
    },
    {
      id: 7,
      title: "Data Privacy",
      icon: <Database className="h-10 w-10 text-cyan-500" />,
      description: "Handling sensitive information and compliance with privacy regulations.",
      summary: "Learn about handling sensitive data, security measures, access controls, and consent requirements. Protect customer data and maintain trust while ensuring compliance."
    },
    {
      id: 8,
      title: "POSH (Prevention of Sexual Harassment)",
      icon: <UserPlus className="h-10 w-10 text-rose-500" />,
      description: "Creating a safe and respectful workplace environment.",
      summary: "Address workplace harassment, understand reporting procedures, and promote zero tolerance. Create a safe and inclusive environment for all employees."
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text leading-tight">
                Training Programs
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive training solutions to build a compliant and ethical workplace
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {trainings.map((training) => (
                <div
                  key={training.id}
                  className="relative h-[400px] perspective-1000"
                  onClick={() => setFlippedCard(flippedCard === training.id ? null : training.id)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      rotateY: flippedCard === training.id ? 180 : 0
                    }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 w-full h-full preserve-3d cursor-pointer"
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="glass p-8 rounded-3xl h-full flex flex-col justify-between transform transition-transform duration-500 hover:scale-[1.02]">
                        <div>
                          <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl inline-block">
                            {training.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-4 gradient-text leading-tight min-h-[56px]">
                            {training.title}
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {training.description}
                          </p>
                        </div>
                        <button className="text-blue-600 dark:text-blue-400 flex items-center group">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="glass p-8 rounded-3xl h-full flex flex-col justify-between transform transition-transform duration-500 hover:scale-[1.02]">
                        <div>
                          <h3 className="text-xl font-bold mb-4 gradient-text leading-tight">
                            {training.title}
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {training.summary}
                          </p>
                        </div>
                        <button className="text-blue-600 dark:text-blue-400 flex items-center group">
                          Back to Overview
                          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button className="button-primary inline-flex items-center text-lg">
                Schedule Training Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}