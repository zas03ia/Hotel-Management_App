import express from 'express';
import { upload } from '../middlewares/uploadMiddleware';
import { uploadFiles } from '../controllers/image';

const router = express.Router();

router.post('/images', upload.array('images'), uploadFiles);

export default router;
