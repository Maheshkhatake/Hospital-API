const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://panditbhupendra219:5nPoRy22im44BvsO@cluster0.luviqaj.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
