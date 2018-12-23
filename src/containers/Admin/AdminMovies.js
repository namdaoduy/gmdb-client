import React, { Component } from "react"
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'
import API from './../../services/apis'

export default class AdminMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  renderMovie = () => {
    return this.state.movies.map((movie) => (
      <Movie movie={movie} />
    ))
  }

  fetchMovies = () => {
    API.getMovies()
    .then(res => {
      console.log(res)
      this.setState({movies: res})
    })
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.fetchMovies();    
  }

  render() {
    return(
      <div className="admin-movies">
        <h1>CRUD Movie</h1>
        {
          this.renderMovie()
        }
      </div>
    )
  }
}

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie || {},
      editing: false
    }
  }

  onEdit = () => {
    this.setState({editing: true})
  }

  render() {
    if (this.state.editing) {
      return(
        <Card className="admin-movie">
          <CardBody>
            <table className="admin-table">
              <tbody>
                <tr>
                  <td>movie_id</td>
                  <td>{this.state.movie.movie_id}</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>{this.state.movie.name}</td>
                </tr>
                <tr>
                  <td>imdb_rating</td>
                  <td>{this.state.movie.imdb_rating}</td>
                </tr>
                <tr>
                  <td>age_rated</td>
                  <td>{this.state.movie.age_rated}</td>
                </tr>
                <tr>
                  <td>image_url</td>
                  <td>{this.state.movie.image_url}</td>
                </tr>
                <tr>
                  <td>trailer_url</td>
                  <td>{this.state.movie.trailer_url}</td>
                </tr>
                <tr>
                  <td>main_actors</td>
                  <td>{this.state.movie.main_actors}</td>
                </tr>
                <tr>
                  <td>types</td>
                  <td>{this.state.movie.types}</td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>{this.state.movie.description}</td>
                </tr>
                <tr>
                  <td>moveek_id</td>
                  <td>{this.state.movie.moveek_id}</td>
                </tr>
                <tr>
                  <td>duration</td>
                  <td>{this.state.movie.duration}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <Button onClick={this.onEdit} color="success" size="sm">Save</Button>
            <Button color="info" size="sm">Cancel</Button>
          </CardBody>
        </Card>
      )
    }
    else {
      return(
        <Card className="admin-movie">
          <CardBody>
            <table className="admin-table">
              <tbody>
                <tr>
                  <td>movie_id</td>
                  <td>{this.state.movie.movie_id}</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>{this.state.movie.name}</td>
                </tr>
                <tr>
                  <td>imdb_rating</td>
                  <td>{this.state.movie.imdb_rating}</td>
                </tr>
                <tr>
                  <td>age_rated</td>
                  <td>{this.state.movie.age_rated}</td>
                </tr>
                <tr>
                  <td>image_url</td>
                  <td>{this.state.movie.image_url}</td>
                </tr>
                <tr>
                  <td>trailer_url</td>
                  <td>{this.state.movie.trailer_url}</td>
                </tr>
                <tr>
                  <td>main_actors</td>
                  <td>{this.state.movie.main_actors}</td>
                </tr>
                <tr>
                  <td>types</td>
                  <td>{this.state.movie.types}</td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>{this.state.movie.description}</td>
                </tr>
                <tr>
                  <td>moveek_id</td>
                  <td>{this.state.movie.moveek_id}</td>
                </tr>
                <tr>
                  <td>duration</td>
                  <td>{this.state.movie.duration}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <Button color="primary" size="sm">Edit</Button>
            <Button color="danger" size="sm">Delete</Button>
          </CardBody>
        </Card>
      )
    }
  }
}

