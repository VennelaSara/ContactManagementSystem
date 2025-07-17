const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connection Successful!");
  } catch (err) {
    console.log("Database connection Failed");
  }
};
module.exports = connectDb;
