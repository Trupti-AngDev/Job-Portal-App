

import express from 'express';
import { getCountries } from '../controllers/countryController.mjs';

const router = express.Router();

// Route to get all countries
router.get('/countries', getCountries);

export default router;
