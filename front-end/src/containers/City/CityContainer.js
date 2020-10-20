import React, { useEffect, useState } from "react"
import City from "components/City"
import axios from "axios"
import GetApi from "../../assets/api/GetApi"
// 확진자수 2 지역 3 전일대배 증가수 3 사망자 수 1

const CITY_COUNT = 19
let newAll = {}
let all = []

const CityContainer = () => {
  const getApi = async () => {
    const data = await GetApi.getCity()
    return data.elements[0].elements[1].elements[0]
  }

  const cityInformation = (response) => {
    for (let i = 0; i < 19; i++) {
      let data = {
        area: response.elements[i].elements[3].elements[0].text,
        check: response.elements[i].elements[2].elements[0].text,
        update: response.elements[i].elements[6].elements[0].text,
        death: response.elements[i].elements[1].elements[0].text,
      }
      all = [...all, data]
    }
}

  useEffect(() => {
    getApi().then((response) => {
      cityInformation(response)
    })
  }, [])

  return (
    <div>
      <City getApi={getApi} />
    </div>
  )
}

export default CityContainer
