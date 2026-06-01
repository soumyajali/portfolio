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
      className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-6 relative hover:border-cyan-500/60 transition backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500">
            <GraduationCap className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-cyan-300 mb-2">{degree}</h3>
          <p className="text-gray-300 font-semibold text-base">{institution}</p>
          <p className="text-base text-gray-400 mt-2 font-medium">{duration}</p>
          <p className="text-base text-purple-300 font-bold mt-3">CGPA: {cgpa}</p>
        </div>
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-lg p-6 flex items-center gap-4 hover:border-cyan-500/60 transition backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
          <Award className="text-white" size={24} />
        </div>
      </div>
      <div className="flex-grow">
          <p className="text-gray-200 font-bold text-base">{title}</p>
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
      cgpa: '7.7',
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
    
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-6 bg-gradient-to-b from-black to-purple-900/20">
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
              Education
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
          <GraduationCap className="text-purple-400" size={28} />
          Education
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
          <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
            <Award className="text-purple-400" size={28} />
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
