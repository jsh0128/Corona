import Gender from "components/Gender/Gender"
import React, { useCallback, useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import axios from "axios"
import ReactLoading from "react-loading"
import "../../util/util.scss"

// 0~10번까지
// 확진자 0번째 확진률 1번째   사망한사람 4번째 사망률 5번째 나이 6번째
let all = []

const GenderContainer = () => {
  const [order, setOrder] = useState(0)
  const [coronaGender, setCoronaGender] = useState([])
  const getApi = async () => {
    const data = await GetApi.getGender()
    return data.data.data.elements[0].elements[1].elements[0]
  }

  const apiSet = useCallback((response) => {
    for (let i = 0; i < 11; i++) {
      let data = {
        age: response.elements[i].elements[6].elements[0].text,
        checkCount: response.elements[i].elements[0].elements[0].text,
        checkRate: response.elements[i].elements[1].elements[0].text,
        deathCount: response.elements[i].elements[4].elements[0].text,
        deathRate: response.elements[i].elements[5].elements[0].text,
      }
      all = [...all, data]
      setCoronaGender(all)
    }
  }, [])

  useEffect(() => {
    getApi().then((response) => {
      apiSet(response)
    })
  }, [])

  return (
    <div>
      {coronaGender.length >= 11 ? (
        <Gender coronaGender={coronaGender} order={order} setOrder={setOrder} />
      ) : (
        <div className="loading">
          <ReactLoading
            type={"cubes"}
            color={"#5D9BFC"}
            height={"10%"}
            width={"10%"}
          />
        </div>
      )}
    </div>
  )
}

export default GenderContainer
