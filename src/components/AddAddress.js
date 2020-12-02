import React, { Component }  from 'react'
import { createContract } from '../ethereum/SolEvents'
import { Button, ButtonGroup, Form, Spinner, Modal, ButtonToolbar } from 'react-bootstrap';
//import { web3 } from './../ethereum/web3';
import NavBar from './../assets/NavBar';
import { PopupAddAddress } from './../assets/PopupAddAddress';
import Web3 from 'web3'




export class AddAddress extends Component {

  

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
    console.log(web3)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts)
    console.log(this.state.account)
    this.setState({ contract })
    console.log(contract)
  }
  
  

constructor(props) {
    super(props)
    this.state = {
      account:'',
      lv: 0,
      address: '',
      name: '',
      contract: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}


async addOwner(address, name) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    this.state.contract.methods.setOwner(address,name).send({ from: this.state.account })
  }
  else{
    //TODO Remplacer par une pop up
    console.log("T'as pas les droits ")
  }
}

async dlOwner(address, name) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    this.state.contract.methods.deleteOwner(address).send({ from: this.state.account })
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
    console.log(name,value,this.state)  
}


    onSubmit(event) {
      console.log(event)
      const value = event.target.value;
      event.preventDefault();
      if(value == "add"){
        console.log(value,'add')
        this.addOwner(this.state.address,this.state.name)
      }
      if(value == "dl"){
        console.log(value,'dl')
        this.dlOwner(this.state.address)
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
                  <h4 className="card-header">Add Address</h4>
                  <div className="card-body">
                    <p className="card-text">Autorisation:  </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>


        <Form>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    placeholder='Adresse'
                    name="address"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>name</Form.Label>
                <Form.Control 
                    placeholder= "Nom de l'adresse"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

        </Form>
      
        <div>
        
      <ButtonToolbar>
        <Button value="add" variant="primary" 
          onClick={this.onSubmit}
          >Add Address
        </Button>
        <Button value="dl" variant="danger" 
          onClick={this.onSubmit}
          >Delete Address
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

export default AddAddress;