import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import Album2 from "./Album2";

class Albums2 extends Component {

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
              <div className="col">
                {
                  this.state.albums.map(album => (
                    <Album2 key={album.id} item={album}/>
                  ))
                }
              </div>
            </div>
        }
      </ListGroup>
    );
  }
}

export default Albums2;
