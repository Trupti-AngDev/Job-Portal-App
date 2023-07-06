

import State from '../models/stateModel.mjs';


// Controller to get all states
const getStates = async (req, res) => {
  try {
    const { country_short_name } = req.query;
    const states = await State.find({ country_short_name });

    res.json(states);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getStates };
