import React, { Component } from "react"
import "./homemovie.css"

export default class HomeMovie extends Component {
  render() {
    return (
      <div className="home-movie col-lg-3 col-md-4 col-sm-6">
        <div className="home-movie-inner">
          <div className="home-movie-img-ctn">
            <img className="home-movie-img" 
              src={require("./../../../assets/images/venom.jpg")} alt="">
            </img>
          </div>
          <div className="home-movie-des-ctn">
            <h3 className="home-movie-des-title">
              [HÀ NỘI] - GOOGLE DIGITAL 4.0
            </h3>
          </div>
        </div>
      </div>
    )
  }
}