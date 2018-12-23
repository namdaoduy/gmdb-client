import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./homemovie.css"

export default class HomeMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: this.props.movie || {}
    }
  }

  render() {
    return (
      <div className="home-movie col-lg-3 col-md-4 col-sm-6">
        <div className="home-movie-inner">
          <Link to={`/movie/${this.state.movie.movie_id}`}>
            <div className="home-movie-img-ctn">
              <img className="home-movie-img" 
                src={require("./../../../assets/images/venom.jpg")} alt="">
              </img>
            </div>
            <div className="home-movie-des-ctn">
              <h3 className="home-movie-des-title">
                {this.state.movie.name}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}