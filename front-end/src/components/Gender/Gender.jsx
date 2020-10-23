import React from "react"
import PropTypes from "prop-types"
import "./Gender.scss"
import gender from "../../models/gender"
import Buttonrouter from "components/common/Buttonrouter/Buttonrouter"
import AnimatedProgressProvider from "../common/AnimatedProgressProvider "
import { easeQuadInOut } from "d3-ease"
import { CircularProgressbar } from "react-circular-progressbar"
import ShowTotalCommit from "components/common/circle/ShowTotalCommit"

const Gender = ({ coronaGender }) => {
  return (
    <>
      <div className="center">
        <div className="Gender">
          <div className="Gender-text">
            <span className="Gender-text-span">
              0~9세의 코로나 정보를 나타냅니다
            </span>
          </div>
          <div className="Gender-select">
            <select>
              {gender.map((order, i) => (
                <option value={i} key={i}>
                  {order}
                </option>
              ))}
            </select>
            <Buttonrouter />
          </div>
          <div className="Gender-bottom">
            <div className="Gender-bottom-circle">
              <div></div>
              <div></div>
            </div>
            <div className="Gender-bottom-count">
              <div className="Gender-bottom-count-check"></div>
              <div className="Gender-bottom-count-death"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Gender.propTypes = {}

export default Gender
