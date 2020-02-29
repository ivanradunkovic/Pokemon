// import React, { Component } from 'react';
// import PokemonDetails from './PokemonDetails.js';
// import '../App.css';
// import PokemonStats from './PokemonStats.js';

// class PokemonList extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			currentPokemonId: null,
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(id) {
// 		this.setState({
// 			currentPokemonId: id
// 		})
// 	}

// 	render() {

// 		const pokemonList = {
// 			display: 'flex',
// 			flexDirection: 'row',
// 			flexWrap: 'wrap',
// 			borderRight: '1px solid gray',
// 			overflow: 'scroll',
// 			height: '90vh',
// 			width: '45%'
// 		}

// 		const pokedexContainer = {
// 			margin: '1%',
// 			top: '0',
// 			position: 'fixed',
// 			border: '2px solid black',
// 			borderRadius: '15px',
// 			padding: '1%',
// 			backgroundColor: 'white'
// 		}

// 		const { pokemon } = this.props;
// 		let currentPokemon = {};
// 		if (this.state.currentPokemonId) {
// 			currentPokemon = pokemon[this.state.currentPokemonId-1];
// 		}
// 		return (
// 			<>
// 				<div style={pokedexContainer}>
// 					<h2>Pokedex</h2>
// 					{this.props.pokemon ? (
// 						<div style={pokemonList}>
// 							{this.props.pokemon.map((pokemon) => (
// 								<PokemonDetails key={pokemon.id}
// 									name={pokemon.name}
// 									sprite={pokemon.sprite}
// 									id={pokemon.id}
// 									onChange={this.handleChange}
// 								/>
// 							))}
// 						</div>
// 					) : null}
// 				</div>

// 				{this.state.currentPokemonId ? (
// 					<PokemonStats 
// 						pokemon={currentPokemon}
// 					/>
// 				) : null}
// 			</>
// 		)
// 	}
// }

// export default PokemonList;