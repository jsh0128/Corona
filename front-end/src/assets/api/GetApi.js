import axios from "axios"

class GetApi {
  async getCity() {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/region/infectee`)
    return data
  }

  async getGender() {
    const data = await axios.get(`http://localhost:8080/gender/infectee`)
    return data
  }
  async getHostpial() {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/hostpial`)
    return data
  }
}
export default new GetApi()
