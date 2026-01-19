const router = require("express").Router();
const { trackUser } = require("../controllers/user.controller");

router.post("/track", trackUser);

module.exports = router;