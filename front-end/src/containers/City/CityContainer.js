import React, { useEffect } from "react";
import City from "components/City";
import GetApi from "../../assets/api/GetApi";
// import axios from "axios";

const CityContainer = () => {
  const getApi = () => {
    const cityData = GetApi.getCity();
    console.log(cityData);
    console.log(adfafd);
  };
  useEffect(() => {
    console.log("adf");
    // console.log(GetApi.getCity());
  }, []);
  return (
    <div>
      <City getApi={getApi} />
    </div>
  );
};

export default CityContainer;
