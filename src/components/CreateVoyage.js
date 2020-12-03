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
computeEnvies(){
  var envies = 1
  var envies2 = 1
  if("famille" === this.state.avecqui){
    envies = envies * 2
  }
  if("couple" === this.state.avecqui){
    envies = envies * 3
  }
  if("amis" === this.state.avecqui){
    envies = envies * 5
  }
  if("groupe" === this.state.avecqui){
    envies = envies * 7
  }
  if("direct_eco" === this.state.vol){
    envies = envies * 11
  }
  if("direct_affaire" ===this.state.vol){
    envies = envies * 13
  }
  if("moi_meme" === this.state.vol){
    envies = envies * 17
  }
  if("moins_cher" === this.state.vol){
    envies = envies * 19
  }
  if("bpc" === this.state.confort){
    envies = envies * 23
  }
  if("cc" === this.state.confort){
    envies = envies * 29
  }
  if("luxe" === this.state.confort){
    envies = envies * 31
  }
  if("indiférent" === this.state.pensions){
    envies = envies * 37
  }
  if("sans_repas" ===this.state.pensions){
    envies = envies * 41
  }
  if("petit_dej" === this.state.pensions){
    envies = envies * 43
  }
  if("demi_pension" === this.state.pensions){
    envies = envies * 47
  }
  if(this.state.T1 === true){
    envies = envies * 53
  }
  if(this.state.T2 === true){
    envies = envies * 59
  }
  if(this.state.T3 === true){
    envies = envies * 61
  }
  if(this.state.T4 === true){
    envies = envies * 67
  }
  if(this.state.A1 === true){
    envies = envies * 71
  }
  if(this.state.A2 === true){
    envies2 = envies2 * 3
  }
  if(this.state.A3 === true){
    envies2 = envies2 * 5
  }
  if(this.state.A4 === true){
    envies2 = envies2 * 7
  }
  if(this.state.A5 === true){
    envies2 = envies2 * 11
  }
  if(this.state.A6 === true){
    envies2 = envies2 * 13
  }
  if(this.state.A7 === true){
    envies2 = envies2 * 17
  }
  if(this.state.A8 === true){
    envies2 = envies2 * 19
  }
  if(this.state.A9 === true){
    envies2 = envies2 * 23
  }
  if(this.state.A10 === true){
    envies2 = envies2 * 29
  }
  if(this.state.A11 === true){
    envies2 = envies2 * 31
  }
  if(this.state.A12 === true){
    envies2 = envies2 * 37
  }
  if(this.state.A13 === true){
    envies2 = envies2 * 41
  }
  if(this.state.A14 === true){
    envies2 = envies2 * 2
  }


  console.log("envies",envies)
  return([envies,envies2])
}
  


async createVoyage1(debutsejour,finSejour,pays,ville,hebergementType,accompagnement,idClient,nomClient,prenomClient,testCovid) {
  //TODO calcul de envie
  var envies = this.computeEnvies()
  console.log(envies)
  //TODO calcul de participants
  var participants = parseInt(this.state.nbadultes) + 1000 * parseInt(this.state.nbenfants) + 1000000*parseInt(this.state.nbbebes)
  console.log('participants',participants)
  this.createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies[0],envies[1],idClient,nomClient,prenomClient,testCovid)
}


async createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies,envies2,idClient,nomClient,prenomClient,testCovid) {
  if(await this.state.contract.methods.isOwner(this.state.account).call() == true){
    prenomClient = this.state.prenomClient
    nomClient = this.state.nomClient
    this.state.contract.methods.createVoyage(debutsejour,finSejour,participants,pays,ville,hebergementType,accompagnement,envies,envies2,idClient,nomClient,prenomClient,testCovid).send({ from: this.state.account })
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
    console.log(this.state)  
}

onChangeCB(event) {
  console.log('onChangeCB')
  const target = event.target;
  var value =  target.value;
  const name = target.name;
  console.log("name",name)
  this.setState({[name]: !this.state.[name]})
  console.log(this.state)  
}


    onSubmit(event) {
      event.preventDefault();
      this.setState({ModalShow:false})
      console.log('submited',this.state)
      console.log(this.state.prenomClient,this.state.nomClient,'STATE')
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
                <Form.Label>Nombre d'adultes</Form.Label>
                <Form.Control 
                    placeholder= "Nombre d'adultes"
                    name="nbadultes"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Nombre d'enfants</Form.Label>
                <Form.Control 
                    placeholder= "Nombre d'enfants"
                    name="nbenfants"
                    type="number"
                    onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Nombre de bébés</Form.Label>
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
            <Form.Label>Comment voyagez vous ?</Form.Label>
            <Form.Control as="select" onChange={this.onChange} name="avecqui">
            <option>...</option>
               <option value ="famille">En famille</option>
               <option value ="couple">En couple</option>
               <option value ="amis">Entre amis</option>
               <option value ="groupe">En groupe</option>
            </Form.Control>

            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            
            <Form.Label>Vol</Form.Label>
            <Form.Control as="select" onChange={this.onChange} name="vol">
            <option >...</option>
               <option value ="direct_eco">Vol direct en classe economique</option>
               <option value ="direct_affaire">Vol direct en classe affaire</option>
               <option value ="moi_meme">Je réserve moi même mon vol</option>
               <option value ="moins_cher">Le vol le moins cher possible </option>
            </Form.Control>

            </Form.Group>


            <Form.Group controlId="formGroupPassword">
            

            
            <Form.Label>Niveau de confort</Form.Label>
            <Form.Control as="select" onChange={this.onChange} name="confort">
            <option >...</option>
               <option value ="bpc">Bien pas cher</option>
               <option value ="cc">Charme et confort</option>
               <option value ="luxe">Luxe</option>
            </Form.Control>
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
            <Form.Control as="select" onChange={this.onChange} name="pensions">
            <option >...</option>
               <option value ="indiférent">Indifférent</option>
               <option value ="sans_repas">Sans repas dans les hotels</option>
               <option value ="petit_dej">Petit dejeuner dans les hôtels</option>
               <option value ="demi_pension">Demi Pension</option>
            </Form.Control>
            </Form.Group>

           

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Accompagné ?</Form.Label>
            <Form.Control 
                    name="accompagnement"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
            <Form.Label>Transport aeroport (navette publique)</Form.Label>
            <Form.Control 
                    name="T1"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            
            <Form.Label>Transport aeroport (taxicollectif)</Form.Label>
            <Form.Control 
                    name="T2"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            <Form.Label>Location de voiture</Form.Label>
            <Form.Control 
                    name="T3"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            
            <Form.Label>Bus,ferry..</Form.Label>
            <Form.Control 
                    name="T4"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Musee</Form.Label>
            <Form.Control 
                    name="A1"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            <Form.Label>Temple</Form.Label>
            <Form.Control 
                    name="A2"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Sites historiques</Form.Label>
            <Form.Control 
                    name="A3"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            
            <Form.Label>Jardins</Form.Label>
            <Form.Control 
                    name="A4"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Parcs</Form.Label>
            <Form.Control 
                    name="A5"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Artisanat</Form.Label>
            <Form.Control 
                    name="A6"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Architecture Urbaine</Form.Label>
            <Form.Control 
                    name="A7"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Art contemporain</Form.Label>
            <Form.Control 
                    name="A8"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            
            <Form.Label>Campagne</Form.Label>
            <Form.Control 
                    name="A9"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Randonnée</Form.Label>
            <Form.Control 
                    name="A10"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Pelrinage</Form.Label>
            <Form.Control 
                    name="A11"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Vélo</Form.Label>
            <Form.Control 
                    name="A12"
                    type="checkbox"
                    onChange={this.onChangeCB} />

            <Form.Label>Football</Form.Label>
            <Form.Control 
                    name="A13"
                    type="checkbox"
                    onChange={this.onChangeCB} />
            
            <Form.Label>Plongée</Form.Label>
            <Form.Control 
                    name="A14"
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
            
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
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