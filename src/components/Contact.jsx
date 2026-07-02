import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Code, Briefcase, ExternalLink, Phone } from 'lucide-react';

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'www.soumya118@gmail.com',
      link: 'mailto:www.soumya118@gmail.com',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'github.com/soumyajali',
      link: 'https://github.com/soumyajali',
      color: 'from-gray-500 to-slate-600',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sowmya-b',
      link: 'https://www.linkedin.com/in/sowmya-b-520b87351/',
      color: 'from-blue-500 to-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full flex flex-col items-center justify-center text-center"
        >
          <h2 className="section-title text-center w-full">
            Let's Connect
          </h2>
          <p className="section-subtitle text-center mx-auto w-full">
            I'm always interested in hearing about new opportunities and collaborating on exciting projects. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="premium-card p-8 text-center h-full flex flex-col justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.08)]"
                  >
                    <Icon className="text-accent" size={28} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition">
                    {contact.label}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center premium-card p-10 flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-secondarytext mb-8 max-w-xl mx-auto">
            Drop me an email or connect with me on social media. Let's build something amazing together!
          </p>
          <a
            href="mailto:www.soumya118@gmail.com"
            className="btn-primary flex items-center justify-center"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};
