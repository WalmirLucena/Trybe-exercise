import React from 'react';

class LoginForm extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
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
        const {email} = this.state
        alert(`O login foi realizado. ${email}`)
    }

    render() {
        const {email, password} = this.state;
        return (
        <section className="login-form">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
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
                <button type="submit">Logar</button>
            </form>
        </section>
        )
    }
}

export default LoginForm;