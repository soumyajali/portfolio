import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ name, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
      }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-6 flex flex-col items-center justify-center text-center group hover:border-cyan-500/60 transition backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20 duration-300"
    >
      <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-300 transition">
        {name}
      </h3>
    </motion.div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    { name: 'C', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML', icon: '🏷️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'AI/ML', icon: '🤖' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
