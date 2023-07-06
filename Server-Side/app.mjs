

import express from 'express';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes.mjs';
import stateRoutes from './routes/stateRoutes.mjs';
import cityRoutes from './routes/cityRoutes.mjs';


const app = express();

app.use(cors());

// Register routes
app.use('/api', countryRoutes);

app.use('/api', stateRoutes);

app.use('/api',cityRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/dependentData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


