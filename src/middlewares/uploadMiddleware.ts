import multer from 'multer';

// Configure Multer to use memory storage
const storage = multer.memoryStorage();

// Export Multer upload configuration
export const upload = multer({ storage: storage });
