import React from "react"
import MainPage from "../pages/MainPage"
import GenderPage from "../pages/GenderPage"
import HostpialPage from "../pages/HostpialPage"
import { Router } from "react-chrome-extension-router"

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage />
        <GenderPage />
        <HostpialPage />
      </Router>
    </div>
  )
}

export default App
