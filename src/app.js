require("./db/connection");

const yargs = require("yargs");

const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovie,
} = require("./movie/movieMethods.js");

const app = async (args) => {
  switch (process.argv[2]) {
    case "add":
      addMovie({
        title: args.title,
        actor: args.actor,
        rating: args.rating,
        genre: args.genre,
      });
      break;
    case "list":
      listMovies();
      break;
    case "update":
      updateMovies({
        title: args.title,
        actor: args.actor,
        rating: args.rating,
        genre: args.genre,
      });
      break;
    case "delete":
      deleteMovie({
        title: args.title,
        actor: args.actor,
        rating: args.rating,
        genre: args.genre,
      });
      break;
    default:
      console.log("Incorrect Command");
  }
};

app(yargs.argv);
