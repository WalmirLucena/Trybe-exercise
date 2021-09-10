
import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className="App">
          <LoginForm />
          <RegisterForm />
      </main>
    );
  }
}

export default App;