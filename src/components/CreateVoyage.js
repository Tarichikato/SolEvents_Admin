import React, { Component }  from 'react'
import { createContract } from '../ethereum/SolEvents'
import { Button, ButtonGroup, Form, ButtonToolbar } from 'react-bootstrap';
//import { web3 } from './../ethereum/web3';
import NavBar from './../assets/NavBar';
import { PopupCreateVoyage } from './../assets/PopupCreateVoyage';
import Web3 from 'web3'

export class CreateVoyage extends Component {

  

    state = {
            address: '',
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
      contract: '',
      debutsejour:0,
      finsejour:0,
      pays:'',
      ville:'',
      idClient:0,
      nomClient:'',
      prenomClient:'',
      testCovid:true,
      nbadultes:0,
      nbenfants:0,
      nbbebes:0,
      famille:false,
      couple:false,
      amis:false,
      groupe:false,
      voldirecteco:false,
      voldirectaffaire:false,
      volmoimeme:false,
      volmoinscher:false,
      bpc:false,
      cc:false,
      luxe:false,
      pension:false,
      navettepublique:false,
      taxicollectif:false,
      locvoiture:false,
      busferry:false,
      accompagnement:false,
      hebergementType:'',
      musees:false,
      temples:false,
      sites:false,
      jardins:false,
      parcs:false,
      artisanat:false,
      architectureU:false,
      artC:false,
      campagne:false,
      randonnee:false,
      pelrinage:false,
      velo:false,
      foot:false,
      plongee:false,

      participants:0,
      envies:0,
      
    }
    this.onChangeCB = this.onChangeCB.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
}

async createVoyage1(debutsejour,finSejour,pays,ville,hebergementType,accompagnement,idClient,nomClient,prenomClient,testCovid) {
  //TODO calcul de envie
  var envies = 1
  //TODO calcul de participants
  console.log(this.state.nbadultes,1000 * this.state.nbenfants,1000000*this.state.nbbebes)
  var participants = parseInt(this.state.nbadultes) + 1000 * parseInt(this.state.nbenfants) + 1000000*parseInt(this.state.nbbebes)
  console.log('participants',participants)
  this.createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies,idClient,nomClient,prenomClient,testCovid)
}


async createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies,idClient,nomClient,prenomClient,testCovid) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    this.state.contract.methods.createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies,idClient,nomClient,prenomClient,testCovid).send({ from: this.state.account })
  }
  else{
    //TODO Remplacer par une pop up
    console.log("T'as pas les droits ")
  }
}




    onChange(event) {
    
    const target = event.target;
    var value =  target.value;
    const name = target.name;
    if(name == "finsejour" || name == "debutsejour"){
      value = value.replace('-','')
      value = value.replace('-','')
      value = parseInt(value)
      console.log(value)
    }
    this.setState({
      [name]: value
    });
    console.log(name,value,this.state)  
}

onChangeCB(event) {
  console.log('onChangeCB')
  const target = event.target;
  var value =  target.value;
  const name = target.name;
  console.log("name",name)
  this.setState({[name]: !this.state.[name]})
  console.log(name,this.state)  
}


    onSubmit(event) {
      event.preventDefault();
      this.setState({ModalShow:false})
      console.log('submited',this.state)
      this.createVoyage1(
        this.state.debutsejour,
        this.state.finsejour,
        this.state.pays,
        this.state.ville,
        this.state.hebergementType,
        this.state.accompagnement,
        this.state.envies,
        this.state.idClient,
        this.state.nomClient,
        this.state.prenomClient,
        this.state.testCovid)
  }


  render() {
    let ModalClose =() => this.setState({ModalShow:false})

    return (
      <div>
        <div>
            <NavBar/>
        </div>

        <div className="container">
          <div className="row mt-5 text-center center">
            <div className="col-lg-10 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Create Voyage</h4>
                  <div className="card-body">
                    <p className="card-text">Creer des voyages  </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>


        <Form>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Debut du séjour</Form.Label>
                <Form.Control 
                    placeholder='Debut du séjour'
                    name="debutsejour"
                    type="date"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Fin du séjour</Form.Label>
                <Form.Control 
                    placeholder='Fin du séjour'
                    name="finsejour"
                    type="date"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>name</Form.Label>
                <Form.Control 
                    placeholder= "Nombre d'adultes"
                    name="nbadultes"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>name</Form.Label>
                <Form.Control 
                    placeholder= "Nombre d'enfants"
                    name="nbenfants"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>name</Form.Label>
                <Form.Control 
                    placeholder= "Nombre de bébés"
                    name="nbbebes"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>Pays de destinaton</Form.Label>
            <Form.Control 
                    placeholder= "Pays de destination"
                    name="pays"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>Ville de destination</Form.Label>
            <Form.Control 
                    placeholder= "Ville de destination"
                    name="ville"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>name</Form.Label>
            <Form.Control 
                    placeholder= "famille,couple,amis,groupe"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>name</Form.Label>
            <Form.Control 
                    placeholder= "eco,affaire,moimeme,moinscher"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>name</Form.Label>
            <Form.Control 
                    placeholder= "bienpascher,charmeconfort,luxe"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Quel type d'hebergement ?</Form.Label>
            <Form.Control 
                    placeholder= "Type d'hebergement"
                    name="hebergementType"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Pension</Form.Label>
            <Form.Control 
                    placeholder= "indiférent,sansrepas,petitdej,demi"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Transport</Form.Label>
            <Form.Control 
                    placeholder= "navette,taxicollectif,locvoiture,busferry"
                    name="name"
                    type="text"
                    onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Accompagné ?</Form.Label>
            <Form.Control 
                    name="accompagnement"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Musee</Form.Label>
            <Form.Control 
                    name="musees"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            <Form.Label>Temple</Form.Label>
            <Form.Control 
                    placeholder= "temple"
                    name="temples"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Infos sur le client</Form.Label>
            <Form.Control 
                    placeholder= "Numéro de client"
                    name="clientId"
                    type="num"
                    onChange={this.onChange} />
            <Form.Control 
                    placeholder= "Nom du client"
                    name="nomClient"
                    type="text"
                    onChange={this.onChange} />
            <Form.Control 
                    placeholder= "Prenom du client"
                    name="prenomClient"
                    type="text"
                    onChange={this.onChange} />
            <Form.Label>Test Covid négatif</Form.Label>
            <Form.Control 
                    name="testCovid"
                    type="checkbox"
                    onChange={this.onChange} />
            </Form.Group>

        </Form>
      
        <div>
        
      <ButtonToolbar>
        <Button value="add" variant="primary" 
          onClick={() => this.setState({ModalShow: true})}
          >Creer voyage
          </Button>
        <PopupCreateVoyage
          show={this.state.ModalShow}
          onHide={ModalClose}
          onSubmit={this.onSubmit}
        />
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

export default CreateVoyage;