import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import MainPage from "../pages/MainPage"
import GenderPage from "pages/GenderPage"
import HostpialPage from "pages/HostpialPage"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/gender" component={GenderPage} />
        <Route exact path="/hostpial" component={HostpialPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  )
}

export default App
