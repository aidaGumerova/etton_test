import React, { Component } from 'react'
import { ListGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Album from "./Album";

class Albums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPostsLoading: false,
      albums: []
    };
  }

  componentDidMount() {
    this.initPosts();
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  initPosts() {
    this.setState({isPostsLoading: true});
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isPostsLoading: false,
          albums: jsonData
        });
        console.log(jsonData);
      })
      .catch(error => console.log(error));
  }

  render() {//item={album}
    return (
      <ListGroup>
        {
          this.state.isPostsLoading
          ?
          <div className="text-center">
            <div className="loader"></div>
          </div>
          :
          <div className="justify-content-center">
            <Breadcrumb tag="nav" className='App-breadcrumb'>
              <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
              <BreadcrumbItem >Albums</BreadcrumbItem>
            </Breadcrumb>
            <h1>Albums</h1>
            <div className="col">
              {
                this.state.albums.map(album => (
                  <Album key={album.id} item={album} className={'col-xs-4'}/>
                ))
              }
            </div>
          </div>
        }
      </ListGroup>
    );
  }
}

export default Albums;
