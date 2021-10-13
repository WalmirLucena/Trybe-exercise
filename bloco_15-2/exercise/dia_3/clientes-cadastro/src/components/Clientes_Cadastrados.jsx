import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setRemover } from "../redux/action";

class Clientes_Cadastrados extends React.Component {
       render (){
        const { login, cadastro } = this.props;
        if(!login.email) return  <div>Login Não efetuado</div>
        if(cadastro.length < 1) return ( 
            <div>Nenhum cliente cadastrado
            <Link to="/cadastro">Cadastro</Link>
        </div>

        )
        return (
           <div>
               <Link to="/cadastro">Cadastro</Link>
               {cadastro.map((cliente) => (
                   <div>
                   <h2>{cliente.nome}</h2>
                   <p>{cliente.email}</p>
                   <p>{cliente.idade}</p>
                   <button onClick={() => this.props.delete(cliente)}>X</button>
                   </div>

            ))}
               
           </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (value) => dispatch(setRemover(value))
})

const mapStateToProps = (state) => ({
    login: state.loginReducer.login,
    cadastro: state.cadastroReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Clientes_Cadastrados);