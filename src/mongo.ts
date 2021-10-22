// Import mongodb module
import * as mongodb from 'mongodb';
let MongoClient = mongodb.MongoClient;

// This example shows how we can find 'mammal' records in the MongoDB (mongo v.3.0 and higher)
MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
  if (err) throw err;

  let db = client.db('animals');
  db.collection('mamals').find().toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});