import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

class Album extends Component {

  render() {

    const {
      album
    } = this.props;

    return (
      <div>
        <div className="comment-box">
          <ListGroupItem className="post-box">
            <h3>{album.title}</h3>
            <Link to={`/album/${album.id}`} className="btn btn-sm comments-button btn-primary">Show</Link>
          </ListGroupItem>
        </div>
      </div>
    )
  }
}

export default Album