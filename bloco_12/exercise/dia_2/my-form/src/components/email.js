import React from 'react';
 
class Email extends React.Component {
    render(){
        const {value, handleChange} = this.props;
        return (<label htmlFor="email">
        Email
        <input
        value={value}
        type="email" 
        name="email" 
        id="email"
        onChange={handleChange}
        maxLength='50'
        required/>
    </label>)
    }
}

export default Email;