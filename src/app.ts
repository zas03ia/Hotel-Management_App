import express from 'express';
import hotelRoutes from './routes/hotel';
import imageRoutes from './routes/image';


const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', hotelRoutes);
app.use('/api', imageRoutes);

export default app;
