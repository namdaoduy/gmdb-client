import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from "./../Home"
import { Login } from "./../Login"
import { Movie } from "./../Movie"
import { Admin } from "./../Admin"

export default class MainRouter extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route exact path="/movie/:movie_id" component={Movie}/>
          <Route path="/search/:search" render={(props) => <Home key={"home"+Date.now()} {...props}/>}/>
          <Route path="/type/:type" render={(props) => <Home key={"home"+Date.now()} {...props}/>}/>
        </div>
      </Router>
    )
  }
}
