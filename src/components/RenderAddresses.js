import React, { Component }  from 'react'
import { createContract } from '../ethereum/SolEvents'
import { ButtonGroup, Button } from 'react-bootstrap';
import { web3 } from './../ethereum/web3';
import NavBar from './../assets/NavBar';




export class RenderAddresses extends Component {

  state = {
    owners: [],

}
async componentDidMount () {
await this.getOwners(this.getDiplomaStorageAddress()
)
}

getDiplomaStorageAddress () {
return this.props.match.params.address
}

async getOwners() {
const contract = createContract()
const accounts = await web3.eth.getAccounts()
this.setState({ account: accounts[0] })

this.setState({ contract })
const ownersCount = await contract.methods.ownersCount().call()
this.setState({ownersCount})

for (var i = 1; i <= ownersCount; i++) {
    const owner = await contract.methods.owners(i).call()
    if(owner[2] == true){
      this.setState({
        owners: [...this.state.owners, [owner[0],owner[1]]]
      })
    }
  }

}

constructor(props) {
super(props)
this.state = {
  account:'',
  ownersCount: 0,
  owners: [],
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
              <h4 className="card-header">Les adresses des gérants du contrat</h4>
              <div className="card-body">
                <p className="card-text">Voici la liste des adresses autorisées à enregistrer des voyages </p>
              </div>
          </div>
        </div>
    </div>    
  </div>
      
        
  <div>
 <table className="table">
  <thead className="thead-dark">
<tr>
  <th scope="col">Addresse</th>
  <th scope="col">Tag</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">
      { this.state.owners.map((owner, key) => {
        return(
          
          <div key={key}>
            <td>
              {owner[0]}
            </td>
          </div>
          
         )
      })}
  </th>

<td>
  { this.state.owners.map((owner, key) => {
        return(
          
          <div key={key}>
            <td>
              {owner[1]}
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

export default RenderAddresses;