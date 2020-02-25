import React, { Component } from 'react';
import '../App.css';

class GuessingGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			id: '',
			sprite: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const { url } = this.props
		const id = url.split('/')[6] //get the id from the end of each pokemon url so that we can generate the sprite url
		const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

		this.setState({
			id,
			sprite
		})
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.guessPokemon();
	}

	guessPokemon() {
		if (this.props.name === this.state.value) {
			alert('You guessed right!')
			this.props.fetchData(true);
		}
		else {
			alert('You guessed wrong!')
			this.props.fetchData(false);
		}
	}

	render() {
		const guessingForm = {
			textAlign: 'center'
		}

		const guessingGame = {
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: '15%'
		}

		const pokemonImage = {
			borderRadius: '50%',
			backgroundColor: 'lightgray',
			padding: '3%',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: '5%',
			display: 'block'
		}

		return (
			<div style={guessingGame} className='guessingDiv'>
				<img src={this.state.sprite} style={pokemonImage} alt='pokemon' />
				<h2 style={{ textAlign: 'center' }}>Which Pokemon is this?</h2>
				<form onSubmit={this.handleSubmit} style={guessingForm}>
					<input style={{ padding: '1%' }} type="text" value={this.state.value} onChange={this.handleChange} />
					<input style={{ padding: '1.5%', backgroundColor: '#FF4D4D', border: 'none', color: 'white' }} type="submit" value="GUESS" />
				</form>
				<h4 style={{ textAlign: 'center' }}>{this.props.score}/151 GUESSED</h4>
			</div>
		)
	}
}

export default GuessingGame