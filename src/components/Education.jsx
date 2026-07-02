import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const EducationCard = ({ degree, institution, duration, cgpa, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, delay }}
      className="premium-card p-6 relative flex gap-4"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
          <GraduationCap className="text-white" size={24} />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-1">{degree}</h3>
        <p className="text-secondarytext font-medium text-sm mb-2">{institution}</p>
        <p className="text-sm text-secondarytext">{duration}</p>
        <p className="text-sm text-accent font-semibold mt-2">CGPA: {cgpa}</p>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ title, link, delay }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay }}
      className="premium-card p-6 flex items-center gap-4 group"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(255,255,255,0.1)] transition">
          <Award className="text-white" size={24} />
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-white font-medium text-sm group-hover:text-accent transition">{title}</p>
      </div>
    </motion.a>
  );
};

export const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const education = [
    {
      degree: 'BE Computer Science',
      institution: 'Alvas Institute of Engineering and Technology',
      duration: '2024 – Present',
      cgpa: '7.69',
    },
    {
      degree: 'Diploma CSE',
      institution: 'SCKGPT Bankapur',
      duration: '2021 – 2024',
      cgpa: '8.41',
    },
    {
      degree: 'SSLC',
      institution: 'Saint Paul Guttal',
      duration: '2021',
      cgpa: '91.68%',
    },
  ];

  const certifications = [
    {
      title: 'Natural Language Processing Foundation',
    },
    {
      title: 'Machine Learning',
    },
    {
      title: 'Programming Using Java',
    },
    {
      title: 'NSS HACKATHON',
    },
    {
      title: 'CRYPTOGRAPHY AND NETWORK SECURITY',
    },

  ];

  return (
    <section id="education" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Education
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            My academic background and continuous learning journey.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
          <GraduationCap className="text-accent" size={24} />
          Academic Degrees
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.institution}
              {...edu}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Award className="text-accent" size={24} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} {...cert} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
