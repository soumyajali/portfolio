import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDB() {
  try {
    const dbPath = path.join(__dirname, 'database.sqlite');
    console.log(`Connecting to SQLite database at ${dbPath}...`);
    
    // Open the database (this will create it if it doesn't exist)
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('Creating tables...');
    const createGalleryTableQuery = `
      CREATE TABLE IF NOT EXISTS gallery_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        url TEXT NOT NULL,
        title TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await db.exec(createGalleryTableQuery);
    console.log('Table `gallery_images` created or already exists.');

    await db.close();
    console.log('Database initialization successful! You can now start the server.');
  } catch (error) {
    console.error('Failed to initialize database:');
    console.error(error);
    process.exit(1);
  }
}

initDB();
