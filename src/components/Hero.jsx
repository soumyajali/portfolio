import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, BookOpen, Mouse } from 'lucide-react';
import { TypingEffect } from './TypingEffect';

const Particle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-[rgba(255,255,255,0.15)] rounded-full"
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [0, -100],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export const Hero = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Subtle radial background to match the dark brown glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E2A27] via-background to-background opacity-60 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar Circle */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-1 border border-[rgba(255,255,255,0.1)] shadow-2xl"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 107, 0, 0.2)',
                '0 0 40px rgba(255, 107, 0, 0.4)',
                '0 0 20px rgba(255, 107, 0, 0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold text-white tracking-tighter">
              SB
            </div>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-white">
            SOWMYA BASAPPA
          </span>
        </motion.h1>

        {/* Role with Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="h-20 md:h-24 flex items-center justify-center"
        >
          <p className="text-2xl md:text-4xl font-semibold text-secondarytext">
            <TypingEffect text="Web Development | Building Innovative Solutions" speed={80} />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-secondarytext mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences with modern technologies. Passionate about AI, web development, and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://github.com/soumyajali"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <Code size={20} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sowmya-b-520b87351/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <Briefcase size={20} /> LinkedIn
          </a>

          <a
            href="mailto:www.soumya118@gmail.com"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={20} /> Contact
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Mouse className="text-accent animate-pulse" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
