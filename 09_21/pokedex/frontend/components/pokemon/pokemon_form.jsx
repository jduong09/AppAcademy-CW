import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.pokemon.name ? this.props.pokemon.name : "",
      attack: this.props.pokemon.attack ? this.props.pokemon.attack : "",
      defense: this.props.pokemon.defense ? this.props.pokemon.defense : "",
      poke_type: this.props.pokemon.pokeType ? this.props.pokemon.pokeType : "",
      image_url: this.props.pokemon.imageUrl ? this.props.pokemon.imageUrl : "",
      move_names: [],
      move1: this.props.moves[0] ? this.props.moves[0] : "",
      move2: this.props.moves[1] ? this.props.moves[1] : ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(property) {
    return e => {
        return this.setState({ [property]: e.target.value });
    }
  };
  
  addMoves() {
    const mutatedArray = this.state.move_names;
    mutatedArray.push(this.state.move1);
    mutatedArray.push(this.state.move2);
    this.setState({ move_names: mutatedArray });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addMoves();

    const form = { 
      pokemon: {
        name: this.state.name,
        attack: this.state.attack,
        defense: this.state.defense,
        poke_type: this.state.poke_type,
        image_url: this.state.image_url,
        move_names: this.state.move_names
      }
    };

    if (this.props.match.params.id) {
      form.id = this.props.match.params.id;
      this.props.updatePokemon(form).then(updatedPokemon => this.props.history.push(`/pokemon/${updatedPokemon.id}`));
    } else {
      this.props.createPokemon(form).then(newPokemon => this.props.history.push(`/pokemon/${newPokemon.id}`));
    }
  };

  updatePokemon() {
    if (this.props.match.params.pokemonId) {
      return <button type="submit">Update Pokemon</button>
    } else {
      return <button type="submit">Create Pokemon</button>
    }
  };

  render() {
    const { pokemon, moves } = this.props;

    const pokeTypes = ['fire', 'electric', 'normal', 'ghost', 'psychic', 'water', 'bug', 'dragon', 'grass', 'fighting', 'ice', 'flying', 'poison', 'ground', 'rock', 'steel']
      .map((poke_type, idx) => {
        return <option key={idx} value={poke_type}>{poke_type}</option>
      }
    );

    const errorsList = this.props.errors.map((error, idx)=> {
      return (
        <li className="error" key={idx}>{error}</li>
      );
    });

    let submitButton;
    if (this.props.match.params.id) {
      submitButton = <button type="submit">Update Pokemon</button>;
    } else {
      submitButton = <button type="submit">Create Pokemon</button>;
    }
    
    return (
      <section className="pokemon-detail">
        <ul>{errorsList}</ul>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder={pokemon.name ? pokemon.name : "Name"} onChange={this.handleChange("name")} />

          <input type="text" value={this.state.image_url} placeholder={pokemon.imageUrl ? pokemon.imageUrl : "Image Url"} onChange={this.handleChange("image_url")} />
          
          <input type="number" value={this.state.attack} placeholder={pokemon.attack ? pokemon.attack : "Attack"} onChange={this.handleChange("attack")} />
          
          <input type="number" value={this.state.defense} placeholder={pokemon.defense ? pokemon.defense : "Defense"} onChange={this.handleChange("defense")} />
          
          <select value={this.state.poke_type} onChange={this.handleChange("poke_type")}>
            {pokeTypes}
          </select>

          <input type="text" value={this.state.move1} placeholder="Move 1" onChange={this.handleChange("move1")} />

          <input type="text" value={this.state.move2} placeholder="Move 2" onChange={this.handleChange("move2")} />

          {submitButton}
        </form>
      </section>
    );
  };
};

export default PokemonForm;