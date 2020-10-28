import React from "react"
import PropTypes from "prop-types"
import "./Gender.scss"
import gender from "../../models/gender"
import Buttonrouter from "components/common/Buttonrouter/Buttonrouter"
import { easeQuadInOut } from "d3-ease"
import { CircularProgressbar } from "react-circular-progressbar"
import Circle from "components/common/circle/Circle"

const Gender = ({ coronaGender, order, setOrder }) => {
  return (
    <>
      <div className="center">
        <div className="Gender">
          <div className="Gender-text">
            <span className="Gender-text-span">
              <span className="Gender-text-span-bold">
                {order >= 9 ? (
                  <span>{coronaGender[order].age}</span>
                ) : (
                  <span>{coronaGender[order].age}세 </span>
                )}
              </span>
              의 코로나 정보를 나타냅니다
            </span>
          </div>
          <div className="Gender-select">
            <select
              onChange={(e) => {
                setOrder(e.target.value)
              }}
            >
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
              {order >= 9 ? (
                <Circle
                  className="Gender-bottom-circle-check"
                  total={coronaGender[order].checkRate}
                  maxValue={100}
                  name={"확진률"}
                  pathColor={"#C8DAFF"}
                  trailColor={"#93B6FF"}
                  textColor={"#5E8AC8"}
                />
              ) : (
                <Circle
                  className="Gender-bottom-circle-check"
                  total={coronaGender[order].checkRate}
                  maxValue={25}
                  name={"확진률"}
                  pathColor={"#C8DAFF"}
                  trailColor={"#93B6FF"}
                  textColor={"#5E8AC8"}
                />
              )}
              <Circle
                className="Gender-bottom-circle-check"
                total={coronaGender[order].deathRate}
                name={"사망률"}
                pathColor={"#FFC8C8"}
                trailColor={"#FFEFEF"}
                textColor={"#A14040"}
              />
            </div>
            <div className="Gender-bottom-count">
              <div className="Gender-bottom-count-check">
                <span>{coronaGender[order].checkCount}</span>
              </div>
              <div className="Gender-bottom-count-death">
                {coronaGender[order].deathCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Gender.propTypes = {}

export default Gender
