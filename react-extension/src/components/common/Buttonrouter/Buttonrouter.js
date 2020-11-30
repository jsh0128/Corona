import React from "react"
import { withRouter } from "react-router-dom"
import { goTo } from "react-chrome-extension-router"
import "./Buttonrouter.scss"
import MainPage from "../../../pages/MainPage"
import GenderPage from "../../../pages/GenderPage"
import HostpialPage from "../../../pages/HostpialPage"

const router = ({ history, main, gender, hostpial }) => {
  return (
    <div className="Button">
      <button
        className={main}
        onClick={() => {
          goTo(MainPage)
        }}
      >
        지역별
      </button>
      <button
        className={gender}
        onClick={() => {
          goTo(GenderPage)
        }}
      >
        성별/나이
      </button>
      <button
        className={hostpial}
        onClick={() => {
          goTo(HostpialPage)
        }}
      >
        코로나 병원
      </button>
    </div>
  )
}

export default withRouter(router)
