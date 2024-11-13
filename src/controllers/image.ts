import { Request, Response } from 'express';
import { uploadImages } from '../services/imageService';

// Controller function to handle file uploads
export const uploadFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    // Ensure the function exits after sending a response
    if (!files || files.length === 0) {
      res.status(400).json({ message: 'No files uploaded.' });
      return;
    }

    // HotelId in the request body
    const hotelId = req.body.hotelId;
    const imagePaths = await uploadImages(files, hotelId);
    res.json({ imagePaths });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).send('Failed to upload images');
  }
};
