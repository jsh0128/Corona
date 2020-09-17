var express = require("express");
var router = express.Router();
const userController = require("../controller/index");

router.get("/", userController.basicAPI);
router.get("/test", userController.testAPI);
router.post("/post_test", userController.postTestAPI);

module.exports = router;
