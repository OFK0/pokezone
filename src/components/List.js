/*
github.com/ofk0
*/
import React from 'react';

import pokemonService from '../services/pokemon';

import Search from './Search';
import Pokemon from './Pokemon';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      pokemons: [],
    };
  }

  async componentDidMount() {
    await this.getPokemons(this.state.limit, this.state.offset);
  }

  async getPokemons(limit = 10, offset = 0) {
    const pokemons = await pokemonService.getAll(limit, offset);
    this.setState({
      offset: this.state.offset,
      pokemons,
    });
  }

  async filterBySearched(param) {
    if (param === '') {
      await this.getPokemons(10, 0);
      return;
    }
    this.setState({
      pokemons: this.state.pokemons.filter(({ name }) => name.toLowerCase().includes(param.toLowerCase())),
    });
    this.render();
  }

  goToPrevPage() {
    if (this.state.offset - this.state.limit < 0) return false;
    this.setState(
      {
        offset: this.state.offset - this.state.limit,
      },
      () => {
        this.getPokemons(this.state.limit, this.state.offset);
      }
    );
  }

  goToNextPage() {
    this.setState(
      {
        offset: this.state.offset + this.state.limit,
      },
      () => {
        this.getPokemons(this.state.limit, this.state.offset);
      }
    );
  }

  render() {
    return (
      <div className="pokemon-list">
        <Search onInput={this.filterBySearched.bind(this)} />
        <div className="pokemon-list-container">
          {this.state.pokemons.map((pokemon) => {
            return <Pokemon key={`pokemon-${pokemon.name}`} data={pokemon} />;
          })}
        </div>
        <div className="ui-container ui-mt-20 pagination">
          {this.state.offset - this.state.limit >= 0 && (
            <button type="button" onClick={this.goToPrevPage.bind(this)}>
              Previous
            </button>
          )}
          {this.state.offset < 1118 && (
            <button type="button" onClick={this.goToNextPage.bind(this)}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}
