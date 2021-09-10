import React from 'react';

class Estado extends React.Component{
    estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

    render () {
        const {value, handleChange} = this.props;
        return (
            <label htmlFor="Estado">
                    Estado
                    <select
                    value={value}
                    type="estado" 
                    name="estado" 
                    id="estado"
                    onChange={handleChange}
                    required>
                    {this.estados.map(element => (
            <option key={element} value={element}>{element}</option>            
        ))}
                    </select>
                    
                </label>

        )
    }
}

export default Estado;
