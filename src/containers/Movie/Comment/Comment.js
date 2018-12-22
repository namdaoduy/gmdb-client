import React, { Component } from "react"
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'
import "./comment.css"
import Rating from 'react-rating'


export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 4,
      comment: 'something',
      name: 'quocta'
    }
  }


  render() {
    return (
      <div className="comment">
      <Card className="comment-card">
        <CardBody>
          <Rating 
            initialRating={this.state.point}
            readonly
            className="rating-stars small"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
          <div className="comment-name">
            {this.state.name}
          </div>
          <hr />
          <CardText>
            {this.state.comment}
          </CardText>

        </CardBody>
      </Card>
      </div>
    )
  }
}