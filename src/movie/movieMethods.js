//where our functions are going to live

const Movie = require("./movieModels.js");

//CRUD__CREATE

exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`Successfully added ${movie.title}`);
  } catch (error) {
    console.log(error);
  }
};

//CRUD _  READ
exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
  } catch (error) {
    console.log(error);
  }
};

// //CRUD _ DELETE
// exports.deleteMovie = async (movieObj) => {
//    movieObj.find({title:})
// }
