import React, { Component } from 'react'
import { Button, Collapse, CardBody, Card } from 'reactstrap'
import Comment from './Comment'


class Comments extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      comments: [],
      isCommentsLoading: false
    }
  }

  toggle() {

    if (!this.state.collapse) {
      this.initComments();
    }


    this.setState({ collapse: !this.state.collapse });
  }

  initComments() {
    this.setState({isCommentsLoading: true});

    fetch('https://jsonplaceholder.typicode.com/comments?postId='.concat(this.props.post.id))
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isCommentsLoading: false,
          comments: jsonData
        });
      })
      .catch(error => console.log(error));
  }

  render() {

    const {
      isCommentsLoading,
      comments
    } = this.state;

    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle} className='comments-button'>Comments</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody className='comments-body'>
              {
                isCommentsLoading
                ?
                <div className="text-center">
                  <div className="loader"></div>
                  <span>Loading...</span>
                </div>
                :
                comments.map(comment => (
                  <Comment comment={comment} key={comment.id}/>
                ))
              }
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Comments;
