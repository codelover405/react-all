const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/full-stack", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = database;
