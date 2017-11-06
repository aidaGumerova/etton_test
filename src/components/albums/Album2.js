import React, { Component } from 'react'
import { Button, Card, CardImg, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link } from 'react-router-dom' // Router

class Album2 extends Component {

  render() {
    return (
      <div className="comment-box">
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
/*<ListGroupItem >
         <h3>{this.props.item.title}</h3>
         <Link to={`/album/${this.props.item.id}`}><Button type='button'>Посмотреть</Button></Link>
       </ListGroupItem>*/
export default Album2