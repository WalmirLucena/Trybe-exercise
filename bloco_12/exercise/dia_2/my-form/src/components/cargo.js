import React from 'react';

class Cargo extends React.Component{
  
    render () {
        const {value, handleChange, alert} = this.props;
        return (
            <label htmlFor="cargo">
                    Cargo
                    <input
                    value={value}
                    type="textArea" 
                    name="cargo" 
                    id="cargo"
                    maxLength="40"
                    onMouseEnter={alert}
                    onChange={handleChange}
                    required/>
                </label>

        )
    }
}

export default Cargo;
