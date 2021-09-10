import React from 'react';
 
class Endereco extends React.Component {
    render(){
        const {value, handleChange} = this.props;
        return (<label htmlFor="endereco">
        Endereço
        <input
        value={value.replace(/[^\w\s]/gi, '')}
        type="text" 
        name="endereco" 
        id="endereco"
        onChange={handleChange}
        required/>
    </label>)
    }
}

export default Endereco;