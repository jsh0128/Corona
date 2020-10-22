import Gender from "components/Gender/Gender"
import React, { useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import axios from "axios"

// 0~10번까지
// 확진자 0번째 확진률 1번째   사망한사람 4번째 사망률 5번째 나이 6번째
let all = []

const GenderContainer = () => {
  const [coronaGender, setCoronaGender] = useState([])
  const getApi = async () => {
    const data = await GetApi.getGender()
    return data.data.data.elements[0].elements[1].elements[0]
  }

  const apiSet = (response) => {
    for (let i = 0; i < 11; i++) {
      let data = {}
      if (i < 9) {
        // 나이
        let data = {
          age: response.elements[i].elements[6].elements[0].text,
          checkCount: response.elements[i].elements[0].elements[0].text,
          checkRate: response.elements[i].elements[1].elements[0].text,
          deathCount: response.elements[i].elements[4].elements[0].text,
          deathRate: response.elements[i].elements[5].elements[0].text,
        }
      } else {
        // 성별
        let data = {
          Gender: response.elements[i].elements[6].elements[0].text,
          checkCount: response.elements[i].elements[0].elements[0].text,
          checkRate: response.elements[i].elements[1].elements[0].text,
          deathCount: response.elements[i].elements[4].elements[0].text,
          deathRate: response.elements[i].elements[5].elements[0].text,
        }
      }
      all = [...all, data]
      console.log(all)
      setCoronaGender(all)
    }
  }

  useEffect(() => {
    getApi().then((response) => {
      apiSet(response)
    })
  }, [])

  return (
    <div>
      <Gender coronaGender={coronaGender} />
    </div>
  )
}

export default GenderContainer
