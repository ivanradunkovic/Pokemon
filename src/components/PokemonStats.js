import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import '../App.css';

class PokemonStats extends Component {
	state = {
		sprite: '',
		id: '',
		name: '',
		hp: '',
		speed: '',
		attack: '',
		defense:''
	}

	//fetch each individual pokemon and it's stats
	componentDidMount(){
		const { id } = this.props.match.params
		const proxyurl = "https://cors-anywhere.herokuapp.com/"

		const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

		//had to add proxy url because of No Access-Control-Allow-Origin error and call fetch like this: (fetch(proxyurl + pokemonUrl))
		fetch(proxyurl + pokemonUrl)
	      .then(res => res.json())
	      .then(data => {
		      	console.log(data);
		        this.setState({ 
			        sprite: data.sprites.front_default, 
			        id: data.id, 
			        name: data.name,
			        hp: data.stats[5].base_stat,
			        speed: data.stats[0].base_stat,
			        attack: data.stats[4].base_stat,
			        defense: data.stats[3].base_stat
		    	});
	      })
	      .catch(err => console.log(err));
	}

	render(){
		const pokemonCard = {
			float: 'right',
			right: '15%',
			top: '5%',
			padding: '5%',
			height:'auto',
			width: '20%',
			position: 'fixed',
			margin: '5%',
			boxShadow: '0 5px 10px 0 rgba(0,0,0,0.1)',
			transition: '0.5s'
		}

		const pokemonCardImg = {
			borderRadius: '50%', 
			backgroundColor: '#E0E0E0',
			width: '100px',
			height: '100px',
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto'
		}

		const closeCard = {
			border: 'none',
			padding: '10px',
			backgroundColor: 'orange'
		}

		return(
			<div style={pokemonCard} className='pokeCard'>
			<img src={this.state.sprite} alt={this.state.name} style={pokemonCardImg}/>
			<h3 style={{color: '#D3D3D3'}}>#{this.state.id}</h3><h2 style={{textTransform: 'uppercase'}}>{this.state.name}</h2>
			<h4 style={{textDecoration:'underline', wordSpacing: '50px'}}>HP {this.state.hp}</h4>
			<h4 style={{textDecoration:'underline', wordSpacing: '50px'}}>Speed {this.state.speed}</h4>
			<h4 style={{textDecoration:'underline', wordSpacing: '50px'}}>Attack {this.state.attack}</h4>
			<h4 style={{textDecoration:'underline', wordSpacing: '50px'}}>Defense {this.state.defense}</h4>
			<Link to='/'><button style={closeCard} className='close'>CLOSE CARD</button></Link>
			</div>
		)
	}


 }

 export default PokemonStats