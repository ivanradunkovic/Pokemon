// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// class PokemonStats extends Component {

// 	render() {
// 		const pokemonCard = {
// 			float: 'right',
// 			right: '15%',
// 			top: '5%',
// 			padding: '5%',
// 			height: 'auto',
// 			width: '20%',
// 			position: 'fixed',
// 			margin: '5%',
// 			boxShadow: '0 5px 10px 0 rgba(0,0,0,0.1)',
// 			transition: '0.5s'
// 		}

// 		const pokemonCardImg = {
// 			borderRadius: '50%',
// 			backgroundColor: '#E0E0E0',
// 			width: '100px',
// 			height: '100px',
// 			display: 'block',
// 			marginLeft: 'auto',
// 			marginRight: 'auto'
// 		}

// 		const { name, id, sprite, hp, speed, attack, defense } = this.props.pokemon;

// 		return (
// 			<div style={pokemonCard} className='pokeCard'>
// 				<img src={sprite} alt={name} style={pokemonCardImg} />
// 				<h3 style={{ color: '#D3D3D3' }}>#{id}</h3><h2 style={{ textTransform: 'uppercase' }}>{name}</h2>
// 				<h4 style={{ textDecoration: 'underline', wordSpacing: '50px' }}>HP {hp}</h4>
// 				<h4 style={{ textDecoration: 'underline', wordSpacing: '50px' }}>Speed {speed}</h4>
// 				<h4 style={{ textDecoration: 'underline', wordSpacing: '50px' }}>Attack {attack}</h4>
// 				<h4 style={{ textDecoration: 'underline', wordSpacing: '50px' }}>Defense {defense}</h4>
// 			</div>
// 		)
// 	}


// }

// export default PokemonStats