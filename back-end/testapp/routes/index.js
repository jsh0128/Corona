var express = require("express");
var router = express.Router();
const userController = require("../controller/index");
const cityApi = require("../controller/city");

router.get("/", userController.basicAPI);
router.get("/test", userController.testAPI);
router.get("/getCity", cityApi.getCity);
router.post("/post_test", userController.postTestAPI);

module.exports = router;
