import React, { useEffect } from "react";
import City from "components/City";
import axios from "axios";
import GetApi from "../../assets/api/GetApi";

const CityContainer = () => {
  const getApi = async () => {
    const data = await GetApi.getCity();
    return data.elements[0].elements[1].elements[0];
  };
  useEffect(() => {
    getApi().then((response) => {
      // 확진자수 2 지역 3 전일대배 증가수 3 사망자 수 1
      for (let i = 0; i < 19; i++) {
        // console.log(response.elements[i]);
        console.log(
          " 지역 : " + response.elements[i].elements[3].elements[0].text
        );
        console.log(
          " 확진자수 : " + response.elements[i].elements[2].elements[0].text
        );
        console.log(
          " 전일대비 증가수: " +
            response.elements[i].elements[6].elements[0].text
        );
        console.log(
          " 사망자 수 : " + response.elements[i].elements[1].elements[0].text
        );
      }
    });
  }, []);
  return (
    <div>
      <City getApi={getApi} />
    </div>
  );
};

export default CityContainer;
