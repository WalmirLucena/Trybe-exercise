import React from 'react';

class DescricaoCargo extends React.Component{
    render () {
        const {value, handleChange} = this.props;
        return (
            <label htmlFor="descricaoCargo">
                    Descrição do Cargo
                    <input
                    value={value}
                    type="textArea" 
                    name="descricaoCargo" 
                    id="descricaoCargo"
                    maxLength="500"
                    onChange={handleChange}
                    required/>
                </label>

        )
    }
}

export default DescricaoCargo;
