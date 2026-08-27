import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';

const ProjectCard = ({ project, delay }) => {
  const { title, description, tech, codeUrl, image, imageAlt } = project;

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
      title: 'SmartVision',
      description:
        'An advanced computer vision application leveraging machine learning models (TensorFlow, OpenCV) for real-time image processing, object detection, and automated analysis, built with Python and deployed on Vercel.',
      tech: ['Python', 'FastAPI', 'AI'],
      codeUrl: 'https://github.com/soumyajali/SmartVision',
      image: '/project-smartvision.png',
      imageAlt: 'SmartVision project preview',
    },
    {
      title: 'Digital Outpass Generator',
      description:
        'A web-based outpass management system for submitting, approving, and tracking student leave requests digitally.',
      tech: ['TypeScript', 'React', 'Node.js'],
      codeUrl: 'https://github.com/soumyajali/digital_outpass_generator',
      image: '/project-outpass-real.png',
      imageAlt: 'Digital Outpass Generator dashboard preview',
    },
    {
      title: 'Digital Manuscript Organizer',
      description:
        'A web application that digitizes, organizes, and preserves ancient manuscripts with upload, categorization, search, and viewing tools.',
      tech: ['TypeScript', 'React', 'Node.js', 'OCR'],
      codeUrl: 'https://github.com/soumyajali/digital_manuscript_organizer',
      image: '/project-manuscript-real.png',
      imageAlt: 'Digital Manuscript Organizer upload and OCR preview',
    },
    {
      title: 'BankLite',
      description:
        'A modern banking web application for account management, transfers, and transaction tracking with a clean responsive interface.',
      tech: ['React', 'JavaScript', 'MySQL'],
      codeUrl: 'https://github.com/soumyajali/banklite',
      image: '/project-banklite-login.png',
      imageAlt: 'BankLite login page screenshot',
    },
    {
      title: 'Privacy-Preserving Federated IDs',
      description:
        'A privacy-preserving federated identity management system.',
      tech: ['TypeScript', 'Federated Identity', 'Security'],
      codeUrl: 'https://github.com/soumyajali/privacy-preserving-federated-ids',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Privacy-Preserving Federated IDs code',
    },
    {
      title: 'SmartCart',
      description:
        'A smart e-commerce or shopping cart application.',
      tech: ['JavaScript', 'React', 'Node.js'],
      codeUrl: 'https://github.com/soumyajali/SmartCart',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'SmartCart Application',
    }
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
