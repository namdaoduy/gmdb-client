import React, { Component } from "react"
import { Button, Card, CardBody } from 'mdbreact'
import { Form, Text, TextArea } from 'informed' 
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
      movie_edit: {},
      editing: false
    }
  }

  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onEdit = () => {
    this.setState({editing: true})
  }

  onCancel = () => {
    this.setState({editing: false})
  }

  onDelete = () => {
    const del = window.confirm("Are you sure to delete this movie?");
    if (del) {
      API.deleteMovieById(this.state.movie.movie_id)
      .then(res => {
        window.location.reload()
      })
      .catch(err => console.log(err))
    }
  }

  onSubmit = (vals) => {
    API.putMovieById(vals)
    .then(res => {
      this.setState({
        editing: false,
        movie: vals
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    if (this.state.editing) {
      return(
        <Card className="admin-movie">
          <Form 
            initialValues={this.state.movie}
            onSubmit={this.onSubmit}>
          {({formState}) => (
            <CardBody>
              <table className="admin-table">
                <tbody>
                  <tr>
                    <td>movie_id</td>
                    <td>{this.state.movie.movie_id}</td>
                  </tr>
                  <tr>
                    <td>name</td>
                    <td><Text field="name" className={"admin-form-input" + (formState.errors.name ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>imdb_rating</td>
                    <td><Text field="imdb_rating" className={"admin-form-input" + (formState.errors.imdb_rating ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>age_rated</td>
                    <td><Text field="age_rated" className={"admin-form-input" + (formState.errors.age_rated ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>image_url</td>
                    <td>{this.state.movie.image_url}</td>
                  </tr>
                  <tr>
                    <td>trailer_url</td>
                    <td><Text field="trailer_url" className={"admin-form-input" + (formState.errors.trailer_url ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>main_actors</td>
                    <td><Text field="main_actors" className={"admin-form-input" + (formState.errors.main_actors ? " error" : "")}/></td>
                  </tr>
                  <tr>
                    <td>types</td>
                    <td><Text field="types" className={"admin-form-input" + (formState.errors.types ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>description</td>
                    <td><TextArea field="description" className={"admin-form-input" + (formState.errors.description ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                  <tr>
                    <td>moveek_id</td>
                    <td>{this.state.movie.moveek_id}</td>
                  </tr>
                  <tr>
                    <td>duration</td>
                    <td><Text field="duration" className={"admin-form-input" + (formState.errors.duration ? " error" : "")} 
                      validate={this.validateRequired}/></td>
                  </tr>
                </tbody>
                {/* <code>{JSON.stringify(formState)}</code> */}
              </table>
              <hr />
              <Button type="submit" color="success" size="sm">Save</Button>
              <Button onClick={this.onCancel} color="info" size="sm">Cancel</Button>
            </CardBody>
          )}
          </Form>
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
            <Button onClick={this.onEdit} color="primary" size="sm">Edit</Button>
            <Button onClick={this.onDelete} color="danger" size="sm">Delete</Button>
          </CardBody>
        </Card>
      )
    }
  }
}

