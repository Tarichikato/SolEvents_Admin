import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { Home } from "./../components/Home";

export class DropDown extends Component {
  render() {
    return (
      <NavDropdown
        title="Functions"
        id="basic-nav-dropdown"
        className="text-white text-uppercase ml-5"
      >
        {/* Je n'arrive pas à quand on clique dans le menu déroulant Function, 
            puis sur RenderStudents à renvoyer la bonne URL sans faire comme ça, 
            j'aimerai que ça récupère automatiquement
            l'addresse du contrat rentré sur Home */}
        
        <NavDropdown.Item href="http://localhost:3000/RenderVoyages">
          Voir les voyages non faits
        </NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/CreateVoyage">
          Ajouter un voyage
        </NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/RenderVoyagesFaits">
          Voir les voyages passés
        </NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/Actions">
        Actions sur les voyages
        </NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/RenderAddresses">
        Voir les addresses autorisées
        </NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/AddAddress">
        Editer les addresses autorisées
        </NavDropdown.Item>
        
      </NavDropdown>
    );
  }
}

export default DropDown;
