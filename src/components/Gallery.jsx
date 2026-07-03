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

const AdminLoginModal = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple admin password - in production, use proper authentication
    if (password === 'sowvee') {
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
        className="premium-card p-8 w-full max-w-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <Lock className="text-accent" size={28} />
          <h2 className="text-2xl font-bold text-white">Admin Access</h2>
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
              className="w-full px-4 py-3 bg-black/50 border border-accent/30 rounded-lg text-white text-base placeholder-gray-500 focus:outline-none focus:border-accent transition"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-base font-medium mt-2">{error}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 btn-primary"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const GalleryItem = ({ image, index, onSelect, onDelete, isUploadable }) => {
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

  const API_URL = 'http://localhost:5000';

  // Load admin status and uploaded images from backend on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem('isGalleryAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }

    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}/api/images`);
      if (response.ok) {
        const data = await response.json();
        const imagesWithFullUrl = data.map(img => ({
          ...img,
          url: `${API_URL}${img.url}`,
          isDefault: false
        }));
        setUploadedImages(imagesWithFullUrl);
      }
    } catch (e) {
      console.error('Error fetching gallery images:', e);
    }
  };

  // Save admin status to localStorage
  const handleAdminLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isGalleryAdmin', 'true');
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.setItem('isGalleryAdmin', 'false');
  };

  // Default gallery images
  const defaultImages = [

  ];

  // Combined gallery images (uploaded + default)
  const allImages = [...uploadedImages, ...defaultImages];

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files');
        continue;
      }

      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', file.name.split('.')[0]);

      try {
        const response = await fetch(`${API_URL}/api/upload`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const newImage = await response.json();
          newImage.url = `${API_URL}${newImage.url}`;
          newImage.isDefault = false;
          
          setUploadedImages((prev) => [newImage, ...prev]);
        } else {
          alert('Failed to upload image');
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert('Error uploading image');
      }
    }

    // Reset input
    e.target.value = '';
  };

  const handleDeleteImage = async (index) => {
    const imageToDelete = uploadedImages[index];
    
    if (imageToDelete && imageToDelete.id) {
      try {
        const response = await fetch(`${API_URL}/api/images/${imageToDelete.id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setUploadedImages((prev) => prev.filter((_, i) => i !== index));
          setSelectedIndex(null);
        } else {
          alert('Failed to delete image');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('Error deleting image');
      }
    } else {
      setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    }
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
    <section id="gallery" className="py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">
              Gallery
            </h2>
            {isAdmin ? (
              <button
                onClick={handleAdminLogout}
                className="btn-secondary flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="btn-secondary flex items-center gap-2"
              >
                <Lock size={16} />
                Admin
              </button>
            )}
          </div>
          <p className="text-secondarytext text-center text-lg font-medium mt-2">
            Explore my photos and achievements.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upload Button - Only for Admin */}
          {isAdmin && (
            <motion.label
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="premium-card flex flex-col items-center justify-center h-48 cursor-pointer border-dashed border-2 hover:border-[rgba(255,255,255,0.2)]"
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-3 text-gray-300 hover:text-accent transition">
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
