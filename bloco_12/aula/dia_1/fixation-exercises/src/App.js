
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
    
    this.state = {numeroCliques: 0}

  }
   handleClick () {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques: estadoAnterior.numeroCliques +1
    }))
  }
 
  render(){
  return (
    <div className="App">
      <button onClick={this.handleClick}>{this.state.numeroCliques}</button>
    </div>
  );
  }
}

export default App;
