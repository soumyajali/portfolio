import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Download } from 'lucide-react';
import { useState } from 'react';

const CertificateGalleryModal = ({ certificate, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="premium-card p-6 max-w-2xl w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
          <button
            onClick={onClose}
            className="text-secondarytext hover:text-white transition text-2xl"
          >
            ✕
          </button>
        </div>

        <iframe
          src={certificate.link}
          className="w-full h-[600px] rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]"
          title={certificate.title}
        />

        <div className="mt-4 flex gap-3">
          <motion.a
            href={certificate.link}
            download
            className="btn-primary flex items-center gap-2"
          >
            <Download size={18} />
            Download
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificateItem = ({ title, link, delay, onSelect }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.5, delay }}
      onClick={() => onSelect({ title, link })}
      className="premium-card p-6 flex items-center gap-4 group text-left w-full"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(255,255,255,0.1)] transition">
            <Award className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-white font-medium text-sm group-hover:text-accent transition">{title}</p>
          <p className="text-xs text-secondarytext mt-1">Click to view certificate</p>
        </div>
      </div>
    </motion.button>
  );
};

export const CertificateGallery = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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

  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
        <Award className="text-accent" size={24} />
        Certificates
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <CertificateItem
            key={cert.title}
            {...cert}
            delay={index * 0.1}
            onSelect={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate && (
        <CertificateGalleryModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
};
