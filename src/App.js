import React, { Component } from 'react';
import PokemonList from './components/PokemonList.js';
import GuessingGame from './components/GuessingGame.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    constructor() {
      super();
      this.state = {
        pokemon: null,
        showPokedex: false,
        name: '',
        url: '',
        sprite: '',
        proxyurl: `https://cors-anywhere.herokuapp.com/`,
        pokemonUrl: `http://pokeapi.co/api/v2/pokemon?limit=151`
      }
      this.handleClick = this.handleClick.bind(this);
    }

//fetch the pokemon data from the pokeapi and randomize an id of pokemon the user will have to guess
  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    //had to add proxy url because of No Access-Control-Allow-Origin error and call fetch like this: (fetch(proxyurl + pokemonUrl))
    fetch(this.state.proxyurl + this.state.pokemonUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          let randomId = Math.floor(Math.random() * data['results'].length)
          this.setState({ 
            pokemon: data.results,
            name: data.results[randomId-1].name,
            url: data.results[randomId-1].url
          });
          console.log(this.state.name)
        })
        .catch(err => console.log(err));
  }

  //on click show or close pokedex
  handleClick(){
    this.setState({ showPokedex: !this.state.showPokedex });
  }

  render(){

  //homepage 
  const Home = () => {
    const header = {
      backgroundColor: '#FF4D4D',
      textAlign: 'center',
      color: 'white',
      borderBottom: '10px solid black',
      padding: '5%',
      margin: '0',
      textTransform: 'uppercase',
      position: 'fixed',
      width: '100%'
    }

    const pokedexButton = {
      border: '5px solid black',
      backgroundColor: '#FF4D4D',
      width: '75px',
      height: '75px',
      color: 'white',
      borderRadius: '50%',
      position: 'fixed',
      top: '20%',
      right: '5%'
    }

    return (
      <>
      <h1 style={header}>Guess That Pokemon!</h1>
      <GuessingGame 
      pokemon={this.state.pokemon} 
      name={this.state.name} 
      url={this.state.url} 
      fetchData={this.fetchData} 
      proxyurl={this.state.proxyurl}
      pokemonUrl={this.state.pokemonUrl}/>
      {this.state.showPokedex && 
        <PokemonList 
        pokemon={this.state.pokemon} />}
        <button type="button" onClick={this.handleClick} style={pokedexButton} className='pokedexBtn'>POKEDEX</button>
      </>
    )
  }
  return (
    <div>
      <Router>
        <div className="pokedex">
        </div>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}
}
export default App;