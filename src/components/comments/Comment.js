import React, { Component } from 'react'
import { Collapse, CardBody } from 'reactstrap'

class Comment extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const {
      comment
    } = this.props;

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