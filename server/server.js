import express from 'express';
import cors from 'cors';
import multer from 'multer';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Database Connection Promise
let dbPromise = open({
  filename: path.join(__dirname, 'database.sqlite'),
  driver: sqlite3.Database
});

// API Routes

// 1. Get all images
app.get('/api/images', async (req, res) => {
  try {
    const db = await dbPromise;
    const rows = await db.all('SELECT * FROM gallery_images ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

// 2. Upload an image
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { title, description } = req.body;
    const filename = req.file.filename;
    const url = `/uploads/${filename}`; // Public URL

    const db = await dbPromise;
    const result = await db.run(
      'INSERT INTO gallery_images (filename, url, title, description) VALUES (?, ?, ?, ?)',
      [filename, url, title || filename, description || '']
    );

    const newImage = {
      id: result.lastID,
      filename,
      url,
      title: title || filename,
      description: description || ''
    };

    res.status(201).json(newImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// 3. Delete an image
app.delete('/api/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = await dbPromise;
    
    // Get file info to delete from disk
    const image = await db.get('SELECT * FROM gallery_images WHERE id = ?', [id]);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    
    const filepath = path.join(__dirname, 'uploads', image.filename);
    
    // Delete from DB
    await db.run('DELETE FROM gallery_images WHERE id = ?', [id]);
    
    // Delete file from disk if it exists
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
