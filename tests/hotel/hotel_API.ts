import request from 'supertest';
import app from '../../src/app';
import { hotelData, updatedHotelData } from './hotel_data';

export const createHotel = async () => {
  const res = await request(app).post('/api/hotel').send(hotelData);
  return res;
};

export const updateHotel = async (hotelId: string) => {
  const res = await request(app)
    .put(`/api/hotel/${hotelId}`)
    .send(updatedHotelData);
  return res;
};

export const getHotel = async (hotelId: string) => {
  const res = await request(app).get(`/api/hotel/${hotelId}`);
  return res;
};
