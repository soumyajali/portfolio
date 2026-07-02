import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, Code } from 'lucide-react';
import { useState } from 'react';

const ProjectDemoModal = ({ project, isOpen, onClose }) => {
  const [outpassFormData, setOutpassFormData] = useState({
    name: '',
    destination: '',
    returnDate: '',
  });
  const [outpasses, setOutpasses] = useState([
    { id: 1, name: 'John Doe', destination: 'Home', status: 'Approved' },
    { id: 2, name: 'Jane Smith', destination: 'Hospital', status: 'Pending' },
  ]);

  const [manuscripts, setManuscripts] = useState([
    { id: 1, name: 'Sanskrit Document', status: 'Completed', progress: 100 },
    { id: 2, name: 'Ancient Text', status: 'Processing', progress: 65 },
  ]);

  const handleOutpassSubmit = (e) => {
    e.preventDefault();
    if (outpassFormData.name && outpassFormData.destination) {
      setOutpasses([
        ...outpasses,
        {
          id: outpasses.length + 1,
          name: outpassFormData.name,
          destination: outpassFormData.destination,
          status: 'Pending',
        },
      ]);
      setOutpassFormData({ name: '', destination: '', returnDate: '' });
    }
  };

  if (!project) return null;

  const demoContent = {
    'Digital Outpass Generator': {
      title: 'Student Outpass Management System',
      content: (
        <div className="space-y-6">
          {/* Form Section */}
          <form onSubmit={handleOutpassSubmit} className="premium-card p-6">
            <h3 className="text-accent font-bold mb-4 text-lg">📝 Generate New Outpass</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 block mb-2">Student Name *</label>
                <input
                  type="text"
                  value={outpassFormData.name}
                  onChange={(e) => setOutpassFormData({ ...outpassFormData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-black border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 block mb-2">Destination *</label>
                <input
                  type="text"
                  value={outpassFormData.destination}
                  onChange={(e) => setOutpassFormData({ ...outpassFormData, destination: e.target.value })}
                  placeholder="Where are you going?"
                  className="w-full px-4 py-2 bg-black border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 block mb-2">Return Date</label>
                <input
                  type="date"
                  value={outpassFormData.returnDate}
                  onChange={(e) => setOutpassFormData({ ...outpassFormData, returnDate: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-accent"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} /> Submit Request
              </motion.button>
            </div>
          </form>

          {/* Outpass List Section */}
          <div className="premium-card p-6">
            <h3 className="text-accent font-bold mb-4 text-lg">📋 Your Outpasses ({outpasses.length})</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {outpasses.map((outpass) => (
                <motion.div
                  key={outpass.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg border border-[rgba(255,255,255,0.08)] flex justify-between items-center"
                >
                  <div>
                    <p className="text-white font-semibold">{outpass.name}</p>
                    <p className="text-gray-400 text-sm">→ {outpass.destination}</p>
                  </div>
                  <div>
                    {outpass.status === 'Approved' ? (
                      <span className="px-3 py-1 rounded-full bg-green-500/30 text-green-300 text-xs font-bold">✓ {outpass.status}</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-yellow-500/30 text-yellow-300 text-xs font-bold">⏳ {outpass.status}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30 text-center">
              <p className="text-2xl font-bold text-green-400">
                {outpasses.filter((o) => o.status === 'Approved').length}
              </p>
              <p className="text-xs text-gray-400 mt-1">Approved</p>
            </div>
            <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/30 text-center">
              <p className="text-2xl font-bold text-yellow-400">
                {outpasses.filter((o) => o.status === 'Pending').length}
              </p>
              <p className="text-xs text-gray-400 mt-1">Pending</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 text-center">
              <p className="text-2xl font-bold text-blue-400">{outpasses.length}</p>
              <p className="text-xs text-gray-400 mt-1">Total</p>
            </div>
          </div>
        </div>
      ),
    },
    'Digital Manuscript Organizer': {
      title: 'Manuscript Digitization Platform',
      content: (
        <div className="space-y-6">
          {/* Upload Section */}
          <div className="premium-card p-8 border-dashed border-2 hover:border-[rgba(255,255,255,0.2)]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center cursor-pointer"
            >
              <div className="text-5xl mb-3">📄</div>
              <p className="text-white font-semibold mb-1">Drag & Drop Manuscript Image</p>
              <p className="text-gray-400 text-sm">or click to browse files</p>
              <p className="text-xs text-gray-500 mt-2">Supports: JPG, PNG, PDF (Max 50MB)</p>
            </motion.div>
          </div>

          {/* Processing Manuscripts */}
          <div className="premium-card p-6">
            <h3 className="text-accent font-bold mb-4 text-lg flex items-center gap-2">
              <Zap size={20} /> Processing Documents
            </h3>
            <div className="space-y-4">
              {manuscripts.map((manuscript) => (
                <motion.div key={manuscript.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold text-sm">{manuscript.name}</p>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        manuscript.status === 'Completed'
                          ? 'bg-green-500/30 text-green-300'
                          : 'bg-blue-500/30 text-blue-300'
                      }`}
                    >
                      {manuscript.status}
                    </span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${manuscript.progress}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-xs text-gray-400">{manuscript.progress}% Complete</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Features */}
          <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-green-300 font-bold mb-4 text-lg">🤖 AI-Powered Features</h3>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-300">Google Gemini AI - Automatic OCR & Text Extraction</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-300">Metadata Generation - Auto-detects date, language, format</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-300">MongoDB Atlas - Secure cloud storage & retrieval</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-300">LocalStorage - Works offline with sync capability</span>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    'AI Vision System v2.0': {
      title: 'Real-Time AI Detection System',
      content: (
        <div className="space-y-6">
          {/* Live Feed Simulation */}
          <div className="premium-card p-6 aspect-video flex items-center justify-center overflow-hidden relative">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-accent/5"
            />
            <div className="text-center relative z-10">
              <div className="text-6xl mb-3">🎥</div>
              <p className="text-accent font-bold">Live Detection Stream</p>
              <p className="text-gray-400 text-sm mt-2">Real-time Multi-Object Tracking</p>
            </div>
          </div>

          {/* Detection Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent/30 p-4 rounded-lg border border-accent/30">
              <p className="text-accent font-bold text-2xl">8</p>
              <p className="text-gray-400 text-xs mt-1">Objects Detected</p>
            </div>
            <div className="bg-accent/30 p-4 rounded-lg border border-accent/30">
              <p className="text-accent font-bold text-2xl">2</p>
              <p className="text-gray-400 text-xs mt-1">People Tracked</p>
            </div>
            <div className="bg-pink-900/30 p-4 rounded-lg border border-pink-500/30">
              <p className="text-pink-300 font-bold text-2xl">30</p>
              <p className="text-gray-400 text-xs mt-1">FPS</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-300 font-bold text-2xl">92%</p>
              <p className="text-gray-400 text-xs mt-1">CPU Usage</p>
            </div>
          </div>

          {/* Active Features */}
          <div className="premium-card p-6">
            <h3 className="text-accent font-bold mb-4 text-lg">🔧 Active Detection Modules</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Object Detection', icon: '🔍', active: true },
                { name: 'Pose Estimation', icon: '🧍', active: true },
                { name: 'Face Recognition', icon: '👤', active: true },
                { name: 'Hand Tracking', icon: '👋', active: true },
                { name: 'Gesture Recognition', icon: '✌️', active: true },
                { name: 'Expression Analysis', icon: '😊', active: true },
              ].map((feature) => (
                <motion.div
                  key={feature.name}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 rounded-lg border text-center transition ${
                    feature.active
                      ? 'bg-green-500/20 border-green-500/30'
                      : 'bg-gray-500/20 border-gray-500/30'
                  }`}
                >
                  <p className="text-2xl mb-1">{feature.icon}</p>
                  <p className={`text-xs font-semibold ${feature.active ? 'text-green-300' : 'text-gray-400'}`}>
                    {feature.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-green-300 font-bold mb-4">📊 System Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-300">Frame Processing</span>
                  <span className="text-xs text-green-300 font-bold">95%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2">
                  <motion.div className="h-full bg-gradient-to-r from-green-500 to-accent rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-300">Detection Accuracy</span>
                  <span className="text-xs text-green-300 font-bold">98%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2">
                  <motion.div className="h-full bg-gradient-to-r from-green-500 to-accent rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-300">Memory Usage</span>
                  <span className="text-xs text-green-300 font-bold">72%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2">
                  <motion.div className="h-full bg-gradient-to-r from-green-500 to-accent rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const demo = demoContent[project.title] || { title: 'Demo', content: <p>Demo coming soon</p> };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-3xl max-h-[90vh] bg-secondary border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition"
            >
              <X className="text-accent" size={24} />
            </motion.button>

            {/* Modal Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {demo.title}
              </h2>
              <p className="text-gray-400">Live Demo - {project.title}</p>
            </div>

            {/* Demo Content */}
            <div className="text-gray-300">
              {demo.content}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-accent/20 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="flex-1 btn-primary"
              >
                Close Demo
              </motion.button>
              <motion.a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 btn-secondary flex items-center justify-center gap-2"
              >
                <Code size={18} /> View on GitHub
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDemoModal;
