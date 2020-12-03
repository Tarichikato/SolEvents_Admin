import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, InputGroup, Card, ButtonGroup} from 'react-bootstrap';
import NavBar from './../assets/NavBar';


export class Home extends Component {

  


constructor(props) {
    super(props);

    
    this.onSubmitRenderVoyages = this.onSubmitRenderVoyages.bind(this);
    this.onSubmitCreateVoyage = this.onSubmitCreateVoyage.bind(this);
    this.onSubmitRenderVoyagesFaits = this.onSubmitRenderVoyagesFaits.bind(this);

    this.onSubmitRenderOwners = this.onSubmitRenderOwners.bind(this);
    this.onSubmitActions = this.onSubmitActions.bind(this);
    this.onSubmitAddAddress = this.onSubmitAddAddress.bind(this);


}

    render() {
        return(
            <div className="App">
      <header>
       <NavBar/>
      </header>

      <div className="container">
        <div className="row mt-5">
            <div className="col-lg-10 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Choisissez une fonction</h4>
                  <div className="card-body">
                    <p className="card-text">Avec cette application, vous avez la possibilité de choisir ce que vous voulez faire. Choisissez une fonction ci-dessous. </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>

    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 mb-4 grid-margin">
        <Card className="bg-dark text-white">
            <Card.Header as="h5">Voyages</Card.Header>
            <Card.Body>
                <Card.Title>Ces fonctions concernent les voyages</Card.Title>
                <Card.Text>
                  Choisissez une des fonctions ci-dessous :  
                </Card.Text>

                <ButtonGroup vertical >
                <Button variant="primary" 
                    onClick={this.onSubmitRenderVoyages}
                    >Voir les voyages non faits
                </Button>
                <Button variant="light" 
                    onClick={this.onSubmitCreateVoyage}
                    >Ajouter un voyage
                </Button>
                <Button variant="primary" 
                    onClick={this.onSubmitRenderVoyagesFaits}
                    >Voir les voyages passés
                </Button>
                </ButtonGroup>

            </Card.Body>
        </Card>
        </div>
        
        <div className="col-lg-4 mb-4 grid-margin">
          <Card className="bg-dark text-white">
            <Card.Header as="h5">Administration</Card.Header>
            <Card.Body>
                <Card.Title>Ces fonction concernent l'administratif</Card.Title>
                <Card.Text>
                  Choisissez une des fonctions ci-dessous :
                </Card.Text>
                <ButtonGroup vertical >
                <Button variant="primary" 
                    onClick={this.onSubmitActions}
                    >Actions sur les voyages
                </Button>
                <Button variant="light" 
                    onClick={this.onSubmitRenderOwners}
                    >Voir les adresses autorisées
                </Button>
                <Button variant="primary" 
                    onClick={this.onSubmitAddAddress}
                    >Editer les adresses autorisées
                </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
        
        </div> 
       

      </div>
    </div>
    </div>

</div>

        );
    }


onSubmitRenderVoyages(event) {
    event.preventDefault();
    window.location.href = "/RenderVoyages"; 
    //this.props.history.push('/RenderVoyages')
}

  onSubmitCreateVoyage(event) {
    event.preventDefault();
    window.location.href = "/CreateVoyage"; 
    //this.props.history.push(`/CreateVoyage`)
}

onSubmitRenderVoyagesFaits(event) {
  event.preventDefault();
  window.location.href = "/RenderVoyagesFaits"; 
}


onSubmitActions(event) {
    event.preventDefault();
    window.location.href = "/Actions"; 
}

onSubmitRenderOwners(event) {
  event.preventDefault();
  window.location.href = "/RenderAddresses";
}

onSubmitAddAddress(event) {
  event.preventDefault();
  window.location.href = "/AddAddress";
}



}

export default Home;