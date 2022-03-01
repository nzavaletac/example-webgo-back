const Events = require("../models/events.models");

exports.create = async (req, res) => {
  try {
    const { body } = req;
    const events = await Events.create(body);
    res.status(201).json({
      message: "Evento creado",
      events,
    });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};
