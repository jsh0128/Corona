import React, { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import GetApi from "../../assets/api/GetApi"
import axios from "axios"
import City from "components/City/City"

const CITY_COUNT = 19
let newAll = {}
let all = []

const MainContainer = () => {
  const [corona, setCorona] = useState([])

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
      setCorona(all)
    }
    console.log(all)
  }

  useEffect(() => {
    getApi().then((response) => {
      cityInformation(response)
    })
  }, [])

  return <div>{corona.length >= 19 ? <City corona={corona} /> : <span>...Loading</span>}</div>
}

export default inject("store")(observer(MainContainer))
