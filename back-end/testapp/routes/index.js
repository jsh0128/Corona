var express = require("express");
var router = express.Router();
const userController = require("../controller/index");
const cityApi = require("../controller/city");
const gender = require("../controller/gender");

router.get("/", userController.basicAPI);
router.get("/test", userController.testAPI);
router.get("/getCity", cityApi.getCity);
router.get("/getGender", gender.getGender);
router.post("/post_test", userController.postTestAPI);

module.exports = router;
