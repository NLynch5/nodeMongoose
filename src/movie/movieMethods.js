//where our functions are going to live
const mongoose = require("mongoose");
const Movie = require("./movieModels.js");

//CRUD__CREATE
exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`Successfully added ${movie.title}`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

//CRUD _  READ
exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

// //CRUD _UPDATE
exports.updateMovies = async (movieId, movieObj) => {
  try {
    const movie = await Movie.findById;
    console.log(await Movie.findByIdAndUpdate({ _id: movieId._id }, movieObj), {
      upsert: true,
      new: true,
      runValidators: true,
    });
    console.log(`Updated ${movie.title}`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

//CRUD _ DELETE
exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne(movieObj);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};
