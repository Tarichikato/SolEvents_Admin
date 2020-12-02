import React, { Component }  from 'react'
import { createContract } from '../ethereum/SolEvents'
import { ButtonGroup, Button } from 'react-bootstrap';
import { web3 } from '../ethereum/web3';
import NavBar from '../assets/NavBar';

export class RenderVoyages extends Component {

    state = {
        diplomas: [],
        contract:''
    }
  async componentDidMount () {
    await this.getVoyages()
  }
  async getVoyages() {
    const contract = createContract()
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] }) 
    this.setState({ contract })
    const voyagesCount = await contract.methods.voyagesCount().call()
    this.setState({voyagesCount})

    for (var i = 1; i <= voyagesCount; i++) {
        var voyage = await contract.methods.voyages(i).call()
        if(voyage.valid == true && voyage.fait == false){
          voyage = this.translate(voyage)
            this.setState({
              voyages: [...this.state.voyages, voyage]
            })
        }
    }
  }


  translate(voyage) {

    //Dates
    const debut = voyage.debutSejour.toString().split('')
    const fin = voyage.finSejour.toString().split('')
    if(debut.length == 8){
      voyage.debutSejour = debut[6].concat(debut[7],'/',debut[4],debut[5],'/',debut[0],debut[1], debut[2],debut[3])
    }
    if(fin.length == 8){
      voyage.finSejour = fin[6].concat(fin[7],'/',fin[4],fin[5],'/',fin[0],fin[1], fin[2],fin[3])
    }

    //Participants
    var nb = voyage.Participants.toString().split('')
    var l = nb.length
    for (var i = 1; i <= 9 - l; i++) {
      nb = [0].concat(nb)
    }
    voyage.nba = parseInt(nb[6] + nb[7] + nb[8])
    voyage.nbe = parseInt(nb[3] + nb[4] + nb[5])
    voyage.nbb = parseInt(nb[0] + nb[1] + nb[2])

    //Test Covid
    if(voyage.testCovid == false){
      voyage.testCovid = "positif"
    }
    else if(voyage.testCovid == true){
      voyage.testCovid = "negatif"
    }
    else{
      voyage.testCovid = "Non renseigné"
    }

    //Accompagnement
    if(voyage.accompagnement == false){
      voyage.accompagnement = "Non"
    }
    else if(voyage.accompagnement == true){
      voyage.accompagnement = "Oui"
    }
    else{
      voyage.accompagnement = "Non renseigné"
    }

    //fait
    //Accompagnement
    if(voyage.fait == false){
      voyage.fait = "Non"
    }
    else if(voyage.fait == true){
      voyage.fait = "Oui"
    }
    else{
      voyage.fait = "Non renseigné"
    }

    return(voyage)
  }

    

constructor(props) {
    super(props)
    this.state = {
      account:'',
      voyagesCount: 0,
      voyages: [],
    }
}



  render() {
    return (
      <div>
          <header>
              <NavBar/>
          </header>

          <div className="container">
           <div className="row mt-5 text-center">
            <div className="col-lg-10 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">All the Diplomas are here below</h4>
                  <div className="card-body">
                    <p className="card-text">Voici la liste des diplomes enregistrés sur la blockchain. </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>
          
            
      <div>
     <table className="table">
      <thead className="thead-dark">
        
    <tr>
    <th scope="col">id</th>
      <th scope="col">debutSejour</th>
      <th scope="col">finSejour</th>
      <th scope="col">Adultes</th>
      <th scope="col">Enfants</th>
      <th scope="col">Bébés</th>
      <th scope="col">pays</th>
      <th scope="col">ville</th>
      <th scope="col">hebergementType</th>
      <th scope="col">accompagnement</th>
      <th scope="col">envies</th>
      <th scope="col">editeur</th>
      <th scope="col">testCovid</th>
      <th scope="col">fait</th>

    </tr>

  </thead>
  <tbody>
    <tr>
    <th scope="row">
          { this.state.voyages.map((voyage, key) => {
            return(
              
              <div key={key}>
                <td>
                  {key + 1}
                </td>
              </div>
              
             )
          })}
      </th>
    <th scope="row">
          { this.state.voyages.map((voyage, key) => {
            return(
              
              <div key={key}>
                <td>
                  {voyage.debutSejour}
                </td>
              </div>
              
             )
          })}
      </th>

    <td>
      { this.state.voyages.map((voyage, key) => {
            return(
              
              <div key={key}>
                <td>
                  {voyage.finSejour}
                </td>
              </div> 
              
                 )
        })}
    </td> 

    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.nba}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.nbe}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.nbb}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.pays}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.ville}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.hebergementType}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.accompagnement}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.envies}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.editor}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.testCovid}
              </td>
            </div> 
              
                 )
        })}
    </td>
    <td> 
      { this.state.voyages.map((voyage, key) => {
            return(
              <div key={key}>
                <td>
                  {voyage.fait}
              </td>
            </div> 
              
                 )
        })}
    </td>


    
      
    </tr>
  </tbody>
</table>


    <div className="container">
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

export default RenderVoyages;