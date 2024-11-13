import { saveToFile, readFromFile } from '../utils/fileUtils';

// Service function to update the images for a hotel
export const updateHotelImages = async (hotelId: string, newImages: string[]) => {
  const hotel = await readFromFile(`hotels/${hotelId}.json`);
  if (!hotel) {
    throw new Error('Hotel with ID ${hotelId} not found');
  }

  // Update the images field (merge with the existing images)
  hotel.images = [...newImages, ...hotel.images];

  // Save the updated hotel data
  await saveToFile(`hotels/${hotelId}.json`, hotel);
};
