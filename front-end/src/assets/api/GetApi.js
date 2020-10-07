import axios from "axios";

class GetApi {
  async getCity() {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/getCity`);
    return data;
  }

  async getHostpial() {
    const data = await axios.get(`http://localhost:3001/getHostpial`);
    return data;
  }

  async getGender() {
    const data = await axios.get(`http://localhost:3001/getGender`);
    return data;
  }
}
export default new GetApi();
