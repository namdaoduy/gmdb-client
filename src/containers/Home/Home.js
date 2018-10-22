import React, { Component } from "react"
import "./home.css"
import { Event } from './Event'
import { NavBar } from './../NavBar'
import { Carousel } from './Carousel'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Carousel />

        <div id="home-list" className="home-list">
          <div className="row">
            <Event />
            <Event />
            <Event />

            <Event />
            <Event />
            <Event />

            <Event />
            <Event />
            <Event />
          </div>
        </div>
      </div>
    )
  }
}