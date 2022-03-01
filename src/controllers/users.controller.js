const User = require("../models/users.models");

exports.signup = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json({ message: "Usuario creado", user });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

exports.list = async (req, res) => {
  try {
    User.find().then((users) => {
      res.json({
        content: users,
      });
    });
  } catch (e) {
    res.status(500).json({
      message: "Algo salió mal",
    });
  }
};

exports.update = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    const user = await User.findOneAndUpdate({ _id: userId }, body, {
      new: true,
    });
    if (!user) {
      res.status(403).json({ message: "El usuario no pudo ser actualizado." });
      return;
    }
    res.status(200).json({
      message: "Usuario actualizado.",
      user,
    });
  } catch (e) {
    res.status(400).json({ message: "El usuario no pudo ser actualizado." });
  }
};

exports.destroy = async (req, res) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(403).json({
        message: "El usuario no pudo ser eliminado",
      });
      return;
    }
    res.status(200).json({ message: "El usuario fue eliminado.", user });
  } catch (e) {
    res.status(400).json({ message: "El usuario no pudo ser eliminado." });
  }
};
