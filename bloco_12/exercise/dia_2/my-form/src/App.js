import React from 'react';
import Name from './components/name';
import Email from './components/email';
import Cpf from './components/cpf';
import Endereco from './components/endereco';
import Cidade from './components/cidade';
import Estado from './components/estado';
import Tipo from './components/tipo';
import Resumo from './components/resumo';
import Cargo from './components/cargo';
import DescricaoCargo from './components/descricaoCargo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.clear = this.clear.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco:'',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
      alert: false,
      selected: false,
    };
  }

  clear(){
    this.setState({
      name: '',
      email: '',
      cpf: '',
      endereco:'',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
      alert: false,
    })
  }

  showAlert(){
    if(this.state.alert === false){
      alert('Preencha com cuidado esta informação.');
    }
    this.setState({alert: true})
  }

  handleChange({target}){
    const {name, value} = target;
    this.setState ({[name]: value})
  }

  joinData(){
    const  
    {name, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricaoCargo} = this.state

      return (<div>{name}
    {email}
    {cpf}
    {endereco}
    {cidade}
    {estado}
    {tipo}
    {resumo}
    {cargo}
    {descricaoCargo}
    </div>)
    
  }

  render() {
    const 
    {name, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricaoCargo} = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <Name value={name} handleChange={this.handleChange}/>
          <Email value={email} handleChange={this.handleChange}/>
          <Cpf value={cpf} handleChange={this.handleChange}/>
          <Endereco value={endereco} handleChange={this.handleChange}/>
          <Cidade value={cidade} handleChange={this.handleChange}/>
          <Estado value={estado} handleChange={this.handleChange}/>
          <Tipo value={tipo} handleChange={this.handleChange}/>
        </fieldset>
        <fieldset>
          <Resumo value={resumo} handleChange={this.handleChange}/>
          <Cargo value={cargo} handleChange={this.handleChange} alert={this.showAlert}/>
          <DescricaoCargo value={descricaoCargo} handleChange={this.handleChange}/>

        </fieldset>
        <button type="submit" >Cadastrar</button>
        <button onClick={this.clear}>Limpar</button>
      </form>
      <div>{this.joinData}</div>
      </div>
    );
  }
}

export default App