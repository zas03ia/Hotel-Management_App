import fs from 'fs';
import path from 'path';
import request from 'supertest';
import { DB_PATH } from '../../src/config/dbConfig';
import app from '../../src/app';
import {createHotel} from '../../tests/hotel/hotel_API';

let hotelId: string;

describe('POST /api/images', () => { 
  it('should upload multiple files', async () => {
    const res = await createHotel();
    hotelId = res.body.id;
    const response = await request(app)
      .post('/api/images')
      .attach('images', path.join(__dirname, 'sample_images/image1.jpg'))
      .attach('images', path.join(__dirname, 'sample_images/image2.jpg'))
      .field('hotelId', hotelId);

    expect(response.status).toBe(200);
    const expected = { imagePaths: ['/images/image1.jpg', '/images/image2.jpg'] };
    const received = response.body;
    console.log('Expected:', JSON.stringify(expected, null, 2));
    console.log('Received:', JSON.stringify(received, null, 2));
  });

  it('should return an error when no files are uploaded', async () => {
    const response = await request(app)
      .post('/api/images')
      .field('hotelId', hotelId); // Simulate a request with no files but the hotelId field

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('No files uploaded.');
  });

  // Cleanup: Delete files or clear data after all tests in the describe block
  afterAll(() => {
    const testFilePath = path.join(DB_PATH , `hotels/${hotelId}.json`);
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath); 
    }
    const testImagePath = path.resolve(__dirname, '../../uploads/images/image1.jpg');
    if (fs.existsSync(testImagePath)) {
      fs.unlinkSync(testImagePath); 
    }
    const testImage2Path = path.resolve(__dirname, '../../uploads/images/image2.jpg');
    if (fs.existsSync(testImage2Path)) {
      fs.unlinkSync(testImage2Path); 
    }
    });
});
