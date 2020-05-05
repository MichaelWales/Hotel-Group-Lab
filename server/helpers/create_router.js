const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({ status: 500, error: error});
    });
  });

  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then(result => res.json(result.ops[0]))
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedBooking = req.body;
    collection.findOneAndUpdate(
      {_id: ObjectID(id)},
      {$set: updatedBooking},
      {returnOriginal: false}
    )
    .then(result => res.json(result.value))
  });

  return router;

}

module.exports = createRouter;
