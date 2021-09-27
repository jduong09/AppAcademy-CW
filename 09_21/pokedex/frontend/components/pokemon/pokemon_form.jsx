import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "water",
      image_url: "",
      move_names: [],
      move1: "",
      move2: ""
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
    
    this.props.createPokemon({ 
      pokemon: {
        name: this.state.name,
        attack: this.state.attack,
        defense: this.state.defense,
        poke_type: this.state.poke_type,
        image_url: this.state.image_url,
        move_names: this.state.move_names
      }
    }).then(newPokemon => this.props.history.push(`/pokemon/${newPokemon.id}`));
  };

  render() {
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

    return (
      <section className="pokemon-detail">
        <ul>{errorsList}</ul>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange("name")} />

          <input type="text" value={this.state.image_url} placeholder="Image Url" onChange={this.handleChange("image_url")} />
          
          <input type="number" value={this.state.attack} placeholder="Attack" onChange={this.handleChange("attack")} />
          
          <input type="number" value={this.state.defense} placeholder="Defense" onChange={this.handleChange("defense")} />
          
          <select value={this.state.poke_type} onChange={this.handleChange("poke_type")}>
            {pokeTypes}
          </select>

          <input type="text" value={this.state.move1} placeholder="Move 1" onChange={this.handleChange("move1")} />

          <input type="text" value={this.state.move2} placeholder="Move 2" onChange={this.handleChange("move2")} />

          <button type="submit">Create Pokemon</button>
        </form>
      </section>
    );
  };
};

export default PokemonForm;