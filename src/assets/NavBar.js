import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, InputGroup, Card} from 'react-bootstrap';
import { DropDown } from './DropDown';
import * as Icon from 'react-bootstrap-icons';

function NavBar() { 
    return (
      <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="http://localhost:3000/">Sol Events Admin</Navbar.Brand>
      <Icon.Award y color="white" size="25"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Link href="https://kryptosphere.org/" className ="text-white text-uppercase ml-5">Sol Events</Nav.Link>
              <Nav.Link href="http://localhost:3000/" className ="text-white text-uppercase ml-5">
              <Icon.House y color="white" size="20"/></Nav.Link>
              <DropDown/>
          </Nav>
          <Form inline>
          </Form>
      </Navbar.Collapse>
    </Navbar>

    );
}

export default NavBar;