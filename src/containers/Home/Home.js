import React, { Component } from "react"
import "./home.css"
import { HomeMovie } from './HomeMovie'
import { Carousel } from './Carousel'
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Carousel />

        <div id="home-list" className="home-list">
          <div className="row">
            <HomeMovie />
            <HomeMovie />
            <HomeMovie />

            <HomeMovie />
            <HomeMovie />
            <HomeMovie />

            <HomeMovie />
            <HomeMovie />
            <HomeMovie />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}