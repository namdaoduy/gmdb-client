import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from "./../Home"
import { Login } from "./../Login"

export default class MainRouter extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}
