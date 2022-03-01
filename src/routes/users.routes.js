const router = require("express").Router();
const {
  signup,
  list,
  update,
  destroy,
} = require("../controllers/users.controller");

router.route("/signup").post(signup);
router.route("/").get(list);
router.route("/:userId").put(update).delete(destroy);

module.exports = router;
