import React from 'react';

class Resumo extends React.Component{
    render () {
        const {value, handleChange} = this.props;
        return (
            <label htmlFor="resumo">
                    Resumo
                    <input
                    value={value}
                    type="textArea" 
                    name="resumo" 
                    id="resumo"
                    maxLength="1000"
                    onChange={handleChange}
                    required/>
                </label>

        )
    }
}

export default Resumo;
