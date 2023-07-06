import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
  // Schema definition goes here
  name: String,
  country_short_name: String,
});

const State = mongoose.model('State', stateSchema);

export default State;
