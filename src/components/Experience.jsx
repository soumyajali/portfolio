import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const ExperienceCard = ({ title, description, type, certificate, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, delay }}
      className="premium-card p-6 group flex gap-4"
    >

      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(255,255,255,0.1)] transition"
        >
          {type === 'hackathon' ? (
            <span className="text-xl">🏆</span>
          ) : type === 'internship' ? (
            <span className="text-xl">💼</span>
          ) : type === 'Workshop' ? (
            <span className="text-xl">💡</span>
          ) : type === 'volunteer' ? (
            <span className="text-xl">🤝</span>
          ) : (
            <Briefcase className="text-secondarytext" size={20} />
          )}
        </motion.div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-secondarytext text-sm mb-4 flex items-center gap-2">
          <CheckCircle size={14} className="text-accent" />
          {description}
        </p>
        <div className="flex items-center gap-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-secondarytext text-xs font-semibold border border-[rgba(255,255,255,0.08)]">
            {type === 'hackathon'
              ? 'Competition'
              : type === 'internship'
                ? 'Internship'
                : type === 'Workshop'
                  ? 'Workshop'
                  : type === 'volunteer'
                    ? 'Volunteer'
                  : 'Work'}
          </div>
          {certificate && (
            <motion.a
              href={certificate}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-accent font-semibold border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)] transition"
            >
              📄 View Certificate
            </motion.a>
          )}
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
    {
      title: 'Cyber-Security Workshop',
      description: 'Participant in Cryptography and Network Security workshop',
      type: 'Workshop',
    },
    {
      title: 'IEEE WIE VOLUNTEER',
      description: 'Actively volunteering for IEEE Women in Engineering initiatives',
      type: 'volunteer',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Experience
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            Professional roles, internships, and hackathons.
          </p>
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
          className="mt-12 p-6 premium-card flex flex-col items-center justify-center text-center"
        >
          <p className="text-secondarytext text-base font-medium max-w-2xl">
            <span className="font-semibold text-white">
              Actively seeking Software Developer opportunities
            </span>{' '}
            with a focus on Java, .NET, and backend development. Open to internships and full-time roles where I can apply my technical skills, solve real-world problems, and grow as a software engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
