import { Request, Response } from 'express';
import { Hotel } from '../models/hotel';
import { saveToFile, readFromFile } from '../utils/fileUtils';
import { generateSlug } from '../utils/slugify';
import { asyncHandler } from '../utils/asyncHandler';

// Controller to create a hotel
export const createHotel = asyncHandler(async (req: Request, res: Response) => {
  
  const data = req.body;
  const hotel: Hotel = {
    id: Date.now().toString(),
    slug: generateSlug(data.title || 'default-title'),
    images: [],
    rooms: data.rooms || [],
    title: data.title || 'Untitled Hotel',
    description: data.description || 'No description available',
    guestCount: data.guestCount || 0,
    bedroomCount: data.bedroomCount || 0,
    bathroomCount: data.bathroomCount || 0,
    amenities: data.amenities || [],
    hostInformation: data.hostInformation || 'No host information available',
    address: data.address || 'No address provided',
    latitude: data.latitude || 0,
    longitude: data.longitude || 0,
  };

  await saveToFile(`hotels/${hotel.id}.json`, hotel);
  res.status(201).json(hotel);
});

// Controller to get a hotel by ID
export const getHotel = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const hotel = await readFromFile(`hotels/${id}.json`);
  if (!hotel) {
    return res.status(404).json({ error: 'Hotel not found' });
  }
  res.json(hotel);
});

// Controller to update a hotel
export const updateHotel = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const hotel = await readFromFile(`hotels/${id}.json`);
  if (!hotel) {
    return res.status(404).json({ error: 'Hotel not found' });
  }
  // Check if title is being updated, and update slug accordingly
  if (data.title && data.title !== hotel.title) {
    const slug = generateSlug(data.title);
    data.slug = slug;
  }
  const updatedHotel = { ...hotel, ...data };
  await saveToFile(`hotels/${id}.json`, updatedHotel);
  res.json(updatedHotel);
});
