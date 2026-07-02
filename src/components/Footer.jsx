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
    <footer className="bg-secondary border-t border-[rgba(255,255,255,0.08)] py-12 px-4">
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
                whileHover={{ y: -4 }}
                className="p-3 rounded-full bg-[rgba(255,255,255,0.05)] text-secondarytext hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.1)] transition"
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-secondarytext border-t border-[rgba(255,255,255,0.08)] pt-8"
        >
          <p className="mb-2 text-sm font-medium">
            Designed and built with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-accent"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span> by Sowmya Basappa Jaali
          </p>
          <p className="text-xs font-medium">© {currentYear} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
