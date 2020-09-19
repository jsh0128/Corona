const { api_key } = require("../config/config.json");

var request = require("request");
const { map } = require("../app");
var parseString = require("xml2js").parseString;

let cityData = "";

let getCity = (req, res) => {};

var url =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
var queryParams =
  "?" + encodeURIComponent("ServiceKey") + api_key; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("ServiceKey") + "=" + encodeURIComponent("-"); /* */
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
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

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  (getCity = (error, response, body) => {
    // console.log("Status", response.statusCode);
    // console.log("Headers", JSON.stringify(response.headers));
    // console.log("Reponse received", body);

    // console.log("asdfdf");

    parseString(body, function (err, result) {
      // console.log(result);
      cityData = result.response.body[0].items[0];
    });

    message: cityData;
  })
);

module.exports = {
  getCity: getCity,
};
