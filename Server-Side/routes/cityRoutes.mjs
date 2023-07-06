

import express from 'express';

import { getCities } from '../controllers/cityController.mjs';

const router = express.Router();

// Route to get all states
router.get('/cities', getCities);

export default router;
