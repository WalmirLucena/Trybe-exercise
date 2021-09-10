import React from 'react';
 
class Cpf extends React.Component {
    render(){
        const {value, handleChange} = this.props;
        return (<label htmlFor="cpf">
        CPF
        <input
        value={value.replace(/[^0-9]/g, '')}
        type="text" 
        name="cpf" 
        id="cpf"
        onChange={handleChange}
        maxLength='11'
        required/>
    </label>)
    }
}

export default Cpf;