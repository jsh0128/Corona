import React, { useEffect, useState } from "react";
import City from "components/City";
import axios from "axios";
import GetApi from "../../assets/api/GetApi";
// 확진자수 2 지역 3 전일대배 증가수 3 사망자 수 1

const CITY_COUNT = 19;
let newAll = {};
let all = []

const CityContainer = () => {
  const [newInformation, setNewInformation] = useState({
    area: "",
    check: 0,
    increase: 0,
    death: 0,
  });
  const [api, setApi] = useState(true);
  const [idx, setIdx] = useState(0);
  const [informatin, setInformation] = useState([]);
  const [area, setArea] = useState("");
  const [check, setCheck] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [death, setDeath] = useState(0);

  const getApi = async () => {
    const data = await GetApi.getCity();
    return data.elements[0].elements[1].elements[0];
  };

  const cityInformation = (response) => {
    if (idx < 1) {
      for (let i = 0; i < CITY_COUNT; i++) {
        setArea(response.elements[i].elements[3].elements[0].text);
        setCheck(response.elements[i].elements[2].elements[0].text);
        setIncrease(response.elements[i].elements[6].elements[0].text);
        setDeath(response.elements[i].elements[1].elements[0].text);
        setNewInformation({
          area: area,
          check: check,
          increase: increase,
          death: death,
        });
        if (idx === 0) {
          setInformation({});
          setIdx(idx + 1);
        } else {
          setInformation({ ...informatin, idx: newInformation });
          setIdx(idx + 1);
        }
      }
    }
  };

  useEffect(() => {
    getApi().then((response) => {
      // cityInformation(response);
      for (let i = 0; i < 19; i++) {
       let data = {
          area: response.elements[i].elements[3].elements[0].text,
          check: response.elements[i].elements[2].elements[0].text,
          update: response.elements[i].elements[6].elements[0].text,
          death: response.elements[i].elements[1].elements[0].text,
        }
        all =[  ...all, data ]
      }
      console.log(all);
    });
  }, []);

  // useEffect(() => {
  //   console.log("나");
  //   if (api === true) {
  //     console.log("다");
  //     setApi(false);
  //   } else {
  //     console.log("라");

  //     // cityInformation();
  //   }
  // }, [area, check, increase, death]);

  return (
    <div>
      <City getApi={getApi} />
    </div>
  );
};

export default CityContainer;
