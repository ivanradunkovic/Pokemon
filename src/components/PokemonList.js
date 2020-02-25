import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails.js';
import '../App.css';

class PokemonList extends Component {

	render(){

	const pokemonList = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRight: '1px solid gray',
      overflow: 'scroll',
      height: '90vh',
      width: '45%'
    }

    const pokedexContainer = {
    	margin: '1%',
    	top: '0',
    	position: 'fixed',
    	border: '2px solid black',
    	borderRadius: '15px',
    	padding: '1%',
    	backgroundColor: 'white'
    }

		return(	
			<>	
			<div style={pokedexContainer}>
				<h2>Pokedex</h2>				
				{this.props.pokemon ? (
				<div style={pokemonList}>	
					{this.props.pokemon.map(pokemon => (
						<PokemonDetails key={pokemon.name}
						name={pokemon.name}
						url={pokemon.url}
						/>
					))}
				</div>
				): (
				<h3>Loading...</h3>
				)}
			</div>
			</>

		)
	}
}

export default PokemonList;