import React, { Component } from 'react'
import { ListGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Album from "./Album";
import { Link } from 'react-router-dom'

class AlbumsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAlbumsLoading: false,
      albums: []
    };
  }

  componentDidMount() {
    this.initPosts();
  }

  initPosts() {
    this.setState({isAlbumsLoading: true});
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isAlbumsLoading: false,
          albums: jsonData
        });
      })
      .catch(error => console.log(error));
  }

  render() {

    const {
      isAlbumsLoading,
      albums,
    } = this.state;

    return (
      <ListGroup>
        {
          isAlbumsLoading
          ?
          <div className="text-center">
            <div className="loader"></div>
          </div>
          :
          <div className="justify-content-center">
            <Breadcrumb tag="nav" className='App-breadcrumb'>
              <Link tag="a" className="breadcrumb-item" to={'/'}>Home</Link>
              <BreadcrumbItem >Albums</BreadcrumbItem>
            </Breadcrumb>
            <h1>Albums</h1>
            <div className="col">
              {
                albums.map(album => (
                  <Album key={album.id} album={album} className={'col-xs-4'}/>
                ))
              }
            </div>
          </div>
        }
      </ListGroup>
    );
  }
}

export default AlbumsList;
