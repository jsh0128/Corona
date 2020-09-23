const { api_key } = require("../config/config.json");

const convert = require("xml-js");
const request = require("request");

const { map } = require("../app");
// var parseString = require("xml2js").parseString;

const getHostipal = (req, res) => {
  var request = require("request");

  var url =
    "http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList";
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + api_key; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("ServiceKey") +
    "=" +
    encodeURIComponent("-"); /* */
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("10"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("spclAdmTyCd") +
    "=" +
    encodeURIComponent("A0"); /* */

  url = url + queryParams;

  request.get(url, (err, response, body) => {
    if (err) {
      console.log(`err => ${err}`);
    } else {
      if (response.statusCode == 200) {
        var result = body;
        // console.log(`body data => ${result}`);

        var xmlToJson = convert.xml2json(result);
        var data = JSON.parse(xmlToJson);

        res.status(200).json({
          // message: xmlToJson,
          data,
        });
        // console.log(`xml to json => ${xmlToJson}`);
      }
    }
  });
};

module.exports = {
  getHostipal: getHostipal,
};
