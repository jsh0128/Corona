import React, { useEffect } from "react";
import City from "components/City";
// import GetApi from "../../assets/api/GetApi";
import axios from "axios";
// import axios from "axios";

const CityContainer = () => {
  const getApi = async () => {
    // const cityData = GetApi.getCity();
    // console.log(cityData);
    // console.log(adfafd);
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/getCity`);
    console.log();

    return data.elements[0].elements[1].elements[0];
  };
  useEffect(() => {
    getApi().then(
      (response) => {
        response.map((data) => {
          console.log(data);
        });
      }
      // data.map((data) => {
      //   console.log(data);
      // })
    );
  }, []);
  return (
    <div>
      <City getApi={getApi} />
    </div>
  );
};

export default CityContainer;
