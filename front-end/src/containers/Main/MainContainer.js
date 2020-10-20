import React, { useCallback, useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import GetApi from "../../assets/api/GetApi"
import axios from "axios"
import City from "components/City/City"
import "../../util/util.scss"

const CITY_COUNT = 19
let newAll = {}
let all = []

const MainContainer = () => {
  const [index, setIndex] = useState(18)
  const [corona, setCorona] = useState([])

  const changeIndex = useCallback((e) => {
    if (e === "0") {
      setIndex(18);
      console.log("전체입니다")
    }
    else if (e === "18") {
      setIndex(0);
    }
    else{
      setIndex(e);
    }
  })

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
  

  return <div>{corona.length >= 19 ?
     <City corona={corona}
      index={index} 
      changeIndex={changeIndex}
      /> :
      <div className="loading">
        <span className="loading_span">로딩중입니다..</span>
      </div>
     }</div>
}



export default inject("store")(observer(MainContainer))
