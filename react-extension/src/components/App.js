import React from "react"
import GenderPage from "../pages/GenderPage"
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
