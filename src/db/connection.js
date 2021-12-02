// call mongoose by running npm i mongoose in termainal
const mongoose = require("mongoose");

//need to call from .env file with dotenv
require("dotenv").config();

//declare function
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successful database connection");
  } catch (error) {
    console.log(error);
  }
};

//need to call the function from above -
connection();
