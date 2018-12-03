import React, { Component } from "react"
import "./movie.css"
import { NavBar } from './../NavBar'
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: this.props.match.params.movie_id,
      event_name: "",
      event_time: "",
      event_location: "",
      event_location_detail: "",
      event_info: "",
      event_img: null,
      show: false,
    }
  }

  render() {
    return (
      <div className="movie">
        <NavBar />
        <div className="movie-header">
          <div className="movie-header-inner">
            <div className="movie-img"></div>
            <div className="movie-info">
              <h2 className="movie-name">Tên movie</h2>
              <h3 className="movie-name-eng">Movie name</h3>
            </div>
          </div>
        </div>

        <div className="movie-ctn">
          <div className="row">
          </div>
        </div>
      </div>
    )
  }
}