import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Cadastro from './components/Cadastro';
import Clientes_Cadastrados from './components/Clientes_Cadastrados';

import Home from './components/Home';
import Login from './components/Login';

class App extends React.Component{
  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/clientes_cadastrados" component={Clientes_Cadastrados} />
      </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
