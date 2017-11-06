import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
import Comments from '../comments/Comments'

class Post extends Component {

  render() {

    const {
      post
    } = this.props;

    return (
      <ListGroupItem key={'post' + post.id} className="post-box">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.body}</p>
        <Comments post={post}/>
      </ListGroupItem>
    )
  }
}

export default Post;
