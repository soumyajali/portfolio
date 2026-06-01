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
      color: 'from-blue-500 to-cyan-500',
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
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-b from-black to-purple-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-center text-xl font-medium mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborating on exciting projects. Feel free to reach out!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" />
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
                <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-8 text-center hover:border-cyan-500/60 transition backdrop-blur-sm h-full flex flex-col justify-center items-center shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-cyan-500/20">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 shadow-xl shadow-purple-500/40 border border-white/20`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-cyan-300">
                    {contact.label}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-cyan-500/40 rounded-2xl p-10 backdrop-blur-sm shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Ready to collaborate?
          </h3>
          <p className="text-gray-300 mb-6">
            Drop me an email or connect with me on social media. Let's build something amazing together!
          </p>
          <motion.a
            href="mailto:www.soumya118@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
