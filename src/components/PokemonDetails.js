import React, { Component } from 'react';
import PokemonStats from './PokemonStats.js';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class PokemonDetails extends Component {
state = {
	id:'',
	name: '',
	sprite: ''
}

componentDidMount(){
	const { name, url } = this.props
	const id = url.split('/')[6] //get the id from the end of each pokemon url so that we can generate the sprite url
	const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	this.setState({
		id,
		name,
		sprite
	})
}

	render(){

	return(
		<Router>
		<div style={{borderRadius: '50%', backgroundColor: '#E0E0E0', margin: '5%'}}>
		<Link to={`/pokemon/${this.state.id}`}>
		<img src={this.state.sprite} alt={this.state.name} />
		</Link>
		</div>
		<div>
	    <Route exact path='/pokemon/:id' component={PokemonStats}/>
		</div>
		</Router>
	)		
	}
		
}

export default PokemonDetails;