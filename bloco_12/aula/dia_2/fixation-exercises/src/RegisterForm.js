import React from 'react';

class RegisterForm extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
        }
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange({target}){
        const {name, value} = target;
        this.setState({[name]: value})

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name} = this.state
        alert(`O cadastro foi realizado. ${name}`)
    }

    render() {
        const {email, name, password} = this.state;
        return (
        <section className="register-form">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                    Nome
                    <input
                    value={name} 
                    type="name" 
                    name="name" 
                    id="name"
                    onChange={this.handleChange}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input
                    value={email}
                    type="email" 
                    name="email" 
                    id="email"
                    onChange={this.handleChange}/>
                </label>
                <label htmlFor="password">
                    Password
                    <input
                    value={password}
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={this.handleChange}/>
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </section>
        )
    }
}
export default RegisterForm;