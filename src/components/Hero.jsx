import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, BookOpen, Mouse } from 'lucide-react';
import { TypingEffect } from './TypingEffect';

const Particle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-500 rounded-full"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl" />

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
            className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl shadow-purple-500/60 border border-cyan-300/20"
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.5)',
                '0 0 20px rgba(34, 211, 238, 0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-900 rounded-full flex items-center justify-center text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              SB
            </div>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SOWMYA BASAPPA
          </span>
        </motion.h1>

        {/* Role with Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="h-20 md:h-24 flex items-center justify-center"
        >
          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            <TypingEffect text="Web Development | Building Innovative Solutions" speed={80} />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Crafting exceptional digital experiences with modern technologies. Passionate about AI, web development, and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="https://github.com/soumyajali"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/60 border border-cyan-300/30 hover:border-cyan-300/60 transition text-lg"
          >
            <Code size={20} /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sowmya-b-520b87351/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 border border-purple-300/30 hover:border-purple-300/60 transition text-lg"
          >
            <Briefcase size={20} /> LinkedIn
          </motion.a>

          <motion.a
            href="mailto:www.soumya118@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/60 border border-pink-300/30 hover:border-pink-300/60 transition text-lg"
          >
            <Mail size={20} /> Contact
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Mouse className="text-cyan-400 animate-pulse" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
