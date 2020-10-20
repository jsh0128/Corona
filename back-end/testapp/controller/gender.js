const { api_key } = require("../config/config.json");

const convert = require("xml-js");

var request = require("request");

const getGender = (req, res) => {
  var now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  if (month < 10) {
    month = "0" + month;
    if (date < 10) {
      date = "0" + date;
    }
  } else {
    if (date < 10) {
      date = "0" + date;
    }
  }
  let time = year + "" + month + date;
  time = time - 0;
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson";
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + api_key; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("ServiceKey") +
    "=" +
    encodeURIComponent("-"); /*  */
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
    encodeURIComponent("20200310"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent(time); /* */

  request({
    url: url + queryParams,
    method: "GET",
  });
  url = url + queryParams;

  request.get(url, (err, response, body) => {
    if (err) {
      console.log(`err => ${err}`);
    } else {
      if (response.statusCode == 200) {
        var result = body;

        var xmlToJson = convert.xml2json(result);
        var data = JSON.parse(xmlToJson);

        res.status(200).json({
          data,
        });
      }
    }
  });
};

module.exports = {
  getGender: getGender,
};
