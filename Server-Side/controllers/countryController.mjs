

  import Country from '../models/countryModel.mjs';

// Controller to get all countries
const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getCountries };
