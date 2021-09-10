import React from 'react';

class Tipo extends React.Component{
    render () {
        const {value, handleChange} = this.props;
        return (
            <div>
            <label htmlFor="tipo">
                    Casa
                    <input
                    value={value}
                    type="radio" 
                    name="tipo" 
                    id="tipo"
                    onChange={handleChange}
                    checked
                    required/>
            </label>
            <label htmlFor="tipo">
                    Apartamento
                    <input
                    value="apartamento"
                    type="radio" 
                    name="tipo" 
                    id="tipo"
                    onChange={handleChange}
                    required/>
            </label>
            </div>

        )
    }
}

export default Tipo;
