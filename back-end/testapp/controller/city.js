const { api_key } = require("../config/config.json");

const convert = require("xml-js");
const request = require("request");

const { map } = require("../app");
var parseString = require("xml2js").parseString;

const getCity = (req, res) => {
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
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
    encodeURIComponent("startCreateDt") +
    "=" +
    encodeURIComponent("20200410"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent("20200410"); /* */

  url = url + queryParams;

  request.get(url, (err, response, body) => {
    if (err) {
      console.log(`err => ${err}`);
    } else {
      if (response.statusCode == 200) {
        var result = body;
        // console.log(`body data => ${result}`);

        var xmlToJson = convert.xml2json(result);
        res.status(200).json({
          message: xmlToJson,
        });
        // console.log(`xml to json => ${xmlToJson}`);
      }
    }
  });
};

module.exports = {
  getCity: getCity,
};
