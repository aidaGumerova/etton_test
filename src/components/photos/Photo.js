import React, { Component } from 'react'
import { Card, CardImg, CardBody} from 'reactstrap'
import Lightbox from 'react-image-lightbox';

class Photo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {

    const {
      photo
    } = this.props;

    return (
        <Card onClick={this.toggle.bind(this)} className={'card-photo'}>
            <CardImg src={photo.thumbnailUrl} alt={photo.title}/>
            <CardBody>
                {photo.title}
                {
                  this.state.isOpen &&
                  <Lightbox
                    mainSrc={photo.url}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                  />
                }
            </CardBody>
        </Card>
    )
  }
}

export default Photo