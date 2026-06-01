import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
          >
  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
  I'm a motivated <span className="text-cyan-400 font-bold">Computer Science Engineering student</span> with a strong interest in <span className="text-purple-400 font-bold">web development</span>, programming, and modern technologies. Currently pursuing my engineering degree at Alvas Institute of Engineering and Technology.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
  I enjoy building <span className="text-cyan-400 font-bold">responsive websites</span>, working on creative projects, and learning new technologies like <span className="text-pink-400 font-bold">Artificial Intelligence and Machine Learning</span>. I am passionate about creating simple, user-friendly, and visually appealing applications.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
  I have worked on projects like <span className="text-cyan-400 font-bold">Digital Outpass Generator</span> and <span className="text-purple-400 font-bold">Digital Manuscript Organizer</span>, where I explored React, JavaScript, databases, and AI integration while improving my practical development skills.
</p>

<p className="text-gray-300 text-lg leading-relaxed font-medium">
  Along with academics, I completed an <span className="text-pink-400 font-bold">Industrial Internship</span> at India Nippon Electricals Ltd and continue enhancing my technical knowledge through projects, certifications, and self-learning.
</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-purple-500/20">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="text-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/60 transition">
                <p className="text-4xl md:text-5xl font-black text-cyan-400">3+</p>
                <p className="text-gray-400 text-base font-medium mt-3">Projects Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                className="text-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/60 transition">
                <p className="text-4xl md:text-5xl font-black text-purple-400">7.7</p>
                <p className="text-gray-400 text-base font-medium mt-3">CGPA Achieved</p>
              </motion.div>

              <motion.div
  whileHover={{ scale: 1.08 }}
  className="text-center bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-xl p-4 border border-pink-500/20 hover:border-pink-500/60 transition"
>
  <p className="text-3xl md:text-4xl font-bold text-pink-400">2</p>
  <p className="text-gray-400 text-base font-medium mt-3">Internships</p>
</motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
