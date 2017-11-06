import React, { Component } from 'react'
import { Button, Collapse, CardBody, Card   } from 'reactstrap'
import Comment from './Comment'


class Comments extends Component {
  state = {
    collapse: false,
    comments: []
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
    console.log(this.props.id);
    this.initComments(this.props.id);
  }

  initComments(id) {
    //this.setState({isPostsLoading: true});
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+id)
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          //isPostsLoading: false,
          comments: jsonData
        });
        //console.log(jsonData, 'comments');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle} className='comments-button'>Comments</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody className='comments-body'>
              {
                this.state.comments.map(comment => (
                  <Comment item={comment} key={'comment'+comment.id}/>
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
