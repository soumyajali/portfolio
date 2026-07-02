import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';

const ProjectCard = ({ project, delay }) => {
  const { title, description, tech, updated, codeUrl, image, imageAlt } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="premium-card p-6 flex flex-col h-full group"
    >
      <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition mb-2">
          {title}
        </h3>
        <p className="text-sm text-secondarytext font-medium">
          Updated {updated}
        </p>
      </div>

      {/* Description */}
      <p className="text-secondarytext mb-6 flex-grow text-base leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.05)] text-secondarytext border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.15)] transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex mt-auto">
        <a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary w-full flex justify-center items-center gap-2"
        >
          <Code size={18} /> Code
        </a>
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
    <section id="projects" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Featured Projects
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            A selection of my recent work and personal projects.
          </p>
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
