import React, { Component }  from 'react'
import { createContract } from '../ethereum/SolEvents'
import { Button, ButtonGroup, Form, Spinner, Modal, ButtonToolbar } from 'react-bootstrap';
//import { web3 } from './../ethereum/web3';
import NavBar from '../assets/NavBar';
import { PopupAddAddress } from '../assets/PopupAddAddress';
import Web3 from 'web3'




export class Actions extends Component {

  

    state = {
            address: '',
            name: '' ,
            contract: '',
            account:''
    }

  async componentDidMount () {

    window.ethereum.enable();
    const web3 = new Web3(Web3.givenProvider)
    const contract = createContract()
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    this.setState({ contract })
  }
  
  

constructor(props) {
    super(props)
    this.state = {
      account:'',
      id:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}


async isDone(id) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    this.state.contract.methods.isDone(id).send({ from: this.state.account })
  }
  else{
    //TODO Remplacer par une pop up
    console.log("T'as pas les droits ")
  }
}

async dlVoyage(id) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    this.state.contract.methods.deleteVoyage(id).send({ from: this.state.account })
  }
  else{
    //TODO Remplacer par une pop up
    console.log("T'as pas les droits ")
  }
}


    onChange(event) {
    
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
}


    onSubmit(event) {
      const value = event.target.value;
      event.preventDefault();
      if(value == "fait"){
        this.isDone(this.state.id)
      }
      if(value == "dl"){
        this.dlVoyage(this.state.id)
      }
  }


  render() {

    return (
      <div>
        <div>
            <NavBar/>
        </div>

        <div className="container">
          <div className="row mt-5 text-center center">
            <div className="col-lg-10 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Actions</h4>
                  <div className="card-body">
                    <p className="card-text">Liens:  </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>


        <Form>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Id du voyage</Form.Label>
                <Form.Control 
                    placeholder='Id du voyage'
                    name="id"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>


        </Form>
      
        <div>
        
      <ButtonToolbar>
        <Button value="fait" variant="warning" 
          onClick={this.onSubmit}
          >Marquer comme fait
        </Button>
        <Button value="dl" variant="danger" 
          onClick={this.onSubmit}
          >Suprimer
        </Button>

       
      </ButtonToolbar> 

        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 mb-4 grid-margin">
          <ButtonGroup size="lg" >
                <Button variant="primary" 
                    onClick={this.onSubmitBack}
                    >Back
                </Button>
                <Button variant="light" 
                    onClick={this.onSubmitReload}
                    >Refresh
                </Button>
          </ButtonGroup>
        </div>
      </div>
    </div> 
            
      </div>
    );
  }

  onSubmitBack(event) {
    event.preventDefault();
    window.history.back()
    }

  onSubmitReload(event) {
    event.preventDefault();
    window.location.reload()
    }
}

export default Actions;