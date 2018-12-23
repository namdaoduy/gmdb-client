import React, { Component } from "react"
import "./home.css"
import { HomeMovie } from './HomeMovie'
import { Carousel } from './Carousel'
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'
import API from './../../services/apis'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  fetchMovies = () => {
    API.getMovies()
    .then(res => {
      console.log(res)
      this.setState({movies: res})
    })
    .catch(err => console.log(err))
  }

  renderHomeMovie = () => {
    return this.state.movies.map((movie) => (
      <HomeMovie movie={movie} />
    ))
  }

  componentDidMount = () => {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="home">
        <NavBar />
        <Carousel />

        <div id="home-list" className="home-list">
          <div className="row">
            {this.renderHomeMovie()}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}