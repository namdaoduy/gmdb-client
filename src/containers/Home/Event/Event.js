import React, { Component } from "react"
import "./event.css"

export default class Event extends Component {
  render() {
    return (
      <div className="home-event col-lg-3 col-md-4 col-sm-6">
        <div className="event-inner">
          <div className="event-img-ctn">
            <img className="event-img" 
              src={require("./../../../assets/images/venom.jpg")} alt="">
            </img>
          </div>
          <div className="event-des-ctn">
            <h3 className="event-des-title">
              [HÀ NỘI] - GOOGLE DIGITAL 4.0
            </h3>
          </div>
        </div>
      </div>
    )
  }
}