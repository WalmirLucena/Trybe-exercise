import React from 'react';
 
class Name extends React.Component {
    render(){
        const {value, handleChange} = this.props;

        let error = undefined;
        if(value.length > 40) error = 'Texto muito grande!'


        return (
            <label htmlFor="name">
                    Nome
                    <input
                    value={value.toUpperCase()} 
                    type="name" 
                    name="name" 
                    id="name"
                    onChange={handleChange}
                    maxLength='40'
                    required/>
                <span>{error? error : ''}</span>
                </label>
        )
    }
}

export default Name;