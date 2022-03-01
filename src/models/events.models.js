const { Schema, model } = require("mongoose");

const eventsSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    address: {
      type: String,
    },
    categories: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Events = model("Events", eventsSchema);

module.exports = Events;
