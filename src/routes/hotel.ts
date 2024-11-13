import express from 'express';
import * as hotelController from '../controllers/hotel';

const router = express.Router();

router.post('/hotel', hotelController.createHotel);
router.get('/hotel/:id', hotelController.getHotel);
router.put('/hotel/:id', hotelController.updateHotel);

export default router;
