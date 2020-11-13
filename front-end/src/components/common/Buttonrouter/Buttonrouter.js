import React from "react"
import { withRouter } from "react-router-dom"
import "./Buttonrouter.scss"

const router = ({ history, main, gender, hostpial }) => {
  return (
    <div className="Button">
      <button
        className={main}
        onClick={() => {
          history.push("/")
        }}
      >
        지역별
      </button>
      <button
        className={gender}
        onClick={() => {
          history.push("/gender")
        }}
      >
        성별/나이
      </button>
      <button
        className={hostpial}
        onClick={() => {
          history.push("/hostpial")
        }}
      >
        코로나 병원
      </button>
    </div>
  )
}

export default withRouter(router)
