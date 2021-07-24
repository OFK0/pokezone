/*
github.com/ofk0
*/
import React from 'react';
import pokemonService from '../services/pokemon';

import PokemonAbilities from './Pokemon/Abilities';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      ...props.data,
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const pokemonDetails = await pokemonService.getPokemonByUrl(this.state.url);
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({ loading: false, ...pokemonDetails });
      }
    }, 1000 * Math.random());
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.loading)
      return (
        <div className="pokemon-item ui-container ui-no-padding ui-mt-10">
          <div className="pokemon-loading">Loading...</div>
        </div>
      );
    return (
      <div className="pokemon-item ui-container ui-no-padding ui-mt-10">
        <div className="pokemon">
          <div
            className="pokemon-image"
            style={{
              backgroundImage: `url(${this.state.sprites.other['official-artwork'].front_default})`,
            }}
          ></div>
          <div className="pokemon-details">
            <div className="pokemon-id">#{this.state.id}</div>
            <div className="pokemon-name">{this.state.name}</div>
            <div className="pokemon-info">Base Exp: {this.state.base_experience}</div>
            <div className="pokemon-info">Weight: {this.state.weight}</div>
            <div className="pokemon-info">Height: {this.state.height}</div>
            <PokemonAbilities abilities={this.state.abilities} />
          </div>
        </div>
      </div>
    );
  }
}
