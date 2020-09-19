const { api_key } = require("../config/config.json");

var request = require("request");
const { map } = require("../app");
var parseString = require("xml2js").parseString;

var asdf;

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
  // function (error, response, body) {
  //   console.log("Status", response.statusCode);
  //   //console.log('Headers', JSON.stringify(response.headers));
  //   //console.log('Reponse received', body);
  // }
  (getCity = (error, response, body) => {
    // console.log("Status", response.statusCode);
    // console.log("Headers", JSON.stringify(response.headers));
    // console.log("Reponse received", body);

    parseString(body, function (err, result) {
      const asdf = result.response.body[0].items[0];
    });
    console.log(adsf);

    // message:
  })
);

module.exports = {
  getCity: this.getCity,
};
