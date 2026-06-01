import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Trophy, Zap } from 'lucide-react';
import { useState } from 'react';

const AchievementCard = ({ icon: Icon, title, description, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition backdrop-blur-sm group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition">
            <Icon className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
            <span className="px-2 py-1 text-xs rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/50">
              {category}
            </span>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const achievements = [
    {
      icon: Trophy,
      title: 'AI Vision System v2.0',
      description: 'Developed an ultra-advanced real-time detection and analysis platform with 4000+ lines of production-ready Python code.',
      category: 'Project',
    },
    {
      icon: Zap,
      title: 'Multi-threaded Architecture',
      description: 'Implemented concurrent frame processing with YOLOv8, MediaPipe, and face recognition integration.',
      category: 'Technical',
    },
    {
      icon: Star,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end solutions from backend architecture to professional UI/UX.',
      category: 'Skills',
    },
    {
      icon: Trophy,
      title: 'Problem Solving',
      description: 'Consistently deliver optimized solutions for complex technical challenges with 80+ object detection.',
      category: 'Achievement',
    },
    {
      icon: Zap,
      title: 'API Documentation',
      description: 'Created comprehensive API documentation with 2500+ lines of detailed guides and examples.',
      category: 'Documentation',
    },
    {
      icon: Star,
      title: 'Open Source Contributions',
      description: 'Developed production-grade solutions leveraging YOLOv8, PyTorch, and advanced deep learning frameworks.',
      category: 'Contribution',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 md:px-6 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Milestones
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              {...achievement}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
