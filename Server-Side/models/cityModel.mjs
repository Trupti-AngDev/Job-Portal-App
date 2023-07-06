import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  // Schema definition goes here
  name: String,
  state_short_name: String,
});

const City = mongoose.model('City', citySchema);

export default City;
