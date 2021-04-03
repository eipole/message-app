import Login from "./pages/Login"
import Signup from "./pages/Signup"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function UnAuthApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
