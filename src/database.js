const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/backgo");

  mongoose.connection.once("open", () => {
    console.log("Database successfully connected");
  });
  mongoose.connection.on("error", () => {
    console.log("Something ewnt wrong");
  });
}

module.exports = { connect };
