import React from "react";
import { connect } from "react-redux";
import { setCadastro } from "../redux/action";

class Cadastro extends React.Component {
    constructor () {
        super ();

        this.state = {
            email: '',
            nome: '',
            idade: '',
        }
    }

    handleChange = ({target : { name, value}}) => {
        this.setState({ [name] : value});

    }

    handleClick = () => {
        const { history, dispatchSetCadastro } = this.props;
        dispatchSetCadastro(this.state);
        history.push('/clientes_cadastrados')
    }

    render (){
        const { email, idade, nome} = this.state
        const { login } = this.props;
        if(!login.email) return  <div>Login Não efetuado</div>
        return (
            <div>
                <form onSubmit={this.handleClick}>
                <label htmlFor="nome">
                        Nome
                        <input 
                        name="nome"
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={this.handleChange }
                        required/>
                    </label>
                    <label htmlFor="idade">
                        Idade
                        <input
                        name="idade"
                        type="number"
                        id ="idade"
                        value={idade}
                        onChange={ this.handleChange}
                        required/>
                    </label>
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
                    
                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCadastro: (value) => dispatch(setCadastro(value))
});

const mapStateToProps = (state) => ({
    login: state.loginReducer.login,

});
 
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);