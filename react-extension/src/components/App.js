import React from "react"
import MainPage from "../pages/MainPage"
import GenderPage from "../pages/GenderPage"
import HostpialPage from "../pages/HostpialPage"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Router } from "react-chrome-extension-router"

function App() {
  return (
    <div className="App">
      <Router>
        <GenderPage />
      </Router>
    </div>
  )
}

export default App
