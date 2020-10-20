import Gender from "components/Gender/Gender";
import React, { useEffect } from "react";
import GetApi from "../../assets/api/GetApi"
import axios from "axios"

// 0~10번까지
// 확진자 0번째 확진률 1번째   사망한사람 4번째 사망률 5번째 나이 6번째
//elements[6].elements[0].text

const GenderContainer = () => {
  const getApi = async() => {
    const data = await GetApi.getGender()
    return data.data.data.elements[0].elements[1].elements[0]
  }
  useEffect(() => {
    getApi().then((response) => {
      for (let key = 0; key < 11; key++ ) {
        if (key <9) {
          console.log( "나이  "+response.elements[key].elements[6].elements[0].text)
          console.log( "확진자 수  "+response.elements[key].elements[0].elements[0].text)
          console.log( "확진률  "+response.elements[key].elements[1].elements[0].text)
          console.log( "사망한 사람수  "+response.elements[key].elements[4].elements[0].text)
          console.log( "사망률  "+response.elements[key].elements[5].elements[0].text)  
        }
        else{
          console.log( "성별  "+response.elements[key].elements[6].elements[0].text)
          console.log( "확진자 수  "+response.elements[key].elements[0].elements[0].text)
          console.log( "확진률  "+response.elements[key].elements[1].elements[0].text)
          console.log( "사망한 사람수  "+response.elements[key].elements[4].elements[0].text)
          console.log( "사망률  "+response.elements[key].elements[5].elements[0].text)  
        }
      }
    })
  },[])
  return (
    <div>
      <Gender />
    </div>
  );
};

export default GenderContainer;
