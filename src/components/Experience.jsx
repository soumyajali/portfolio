import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const ExperienceCard = ({ title, description, type, certificate, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg"
          >
            {type === 'hackathon' ? (
              <span className="text-2xl">🏆</span>
            ) : type === 'internship' ? (
              <span className="text-2xl">💼</span>
            ) : (
              <Briefcase className="text-white" size={28} />
            )}
          </motion.div>
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">{title}</h3>
          <p className="text-gray-400 text-base mb-4 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            {description}
          </p>
          <div className="flex items-center gap-3">
            <div className="inline-block px-3 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold border border-purple-500/30">
              {type === 'hackathon'
                ? 'Competition'
                : type === 'internship'
                ? 'Internship'
                : 'Work'}
            </div>
            {certificate && (
              <motion.a
                href={certificate}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-sm px-3 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 hover:border-cyan-500/70 hover:bg-cyan-500/30 transition"
              >
                📄 View Certificate
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      title: 'Cognizant Technoverse Hackathon 2026',
      description: 'Certificate of appreciation for participation in Cognizant Technoverse Hackathon 2026',
      type: 'hackathon',
    },
    {
      title: 'Code for Innovex National NSS Hackathon',
      description: 'Participant in prestigious national hackathon competition',
      type: 'hackathon',
    },
    {
      title: 'Electronics Intern',
      institution: 'Indian Nippon Electrical Limited',
      description: 'Gained hands-on experience in electronics and embedded systems',
      type: 'internship',
    },
    {
      title: 'AI/ML Internship',
      description: '3 months intensive program focused on machine learning and AI applications',
      type: 'internship',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} {...exp} delay={index * 0.15} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl"
        >
          <p className="text-gray-300 text-center text-lg font-medium">
            <span className="font-bold text-cyan-300">
              Actively seeking opportunities
            </span>{' '}
            in full-stack development, AI/ML, and innovative tech roles. Open to internships and placements in dynamic organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
