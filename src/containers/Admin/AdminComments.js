import React, { Component } from "react"
import { Button, Card, CardBody, CardText } from 'mdbreact'
import { Form, Text, TextArea } from 'informed' 
import Rating from 'react-rating'
import API from './../../services/apis'

export default class AdminComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      selects: []
    }
  }

  selectMovie = (val) => {
    const movie_id = val.target.value;
    this.fetchComments(movie_id)
  }

  renderComment = () => {
    if (this.state.comments.length === 0) return <h2 style={{color: "white"}}>Không có kết quả</h2>
    return this.state.comments.map((comment) => (
      <Comment comment={comment} />
    ))
  }

  renderSelect = () => {
    return this.state.selects.map((select) => (
      <option value={select.movie_id}>{select.name}</option>
    ))
  }

  fetchComments = (movie_id) => {
    API.getComments(movie_id)
    .then((res) => {
      console.log(res)
      this.setState({comments: res})
    })
    .catch(err => console.log(err))
  }

  fetchSelects = () => {
    API.getMovies()
    .then(res => {
      console.log(res)
      this.setState({selects: res})
    })
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.fetchSelects();
  }

  render() {
    return(
      <div className="admin-comment">
      <h1>Quản lý Comment</h1>
        <select className="browser-default custom-select"
          onChange={this.selectMovie}>
          <option disabled>Chọn phim</option>
          {
            this.renderSelect()
          }
        </select>
        {
          this.renderComment()
        }
      </div>
    )
  }
}

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment || {}
    }
  }

  render() {
    return(
      <Card className="comment-card">
        <CardBody>
          <Rating 
            initialRating={this.state.comment.point}
            readonly
            className="rating-stars small"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
          <div className="comment-name">
            {this.state.comment.name}
          </div>
          <hr />
          <CardText>
            {this.state.comment.comment}
          </CardText>
          <hr />
          <Button color="danger" size="sm">Hide</Button>
          <Button color="primary" size="sm">Show</Button>

        </CardBody>
      </Card>
    )
  }
}



