import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import "./Buttonrouter.scss"

let buttonClick = "onClick"
let buttonNotClick = "notClick"
const router = ({ history }) => {
  const [area, setArea] = useState("notClick")
  const [gender, setGender] = useState("notClick")
  const [hostpial, setHostpial] = useState("notClick")
  const buttonChange = (numbers) => {
    if (numbers === 1) {
      setArea("onClick")
      setGender("notClick")
      setHostpial("notClick")
      history.push("/")
    } else if (numbers === 2) {
      setArea("notClick")
      setGender("onClick")
      setHostpial("notClick")
      history.push("/gender")
    } else if (numbers === 3) {
      setArea("notClick")
      setGender("notClick")
      setHostpial("onClick")
      history.push("/hostpial")
    }
  }
  return (
    <div className="Button">
      <button
        className={area}
        onClick={() => {
          buttonChange(1)
        }}
      >
        {" "}
        지역별{" "}
      </button>
      <button
        className={gender}
        onClick={() => {
          buttonChange(2)
        }}
      >
        {" "}
        성별/나이{" "}
      </button>
      <button
        className={hostpial}
        onClick={() => {
          buttonChange(3)
        }}
      >
        {" "}
        코로나 병원{" "}
      </button>
    </div>
  )
}

export default withRouter(router)
