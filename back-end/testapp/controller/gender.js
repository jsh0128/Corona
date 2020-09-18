const { api_key } = require("../config/config.json");

var request = require("request");

var url =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson";
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
  encodeURIComponent("20200310"); /* */
queryParams +=
  "&" +
  encodeURIComponent("endCreateDt") +
  "=" +
  encodeURIComponent("20200414"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log();
    // console.log("Status", response.statusCode);
    // console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
