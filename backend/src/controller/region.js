const { city_api } = require("../../config/config.json")
const xmlToJsonConverter = require("xml-js")
const axios = require("axios")
const { formatYYYYMMDD } = require("../util/dateUtil")

const GET_REGION_URL =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"

module.exports = async (req, res) => {
  const now = new Date()

  let formatedDate = formatYYYYMMDD(now)

  const body = {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: "20200410",
    endCreateDt: formatedDate,
  }
  const url = `${GET_REGION_URL}?ServiceKey=${city_api}`

  try {
    const response = await axios.get(url, body)
    const { data } = response

    res.status(200).json({
      data,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "서버 오류",
    })
  }
}
