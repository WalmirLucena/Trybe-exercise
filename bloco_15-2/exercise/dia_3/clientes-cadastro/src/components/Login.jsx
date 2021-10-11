import React from "react";
import { connect } from "react-redux";
import { setLogin } from "../redux/action";

class Login extends React.Component {
    constructor () {
        super ();

        this.state = {
            email: '',
            senha: '',
        }
    }

    handleChange = ({target : { name, value}}) => {
        this.setState({ [name] : value});

    }

    handleClick = () => {
        const { history, dispatchSetLogin } = this.props;
        this.setState({requisition: true});
        dispatchSetLogin(this.state);
        history.push('/clientes_cadastrados')
    }

    render (){
        const { email, senha} = this.state
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="email">
                        Email
                        <input
                        name="email"
                        type="text"
                        id ="email"
                        value={email}
                        onChange={ this.handleChange}
                        required/>
                    </label>
                    <label htmlFor="senha">
                        Senha
                        <input 
                        name="senha"
                        type="text"
                        id="senha"
                        value={senha}
                        onChange={this.handleChange }
                        required/>
                    </label>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchSetLogin: (value) => dispatch(setLogin(value))
})

export default connect(null, mapDispatchToProps)(Login);