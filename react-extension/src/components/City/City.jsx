import React from "react"
// import PropTypes from "prop-types"
import "./City.scss"
import ButtonRouter from "../common/Buttonrouter/Buttonrouter"
import { ReactComponent as Virus } from "../../assets/images/virus.svg"
import { ReactComponent as Increase } from "../../assets/images/increase.svg"
import { ReactComponent as Death } from "../../assets/images/death.svg"
import cities from "../../models/cities"
import "../../util/util.scss"

const City = ({ corona, index, setIndex }) => {
  return (
    <div className="center">
      <div className="City">
        <div className="City_top">
          <select
            className="City_top_select"
            onChange={(e) => setIndex(e.target.value)}
          >
            {cities.map((city, i) => (
              <option value={i} key={i}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="text">
          <div className="City_text">
            <span className="City_text_span">
              {corona[index].area}의 코로나 정보를 표시합니다
            </span>
          </div>
          <ButtonRouter
            main={"onClick"}
            gender={"notClick"}
            hostpial={"notClick"}
          />
        </div>
        <div className="City_bottom">
          <div className="City_bottom_check">
            <div>
              <span className="City_bottom_check_name">확진자 수</span>
              <span className="City_bottom_check_person">
                {corona[index].check}명
              </span>
            </div>
            <Virus className="City_bottom_check_img" />
          </div>
          <div className="City_bottom_death">
            <div>
              <span className="City_bottom_death_name">사망자 수</span>
              <span className="City_bottom_death_person">
                {corona[index].death}명
              </span>
            </div>
            <Death className="City_bottom_death_img" />
          </div>
          <div className="City_bottom_update">
            <div>
              <span className="City_bottom_update_name">전일대비 증가수</span>
              <span className="City_bottom_update_person">
                {corona[index].update}명
              </span>
            </div>
            <Increase className="City_bottom_update_img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default City
