import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';

const ProjectCard = ({ project, delay }) => {
  const { title, description, tech, updated, codeUrl, image, imageAlt } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/30 rounded-2xl p-6 overflow-hidden group hover:border-cyan-500/60 transition backdrop-blur-sm h-full flex flex-col shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-cyan-500/20 bg-black/40">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-cyan-300 group-hover:text-purple-300 transition mb-3">
          {title}
        </h3>
        <p className="text-base text-gray-400 font-semibold">
          Updated {updated}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 flex-grow text-lg leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-purple-500/20">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm font-bold px-3 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-500/70 hover:bg-cyan-500/30 transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex">
        <motion.a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/50 border border-pink-300/30 hover:border-pink-300/60 transition text-base duration-300"
        >
          <Code size={20} /> Code
        </motion.a>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: 'Digital Outpass Generator',
      description:
        'A web-based outpass management system for submitting, approving, and tracking student leave requests digitally.',
      tech: ['TypeScript'],
      updated: '2026',
      codeUrl: 'https://github.com/soumyajali/digital_outpass_generator',
      image: '/project-outpass-real.png',
      imageAlt: 'Digital Outpass Generator dashboard preview',
    },
    {
      title: 'Digital Manuscript Organizer',
      description:
        'A web application that digitizes, organizes, and preserves ancient manuscripts with upload, categorization, search, and viewing tools.',
      tech: ['TypeScript'],
      updated: '2025',
      codeUrl: 'https://github.com/soumyajali/digital_manuscript_organizer',
      image: '/project-manuscript-real.png',
      imageAlt: 'Digital Manuscript Organizer upload and OCR preview',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-black">
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
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
