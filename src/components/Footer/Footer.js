import React, { Component } from "react"
import "./footer.css"
import { Fa } from 'mdbreact';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row footer-row-1">
          <div className="col-md-3">
            <img className="footer-logo" src={require('./../../assets/images/GMDB.png')}></img>
          </div>
          <div className="col-md-3">
            <h5>GMDb</h5>
            <p>
              Best Web App for movie at Vietnam!
            </p>
          </div>
          <div className="col-md-3">
            <h5>Development Stack</h5>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Team</h5>
            <ul>
              <li>Dao Duy Nam</li>
              <li>Truong Anh Quoc</li>
              <li>Phung Viet Duy</li>
              <li>Nguyen Quang Hung</li>
              <li>Nguyen Van Thang</li>
            </ul>
          </div>
        </div>
        <div className="row footer-row-2">
          <h6>Copyright © 2018 namdaoduy - SpQuyt. All rights reserved.</h6>
        </div>
      </div>
    )
  }
}