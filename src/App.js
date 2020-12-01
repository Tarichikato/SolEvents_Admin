import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './assets/NavBar';
import Table from './assets/Table';
import Pagination from './assets/Pagination';
import { Home } from './components/Home';
import { Router, Switch, Route } from 'react-router-dom';
import  history  from './assets/history';
import { FunctionsChoice } from './components/FunctionsChoice';

import { RenderDiplomas } from './components/RenderDiplomas';
import { CreateDiploma } from './components/CreateDiploma';
import { CheckDiplomas } from './components/CheckDiplomas';

import { AddAddress } from './components/AddAddress';
import { RenderAddresses } from './components/RenderAddresses';

import { getDiplomas } from './components/getDiplomas';


function App() {
  return (
    <div >
      <Router history={history}>
        <Route exact path='/' component={Home} />
        <Route path ='/FunctionsChoice' component={FunctionsChoice} />
        

        
        <Route path ='/RenderDiplomas' component={RenderDiplomas} />
        <Route path ='/CreateDiploma' component={CreateDiploma} />
        <Route path ='/CheckDiplomas' component={CheckDiplomas} />

      
       

        <Route path ='/AddAddress' component={AddAddress} />
        <Route path ='/RenderAddresses' component={RenderAddresses} />

      </Router>
    </div>
  );
}

export default App;
