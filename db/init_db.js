// code to build and initialize DB goes here
const {
  client
  // other db methods
} = require('./index');

async function buildTables() {
  try {
    client.connect();

    // 😢 It'd be nice to see this today.
    // drop tables in correct order

    // build tables in correct order

  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
