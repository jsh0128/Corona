import Gender from "components/Gender/Gender"
import React, { useCallback, useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
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
    console.log(data)
    console.log(data.data.data.response)
    return data.data.data.response.body.items
  }

  const apiSet = useCallback((response) => {
    for (let i = 0; i < 11; i++) {
      let data = {
        age: response.item[i].gubun, //gubun
        checkCount: response.item[i].confCase, //confCase
        checkRate: response.item[i].confCaseRate, //confCaseRate
        deathCount: response.item[i].death, //death
        deathRate: response.item[i].deathRate, //deathRate
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
            color={"#004CB8"}
            height={"10%"}
            width={"6%"}
          />
        </div>
      )}
    </div>
  )
}

export default GenderContainer
