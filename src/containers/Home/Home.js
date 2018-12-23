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
      movies: [],
      title: "Danh sách phim đang chiếu"
    }
  }

  onSearch = (text) => {
    if (text) {
      API.getMoviesByName(text)
      .then(res => {
        this.setState({movies: []}, () => {
          this.setState({
            movies: res,
            title: `Tìm kiếm phim "${text}"`
          })
        })
      })
      .catch(err => console.log(err))
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
    if (this.state.movies.length === 0) return <p>Không có kết quả</p>
    return this.state.movies.map((movie, i) => (
      <HomeMovie movie={movie} />
    ))
  }

  componentDidMount = () => {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="home">
        <NavBar handleSubmit={this.onSearch.bind(this)}/>
        <Carousel />

        <div id="home-list" className="home-list">
          <h2>{this.state.title}</h2>
          <div className="row">
            {this.renderHomeMovie()}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}