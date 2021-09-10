import React from 'react';

class Cidade extends React.Component{
    render () {
        const {value, handleChange} = this.props;
        return (
            <label htmlFor="cidade">
                    Cidade
                    <input
                    value={value.replace(/[^a-zA-Z]/g, '')}
                    type="text" 
                    name="cidade" 
                    id="cidade"
                    onChange={handleChange}
                    required/>
                </label>

        )
    }
}

export default Cidade;
