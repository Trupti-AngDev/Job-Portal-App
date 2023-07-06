

import express from 'express';

import { getStates } from '../controllers/stateController.mjs';

const router = express.Router();

// Route to get all states
router.get('/states', getStates);

export default router;
