import React from "react"
import PropTypes from "prop-types"
import "./Hostpial.scss"

const Hostpial = () => {
  return (
    <>
      <div>
        <div className="center">
          <div className="Gender">
            <div className="Gender-text"></div>
            <div className="Gender-bottom">
              <div className="Gender-bottom-circle"></div>
              <div className="Gender-bottom-count">
                <div className="Gender-bottom-count-check bottom-div">
                  <div className="bottom-title">
                    <span className="Gender-bottom-count-title">확진자 수</span>
                  </div>
                  <div className="bottom-count">
                    <span className="Gender-bottom-count-count"></span>
                  </div>
                </div>
                <div className="Gender-bottom-count-death bottom-div">
                  <div className="bottom-title">
                    <span className="Gender-bottom-count-title">사망자 수</span>
                  </div>
                  <div className="bottom-count">
                    <span className="Gender-bottom-count-count"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Hostpial.propTypes = {}

export default Hostpial
