var express = require("express");
var router = express.Router();
const userController = require("../controller/index");
const cityApi = require("../controller/city");
const gender = require("../controller/gender");
const hostpial = require("../controller/hostpial");

router.get("/", userController.basicAPI);
router.get("/test", userController.testAPI);
router.get("/getCity", cityApi.getCity);
router.get("/getGender", gender.getGender);
router.get("/getHostpial", hostpial.getHostipal);
router.post("/post_test", userController.postTestAPI);

module.exports = router;
