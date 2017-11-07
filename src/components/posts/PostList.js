import React, { Component } from 'react'
import { ListGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Post from './Post'
import { Link } from 'react-router-dom'

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
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      this.state.isPostsLoading
        ?
        <div className="text-center">
          <div className="loader"></div>
          <span>Loading...</span>
        </div>
        :
        <div className="justify-content-center">
          <Breadcrumb tag="nav" className='App-breadcrumb'>
            <Link tag="a" className="breadcrumb-item" to={'/'}>Home</Link>
            <BreadcrumbItem >Posts</BreadcrumbItem>
          </Breadcrumb>
          <h1>Posts</h1>
          <div className='col'>
            <ListGroup>
            {
              this.state.posts.map(post => (
                <Post key={post.id} post={post} className="post-box col-xs-4" />
              ))
            }
            </ListGroup>
          </div>
        </div>
    );
  }
}

export default PostList;
