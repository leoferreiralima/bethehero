import React from 'react';

import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


export default function Routes() {
  const token = localStorage.getItem("token");
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewIncident}/>
      </Switch>
      {token && <Redirect to="/profile" />}
    </BrowserRouter>
  );
}
