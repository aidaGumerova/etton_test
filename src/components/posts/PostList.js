import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Comments from './Comments'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostsLoading: false,
      posts: []
    };
  }

  componentDidMount() {
    this.initPosts();
  }

  initPosts() {
    this.setState({isPostsLoading: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isPostsLoading: false,
          posts: jsonData
        });
        //console.log(jsonData);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ListGroup>
        {
          this.state.isPostsLoading
            ?
            <div className="text-center">
              <div className="loader"></div>
              <span>Loading...</span>
            </div>
            :
            <div className="justify-content-center">
              <Breadcrumb tag="nav" className='App-breadcrumb'>
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                <BreadcrumbItem >Posts</BreadcrumbItem>
              </Breadcrumb>
              <h1>Posts</h1>
              <div >
                {
                  this.state.posts.map(post => (
                    <ListGroupItem key={'post' + post.id} className="post-box col-xs-4">
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-body">{post.body}</p>
                      <Comments id={post.id}/>
                    </ListGroupItem>
                  ))
                }
              </div>
            </div>
        }
      </ListGroup>
    );
  }
}

export default PostList;
