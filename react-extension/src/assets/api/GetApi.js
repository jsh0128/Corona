import axios from "axios"

class GetApi {
  async getCity() {
    try {
      const {
        data: { data },
      } = await axios.get(`http://13.58.35.118:8080/region/infectee`)
      return data
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async getGender() {
    try {
      const data = await axios.get(`http://13.58.35.118:8080/gender/infectee`)
      return data
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async getHostpial() {
    try {
      const {
        data: { data },
      } = await axios.get(`http://13.58.35.118:8080/hostpial`)
      return data
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
export default new GetApi()
