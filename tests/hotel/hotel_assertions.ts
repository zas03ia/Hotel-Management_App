import { hotelData, updatedHotelData } from './hotel_data';
import { generateSlug } from '../../src/utils/slugify';

export const assertHotelData = (res: any) => {
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
  expect(res.body).toHaveProperty('title', hotelData.title);
  expect(res.body).toHaveProperty('slug', generateSlug(hotelData.title));
  expect(res.body).toHaveProperty('description', hotelData.description);
  expect(res.body).toHaveProperty('guestCount', hotelData.guestCount);
  expect(res.body).toHaveProperty('bedroomCount', hotelData.bedroomCount);
  expect(res.body).toHaveProperty('bathroomCount', hotelData.bathroomCount);
  expect(res.body).toHaveProperty('amenities');
  expect(res.body.amenities).toEqual(hotelData.amenities);
  expect(res.body).toHaveProperty('hostInformation', hotelData.hostInformation);
  expect(res.body).toHaveProperty('address', hotelData.address);
  expect(res.body).toHaveProperty('latitude', hotelData.latitude);
  expect(res.body).toHaveProperty('longitude', hotelData.longitude);
  expect(res.body).toHaveProperty('images');
  expect(res.body).toHaveProperty('rooms');
  expect(res.body.rooms[0]).toHaveProperty('roomSlug', hotelData.rooms[0].roomSlug);
  expect(res.body.rooms[0]).toHaveProperty('roomTitle', hotelData.rooms[0].roomTitle);
  expect(res.body.rooms[0]).toHaveProperty('roomImage', hotelData.rooms[0].roomImage);
  expect(res.body.rooms[0]).toHaveProperty('bedroomCount', hotelData.rooms[0].bedroomCount);
};

export const assertUpdatedHotelData = (res: any) => {
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('id');
  expect(res.body).toHaveProperty('title', updatedHotelData.title);
  expect(res.body).toHaveProperty('slug', updatedHotelData.title.toLowerCase().replace(/\s+/g, '-'));
  expect(res.body).toHaveProperty('description', updatedHotelData.description);
  expect(res.body).toHaveProperty('guestCount', updatedHotelData.guestCount);
  expect(res.body).toHaveProperty('bedroomCount', updatedHotelData.bedroomCount);
  expect(res.body).toHaveProperty('bathroomCount', updatedHotelData.bathroomCount);
  expect(res.body).toHaveProperty('amenities');
  expect(res.body.amenities).toEqual(updatedHotelData.amenities);
  expect(res.body).toHaveProperty('hostInformation', updatedHotelData.hostInformation);
  expect(res.body).toHaveProperty('address', updatedHotelData.address);
  expect(res.body).toHaveProperty('latitude', updatedHotelData.latitude);
  expect(res.body).toHaveProperty('longitude', updatedHotelData.longitude);
  expect(res.body).toHaveProperty('images');
  expect(res.body).toHaveProperty('rooms');
  expect(res.body.rooms[0]).toHaveProperty('roomSlug', updatedHotelData.rooms[0].roomSlug);
  expect(res.body.rooms[0]).toHaveProperty('roomTitle', updatedHotelData.rooms[0].roomTitle);
  expect(res.body.rooms[0]).toHaveProperty('roomImage', updatedHotelData.rooms[0].roomImage);
  expect(res.body.rooms[0]).toHaveProperty('bedroomCount', updatedHotelData.rooms[0].bedroomCount);
};
