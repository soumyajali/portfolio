import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ name, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, delay }}
      className="premium-card p-6 flex flex-col items-center justify-center text-center group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-secondarytext group-hover:text-white transition">
        {name}
      </h3>
    </motion.div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
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
    <section id="skills" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Technical Skills
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            Tools and technologies I use to build digital solutions.
          </p>
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
