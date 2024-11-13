import fs from 'fs';
import path from 'path';
import { DB_PATH } from '../../src/config/dbConfig';
import { createHotel, updateHotel, getHotel } from './hotel_API';
import { assertHotelData, assertUpdatedHotelData } from './hotel_assertions';

let hotelId: string;

describe('Hotel API', () => {

  // Test for creating a hotel
  it('should create a new hotel', async () => {
    const res = await createHotel();
    // Store the hotel ID for use in other tests
    hotelId = res.body.id;  

    assertHotelData(res);
  });

  // Test for updating a hotel
  it('should update a given hotel', async () => {
    const res = await updateHotel(hotelId);

    assertUpdatedHotelData(res);
  });

  // Test for getting a hotel
  it('should get a given hotel', async () => {
    const res = await getHotel(hotelId);

    assertUpdatedHotelData(res);
  });

  // Cleanup: Delete files or clear data after all tests in the describe block
  afterAll(() => {
    const testFilePath = path.join(DB_PATH , `hotels/${hotelId}.json`);
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });
});
