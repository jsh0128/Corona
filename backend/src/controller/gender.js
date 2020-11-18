const { api_key } = require("../../config/config.json")
const xmlToJsonConverter = require("xml-js")
const axios = require("axios")
const { formatYYYYMMDD } = require("../util/dateUtil")

const GET_GENDER_URL =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson"

module.exports = async (req, res) => {
  const now = new Date()
  let formatedDate = formatYYYYMMDD(now)

  const params = {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: "20200310",
    endCreateDt: formatedDate,
  }

  const url = `${GET_GENDER_URL}?serviceKey=${api_key}`
  console.log(url)

  try {
    const response = await axios.get(url, { params: params })
    const { data } = response

    console.log(response)

    res.status(200).json({
      data,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "서버오류",
    })
  }
}
