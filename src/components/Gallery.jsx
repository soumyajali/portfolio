import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ image, onClose, allImages, currentIndex, onNext, onPrev }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-secondary p-4 rounded-xl border border-[rgba(255,255,255,0.08)] shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition z-50"
        >
          <X size={32} />
        </button>

        {/* Image */}
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />

        {/* Navigation Buttons */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-accent transition"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-accent transition"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
          {image.description && (
            <p className="text-secondarytext text-base">{image.description}</p>
          )}
          {allImages.length > 1 && (
            <p className="text-gray-500 text-base font-medium mt-4">
              {currentIndex + 1} / {allImages.length}
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const GalleryItem = ({ image, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="premium-card relative group overflow-hidden cursor-pointer"
      onClick={() => onSelect(index)}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-end p-4">
        <h3 className="text-white font-bold text-center">{image.title}</h3>
        <p className="text-accent text-xs mt-1">Click to view</p>
      </div>
    </motion.div>
  );
};

export const Gallery = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Hardcoded gallery images that will load perfectly on GitHub Pages / Vercel
  const allImages = [
    {
      url: '/gallery/1783069704624-372443627-4AL24CS409.png',
      title: 'Achievement',
      description: 'My photo',
    },
    {
      url: '/gallery/1783069763964-658006500-SMV05902.JPG',
      title: 'Photography',
      description: 'My photo',
    },
    {
      url: '/gallery/1783069780748-298879711-SMV05908.JPG',
      title: 'Event',
      description: 'My photo',
    }
  ];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <h2 className="section-title mb-0">
              Gallery
            </h2>
          </div>
          <p className="text-secondarytext text-center text-lg font-medium mt-2">
            Explore my photos and achievements.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Items */}
          {allImages.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onSelect={setSelectedIndex}
            />
          ))}
        </div>

        {/* Empty State */}
        {allImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">Gallery coming soon...</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <GalleryModal
          image={allImages[selectedIndex]}
          allImages={allImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
