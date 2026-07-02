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
    <section id="about" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 w-full flex flex-col items-center justify-center text-center">
            <h2 className="section-title text-center w-full">
              About Me
            </h2>
            <p className="section-subtitle text-center mx-auto w-full">
              My background, experience, and what drives me.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="premium-card p-8 md:p-12"
          >
            <p className="text-secondarytext text-lg leading-relaxed mb-6 font-medium">
              I'm a motivated <span className="text-white font-bold">Computer Science Engineering student</span> with a strong interest in <span className="text-white font-bold">web development</span>, programming, and modern technologies. Currently pursuing my engineering degree at Alvas Institute of Engineering and Technology.
            </p>

            <p className="text-secondarytext text-lg leading-relaxed mb-6 font-medium">
              I enjoy building <span className="text-white font-bold">responsive websites</span>, working on creative projects, and learning new technologies like <span className="text-white font-bold">Artificial Intelligence and Machine Learning</span>. I am passionate about creating simple, user-friendly, and visually appealing applications.
            </p>

            <p className="text-secondarytext text-lg leading-relaxed mb-6 font-medium">
              I have worked on projects like <span className="text-white font-bold">Digital Outpass Generator</span> and <span className="text-white font-bold">Digital Manuscript Organizer</span>, where I explored React, JavaScript, databases, and AI integration while improving my practical development skills.
            </p>

            <p className="text-secondarytext text-lg leading-relaxed font-medium">
              Along with academics, I completed an <span className="text-white font-bold">Industrial Internship</span> at India Nippon Electricals Ltd and continue enhancing my technical knowledge through projects, certifications, and self-learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[rgba(255,255,255,0.08)]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-[rgba(255,255,255,0.02)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] transition">
                <p className="text-4xl md:text-5xl font-bold text-white">3+</p>
                <p className="text-secondarytext text-sm font-medium mt-3">Projects Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-[rgba(255,255,255,0.02)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] transition">
                <p className="text-4xl md:text-5xl font-bold text-white">7.69</p>
                <p className="text-secondarytext text-sm font-medium mt-3">CGPA Achieved</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-[rgba(255,255,255,0.02)] rounded-xl p-4 border border-[rgba(255,255,255,0.08)] transition">
                <p className="text-3xl md:text-4xl font-bold text-white">2</p>
                <p className="text-secondarytext text-sm font-medium mt-3">Internships</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
