import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Trophy, Zap } from 'lucide-react';
import { useState } from 'react';

const AchievementCard = ({ icon: Icon, title, description, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay }}
      className="premium-card p-6 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(255,255,255,0.1)] transition">
            <Icon className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-accent transition">{title}</h3>
            <span className="px-2 py-1 text-xs rounded-full bg-[rgba(255,255,255,0.05)] text-secondarytext border border-[rgba(255,255,255,0.08)]">
              {category}
            </span>
          </div>
          <p className="text-secondarytext text-sm">{description}</p>
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
    <section id="achievements" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Achievements & Milestones
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            A timeline of milestones and technical accomplishments.
          </p>
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
