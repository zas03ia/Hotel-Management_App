import fs from 'fs';
import path from 'path';
import { updateHotelImages } from './hotelService';
import {ensureDirectoryExists} from '../utils/fileUtils'

// Service function to upload images and update hotel data
export const uploadImages = async (files: Express.Multer.File[], hotelId: string) => {
  try {
    const imagePaths: string[] = [];
    const uploadDir = path.join(__dirname, '../../uploads/images');
    
    ensureDirectoryExists(uploadDir);

    // Upload each image and store the paths
    files.forEach(file => {
      const filePath = path.join(uploadDir, file.originalname);
      if (!file.buffer) {
        throw new Error(`File buffer is missing for ${file.originalname}`);
      }
    
      fs.writeFileSync(filePath, file.buffer);  // Save the file to disk
      imagePaths.push(`/images/${file.originalname}`);  // Store the file path
    });

    // Update the hotel images in the JSON file
    await updateHotelImages(hotelId, imagePaths);

    return imagePaths;  // Return the array of image paths
  } catch (error) {
    console.error('Error in uploadImages:', error);  // Log error details
    throw new Error('Failed to upload images');
  }
};
