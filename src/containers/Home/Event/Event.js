import React, { Component } from "react"
import "./event.css"

export default class Event extends Component {
  render() {
    return (
      <div className="home-event col-lg-4 col-md-6">
        <div className="event-inner">
          <div className="event-img-ctn">
            <img className="event-img" 
              src={require("./../../../assets/images/google.jpg")} alt="">
            </img>
          </div>
          <div className="event-des-ctn">
            <h3 className="event-des-title">
              [HÀ NỘI] - GOOGLE DIGITAL 4.0
            </h3>
            <div className="event-des-footer">
              <div className="event-des-place">
                HÀ NỘI
              </div>
              <div className="event-des-calendar">
                <div className="calendar-month">THÁNG 10</div>
                <div className="calendar-date">10</div>
                <div className="calendar-wd">Thứ 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}