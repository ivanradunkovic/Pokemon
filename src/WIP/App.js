// import React, { Component } from 'react';
// import PokemonList from './components/PokemonList.js';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     let pokemons = [];
//     for (let i = 0; i < 151; i++) {
//       pokemons.push({
//         id: i + 1,
//         name: 'Unknown',
//         sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`,
//         hp: '???',
//         speed: '???',
//         attack: '???',
//         defense: '???',
//       })
//     }

//     this.state = {
//       pokemons,
//     }
//   }

//   componentDidMount() {
//     this.getPokemon(1);
//     this.getPokemon(4);
//   }

//   getPokemon = async (id) => {
//     const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await result.json();

//     const newState = Object.assign({}, this.state);
//     newState.pokemons[id-1] = {
//       name: data.name,
//       id: id,
//       sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
//       hp: data.stats[5].base_stat,
//       speed: data.stats[0].base_stat,
//       attack: data.stats[4].base_stat,
//       defense: data.stats[3].base_stat,
//     }
//     this.setState(newState);
//   }

//   render() {
//     return (
//       <PokemonList pokemon={this.state.pokemons} />
//     );
//   }
// }
// export default App;