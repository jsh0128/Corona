const { city_api } = require("../../config/config.json")
const xmlToJsonConverter = require("xml-js")
const axios = require("axios")
const { formatYYYYMMDD } = require("../util/dateUtil")
const fs = require("fs")
const path = require("path")

const GET_REGION_URL =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"

module.exports = async (req, res) => {
  const now = new Date()

  let formatedDate = formatYYYYMMDD(now)

  const params = {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: formatedDate,
    endCreateDt: formatedDate,
  }
  const url = `${GET_REGION_URL}?ServiceKey=${city_api}`

  try {
    const response = await axios.get(url, { params: params })
    const { data } = response

    let getCityData

    if (data.response.body.items === "") {
      let changeStringData = JSON.stringify(data)
      fs.writeFileSync("city-api.json", changeStringData)
    } else {
      getCityData = JSON.parse(fs.readFileSync("city-api.json"))
    }

    if (data.response.body.items) {
      res.status(200).json({
        data,
      })
    } else {
      res.status(200).json({
        getCityData,
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "서버 오류",
    })
  }
}
