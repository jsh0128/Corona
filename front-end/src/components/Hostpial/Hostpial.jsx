import React from "react"
import PropTypes from "prop-types"
import "./Hostpial.scss"
import Buttonrouter from "components/common/Buttonrouter/Buttonrouter"

const Hostpial = ({ api }) => {
  return (
    <>
      <div>
        <div className="center">
          <div className="Hostpial">
            <div className="Hostpial-text">
              <span className="Hostpial-text-span">
                <span className="Hostpial-text-span-count">10개의</span>
                국민안심병원 정보를 나타냅니다
              </span>
            </div>
            <div className="Hostpial-select">
              <select>
                <option>국민 안심병원</option>
              </select>
              <Buttonrouter
                main={"notClick"}
                gender={"notClick"}
                hostpial={"onClick"}
              />
            </div>
            <div className="Hostpial-bottom">
              {api.map((i) => (
                <div className="Hostpial-bottom-info">
                  <div className="Hostpial-bottom-info-city">
                    <span>{i.sidoNm}</span>
                  </div>
                  <div className="Hostpial-bottom-info-tel">
                    <span>{i.telno}</span>
                  </div>
                  <div className="Hostpial-bottom-info-name">
                    <span>{i.yadmNm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Hostpial.propTypes = {}

export default Hostpial
