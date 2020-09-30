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
    getApi().then((response) => {
      // console.log(response);
      console.log(response.elements[0]);
      console.log(response.elements[0].elements[3].elements[0].text);
      console.log(
        response.elements.map((data) => {
          console.log(data.elements[3].elements[0].text);
        })
      );

      const abc = {
        name: "ababa",
        who: [1, 2, 3, 4],
      };
      console.log(
        abc.who.map((data) => {
          console.log(data);
        })
      );
    });
  }, []);
  return (
    <div>
      <City getApi={getApi} />
    </div>
  );
};

export default CityContainer;
