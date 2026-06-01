import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Code,
      link: 'https://github.com/soumyajali',
      label: 'GitHub',
    },
    {
      icon: Briefcase,
      link: 'https://www.linkedin.com/in/sowmya-b-520b87351/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      link: 'mailto:www.soumya118@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-purple-500/30 hover:border-cyan-500/50 transition"
                aria-label={social.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 border-t border-purple-500/10 pt-8"
        >
          <p className="mb-2 text-base font-medium">
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-red-500"
            >
              <Heart size={18} fill="currentColor" />
            </motion.span> by Sowmya Basappa Jaali
          </p>
          <p className="text-sm font-medium">© {currentYear} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
