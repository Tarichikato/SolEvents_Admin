import React, { Component } from 'react' ;
import { Button, Modal } from 'react-bootstrap';

export class PopupCreateVoyage extends Component {

    constructor(props) {
        super(props);
    }

render () {
    return (

        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Creer un Voyage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='container'>
            Etes vous sûr de vouloir creer un voyage ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={this.props.onSubmit}>Yes</Button>
        <Button variant="danger" onClick={this.props.onHide}>No,close</Button>
      </Modal.Footer>
    </Modal>

    );
}

}

 export default PopupCreateVoyage;
