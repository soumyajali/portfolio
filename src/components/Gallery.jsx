import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Plus, Trash2, LogOut, Lock } from 'lucide-react';

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
        className="relative max-w-4xl w-full"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-cyan-400 transition"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-cyan-400 transition"
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
          <h3 className="text-3xl font-bold text-cyan-300 mb-3">{image.title}</h3>
          {image.description && (
            <p className="text-gray-300 text-lg">{image.description}</p>
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

const AdminLoginModal = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple admin password - in production, use proper authentication
    if (password === 'admin123') {
      onLogin();
      onClose();
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-purple-900 to-cyan-900 rounded-xl p-8 w-full max-w-md border border-purple-500/50 shadow-2xl shadow-purple-500/30"
      >
        <div className="flex items-center gap-3 mb-6">
          <Lock className="text-cyan-400" size={32} />
          <h2 className="text-3xl font-bold text-cyan-300">Admin Access</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2 font-semibold text-lg">
              Enter Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white text-base placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-base font-medium mt-2">{error}</p>
            )}
          </div>

          <div className="flex gap-3">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold text-base hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-300/30 hover:border-cyan-300/60 transition"
            >
              Login
            </motion.button>
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold text-base border border-gray-600 hover:border-gray-500 transition"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const GalleryItem = ({ image, index, onSelect, onDelete, isUploadable }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group overflow-hidden rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/40 transition cursor-pointer border border-cyan-500/20 hover:border-cyan-500/60"
      onClick={() => onSelect(index)}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-end p-4">
        <h3 className="text-white font-bold text-center">{image.title}</h3>
        <p className="text-cyan-300 text-sm mt-1">Click to view</p>
        {isUploadable && onDelete && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(index);
            }}
            className="mt-3 p-2 bg-red-500/80 hover:bg-red-600 rounded-lg transition"
          >
            <Trash2 size={18} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export const Gallery = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Load admin status and uploaded images from localStorage on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem('isGalleryAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }

    const saved = localStorage.getItem('galleryImages');
    if (saved) {
      try {
        setUploadedImages(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading gallery images:', e);
      }
    }
  }, []);

  // Save admin status to localStorage
  const handleAdminLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isGalleryAdmin', 'true');
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.setItem('isGalleryAdmin', 'false');
  };

  // Save uploaded images to localStorage
  const saveToLocalStorage = (images) => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
  };

  // Default gallery images
  const defaultImages = [
   
  ];

  // Combined gallery images (uploaded + default)
  const allImages = [...uploadedImages, ...defaultImages];

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
      // Validate file is image
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          url: event.target.result,
          title: file.name.split('.')[0],
          description: 'My photo',
          isDefault: false,
        };

        const updated = [newImage, ...uploadedImages];
        setUploadedImages(updated);
        saveToLocalStorage(updated);
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    e.target.value = '';
  };

  const handleDeleteImage = (index) => {
    const updated = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updated);
    saveToLocalStorage(updated);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-6 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            {isAdmin ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdminLogout}
                className="flex items-center gap-2 px-4 py-3 bg-red-500/80 hover:bg-red-600 rounded-lg text-white font-semibold text-base border border-red-400/30 hover:border-red-400/60 shadow-lg shadow-red-500/20 hover:shadow-lg transition"
              >
                <LogOut size={18} />
                Logout
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 px-4 py-3 bg-cyan-500/80 hover:bg-cyan-600 rounded-lg text-white font-semibold text-base border border-cyan-300/30 hover:border-cyan-300/60 shadow-lg shadow-cyan-500/20 hover:shadow-lg transition"
              >
                <Lock size={18} />
                Admin
              </motion.button>
            )}
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          <p className="text-gray-400 text-center mt-6 text-lg font-medium">
            Explore my photos and achievements
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upload Button - Only for Admin */}
          {isAdmin && (
            <motion.label
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 transition cursor-pointer bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 hover:border-purple-500/60 flex items-center justify-center h-48"
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-3 text-gray-300 hover:text-cyan-300 transition">
                <Plus size={56} />
                <span className="font-bold text-lg">Add Photos</span>
                <span className="text-sm text-gray-400 font-medium">Click to upload</span>
              </div>
            </motion.label>
          )}

          {/* Gallery Items */}
          {allImages.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onSelect={setSelectedIndex}
              onDelete={
                isAdmin && !image.isDefault
                  ? () => handleDeleteImage(index)
                  : null
              }
              isUploadable={!image.isDefault && isAdmin}
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

      {/* Admin Login Modal */}
      {showLoginModal && (
        <AdminLoginModal
          onLogin={handleAdminLogin}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </section>
  );
};
