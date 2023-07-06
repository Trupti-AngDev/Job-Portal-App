
import City from '../models/cityModel.mjs';

// Controller to get all states
const getCities = async (req, res) => {
  try {
    const { state_short_name } = req.query;
    console.log("State",state_short_name);
    const cities = await City.find({ state_short_name });

    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getCities };
