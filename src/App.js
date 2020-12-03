import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './assets/NavBar';
import Table from './assets/Table';
import { Home } from './components/Home';
import { Router, Switch, Route } from 'react-router-dom';
import  history  from './assets/history';

import { RenderVoyages } from './components/RenderVoyages';
import { RenderVoyagesFaits } from './components/RenderVoyagesFaits';
import { CreateVoyage } from './components/CreateVoyage';

import { AddAddress } from './components/AddAddress';
import { Actions } from './components/Actions';
import { RenderAddresses } from './components/RenderAddresses';



function App() {
  return (
    <div >
      <Router history={history}>
        <Route exact path='/' component={Home} />
        <Route path ='/RenderVoyages' component={RenderVoyages} />
        <Route path ='/RenderVoyagesFaits' component={RenderVoyagesFaits} />
        <Route path ='/CreateVoyage' component={CreateVoyage} />
        <Route path ='/AddAddress' component={AddAddress} />
        <Route path ='/Actions' component={Actions} />
        <Route path ='/RenderAddresses' component={RenderAddresses} />
      </Router>
    </div>
  );
}

export default App;
