

import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  // Schema definition goes here
  name: String,
  short_name: String,
});

const Country = mongoose.model('Country', countrySchema);

export default Country;
