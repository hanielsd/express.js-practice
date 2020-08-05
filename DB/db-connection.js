const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/" + process.env.DB_NAME, {
      useNewUrlParser: true,
    });
    console.log("Connected...");
  } catch (err) {
    console.log("Could not connect...", err);
  }
}

module.exports = connect;
