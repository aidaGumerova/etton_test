import React, { Component } from 'react'
import { Button, Card, CardImg, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPhotosLoading: false,
      modal: false,
      photos: []
    };
    this.toggle = this.toggle.bind(this);
    this.initPhotos();
  }

  initPhotos() {

    fetch('https://jsonplaceholder.typicode.com/photos/'.concat(this.props.match.params.albumId))
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isPhotosLoading: false,
          photos: jsonData,
          modal: false
        });
        console.log(jsonData);
      })
      .catch(error => console.log(error));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div>
        <Card>
          <CardImg top src={this.state.photos.thumbnailUrl} alt={this.state.photos.title} />
          <CardBody>
            <CardTitle>{this.state.photos.title}</CardTitle>
            <Button onClick={this.toggle}>Button</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                <CardImg top src={this.state.photos.url} alt={this.state.photos.title} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Photos