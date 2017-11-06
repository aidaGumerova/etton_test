import React, { Component } from 'react'
import { Collapse, CardBody } from 'reactstrap'
import 'classnames/index'

class Comment extends Component {
  state = {
    comment: this.props.item
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { comment} = this.state;
    //let commentName = ['comment-name',{ 'active': !!this.state.collapse }];
    return (
      <div className="comment-box">
        <h4 className={!this.state.collapse ? 'comment-name': 'comment-name active'} onClick={this.toggle}>
          #{comment.id} {comment.name}<br/>
          <i className="comment-email">{comment.email}</i>
        </h4>
        <Collapse isOpen={this.state.collapse}>
          <CardBody>
            {comment.body}
          </CardBody>
        </Collapse>
      </div>
    );
  }
}

export default Comment;