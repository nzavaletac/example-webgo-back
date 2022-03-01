const router = require("express").Router();
const { create } = require("../controllers/events.controllers");

router.route("/").post(create);

module.exports = router;
