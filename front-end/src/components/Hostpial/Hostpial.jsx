import React from "react"
import PropTypes from "prop-types"
import "./Hostpial.scss"
import Buttonrouter from "components/common/Buttonrouter/Buttonrouter"

const Hostpial = () => {
  return (
    <>
      <div>
        <div className="center">
          <div className="Hostpial">
            <div className="Hostpial-text">af</div>
            <div className="Hostpial-select">
              <select>
                <option>ㅁㄴㅇㄹ</option>
              </select>
              <Buttonrouter
                main={"notClick"}
                gender={"notClick"}
                hostpial={"onClick"}
              />
            </div>
            <div className="Hostpial-bottom"></div>
          </div>
        </div>
      </div>
    </>
  )
}

Hostpial.propTypes = {}

export default Hostpial
