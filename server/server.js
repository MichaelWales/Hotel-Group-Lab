const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
const parser = require('body-parser');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('hotel_bookings');
  const guestsCollection = db.collection('bookings');
  const guestsRouter = createRouter(guestsCollection);
  app.use('/api/hotelbookings', guestsRouter);
})
.catch(console.error);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
