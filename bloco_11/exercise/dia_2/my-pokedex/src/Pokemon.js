import React from 'react';

class Pokemon extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          selectedPokemon: false,
        }
      }
      handleClick(){
        this.setState(previousState => {
            return {
                selectedPokemon: !previousState.selectedPokemon
            }
        });
      }
    render() {
        const {pokemon} = this.props;
        const {selectedPokemon} = this.state;

        return (
            <div className={selectedPokemon ?'pokemon background': 'pokemon' } onClick={this.handleClick} >
                <div>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.type}</p>
                    <p>{`Average weigth: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
                </div>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
        )
    }
}

export default Pokemon;