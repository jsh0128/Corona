import React from "react"
import { withRouter } from "react-router-dom"
import { goTo } from "react-chrome-extension-router"
import "./Buttonrouter.scss"

const router = ({ history, main, gender, hostpial }) => {
  return (
    <div className="Button">
      <button
        className={main}
        onClick={() => {
          goTo("/")
        }}
      >
        지역별
      </button>
      <button
        className={gender}
        onClick={() => {
          goTo("/gender")
        }}
      >
        성별/나이
      </button>
      <button
        className={hostpial}
        onClick={() => {
          goTo("/hostpial")
        }}
      >
        코로나 병원
      </button>
    </div>
  )
}

export default withRouter(router)
