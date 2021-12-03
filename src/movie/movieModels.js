const mongoose = require("mongoose");

//create a Schema with a property (title)
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: String,
  },
  rating: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
