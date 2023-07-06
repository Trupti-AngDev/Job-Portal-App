import { Country } from 'country-state-city';
import { State } from 'country-state-city';
import { City } from 'country-state-city';
import { MongoClient } from 'mongodb';

//console.log(Country.getAllCountries())

//console.log(State.getAllStates())

//console.log(City.getAllCities())

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB server');
    
    const db = client.db('dependentData')
    const countriesCollection = db.collection('countries');
    const statesCollection = db.collection('states');
    const citiesCollection = db.collection('cities')

    const countries = Country.getAllCountries();

    const states = State.getAllStates()

    const cities = City.getAllCities()
    console.log(State.getAllStates())


    const countriesBulk = countries.map(country => ({
        insertOne: {
          document: {
            name: country.name,
            short_name: country.isoCode
          }
        }
      }));

      const statesBulk = states.map(state => ({
        insertOne: {
          document: {
            name: state.name,
            country_short_name: state.countryCode,
            state_short_name: state.isoCode
          }
        }
      }));

      const citiesBulk = cities.map(city => ({
        insertOne: {
            document: {
              name: city.name,
              state_short_name: city.stateCode
            }
          }
      }))

      const countryResult = await countriesCollection.bulkWrite(countriesBulk);
      console.log(`${countryResult.insertedCount} countries inserted`);

      const stateResult = await statesCollection.bulkWrite(statesBulk);
      console.log(`${stateResult.insertedCount} states inserted`)

      const cityResult = await citiesCollection.bulkWrite(citiesBulk);
      console.log(`${cityResult.insertedCount} cities inserted`)


    client.close(); // Close the connection when done
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase();
