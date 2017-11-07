import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Photo from './Photo'

class PhotosList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      photos: [],
      album: {}
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    Promise.all([
      this.initAlbum(),
      this.initPhotos()
    ]).then(() => {
      this.setState({isLoading: false})
    }).catch(error => console.log(error));
  }

  initPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos?albumId='.concat(this.props.match.params.albumId))
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          photos: jsonData
        });
      })
      .catch(error => console.log(error));
  }

  initAlbum() {
    return fetch('https://jsonplaceholder.typicode.com/albums/'.concat(this.props.match.params.albumId))
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          album: jsonData
        });
      })
      .catch(error => console.log(error));
  }

  render() {

    const {
      album,
      photos
    } = this.state;

    return (
      this.state.isLoading
      ?
      <div className="text-center">
        <div className="loader"></div>
        <span>Loading...</span>
      </div>
      :
      <div>
        <Breadcrumb tag="nav" className='App-breadcrumb'>
          <Link tag="a" className="breadcrumb-item" to={'/'}>Home</Link>
          <Link tag="a" className="breadcrumb-item" to={'/albums'}>Albums</Link>
          <BreadcrumbItem >Album #{album.id} : {album.title}</BreadcrumbItem>
        </Breadcrumb>
        <h1>Album</h1>
        <div className={'row album'}>
          {
            photos.map(photo => (
              <Photo photo={photo} key={photo.id}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default PhotosList