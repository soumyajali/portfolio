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
        className="bg-gradient-to-br from-purple-900 to-cyan-900 rounded-xl p-6 max-w-2xl w-full border border-purple-500/50"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-cyan-300">{certificate.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>
        
        <iframe
          src={certificate.link}
          className="w-full h-[600px] rounded-lg border border-purple-500/30"
          title={certificate.title}
        />
        
        <div className="mt-4 flex gap-3">
          <motion.a
            href={certificate.link}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
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
      className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition backdrop-blur-sm group text-left"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition">
            <Award className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-gray-200 font-semibold group-hover:text-cyan-300 transition">{title}</p>
          <p className="text-xs text-gray-400 mt-1">Click to view certificate</p>
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
    
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-2">
        <Award className="text-purple-400" size={28} />
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
