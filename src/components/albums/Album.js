import React, { Component } from 'react'
import { Button, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom' // Router

class Album extends Component {

  render() {
    return (
      <div className="comment-box">
        <ListGroupItem className="post-box">
          <h3>{this.props.item.title}</h3>
          <Link to={`/album/${this.props.item.id}`} className="btn btn-sm comments-button btn-primary">Посмотреть</Link>
        </ListGroupItem>
      </div>
    )
  }
}

export default Album