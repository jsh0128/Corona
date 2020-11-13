const { api_key } = require("../../config/config.json")
const xmlToJsonConverter = require("xml-js")
const axios = require("axios")

const GET_HOSTPIAL_URL =
  "http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList"

module.exports = async (req, res) => {
  const now = new Date()

  const body = {
    pageNo: 1,
    numOfRows: 20,
    spclAdmTyCd: "A0",
  }

  const url = `${GET_HOSTPIAL_URL}?ServiceKey=${api_key}`

  console.log("asdf")

  try {
    const response = await axios.get(
      url,
      body
      //    {
      //   params: {
      //     pageNo: 1,
      //     numOfRows: 10,
      //     spclAdmTyCd: "A0",
      //   },
      // }
    )
    const { data } = response

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
