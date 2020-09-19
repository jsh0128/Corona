var express = require("express");
var router = express.Router();
const userController = require("../controller/index");
const getCity = require("../controller/city");

router.get("/", userController.basicAPI);
router.get("/test", userController.testAPI);
router.post("/post_test", userController.postTestAPI);
// router.get("/getCity", getCity.getCity);

module.exports = router;
