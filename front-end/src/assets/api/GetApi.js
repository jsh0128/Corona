import axios from "axios";
const GetApi = () => {
  const getCity = async () => {
    const data = await axios.get(`http://localhost:3000/getCity`);
    return data;
  };
  const getHostpial = async () => {
    const data = await axios.get(`http://localhost:3000/getHostpial`);
    return data;
  };
  const getGender = async () => {
    const data = await axios.get(`http://localhost:3000/getGender`);
    return data;
  };
};
export default GetApi;
