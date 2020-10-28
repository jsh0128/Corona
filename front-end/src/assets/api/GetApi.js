import axios from "axios"

class GetApi {
  async getCity() {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/getCity`)
    return data
  }

  async getHostpial() {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/getHostpial`)
    return data
  }

  async getGender() {
    const data = await axios.get(`http://localhost:8080/getGender`)
    return data
  }
}
export default new GetApi()
