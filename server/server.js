const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
const parser = require('body-parser');

app.use(parser.json());
app.use(cors());



app.listen(3000, function() {
  console.log('Listening on port 3000');
});
