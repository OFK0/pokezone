/*
github.com/ofk0
*/
import React from 'react';

export default class PokemonAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.abilities ?? [],
    };
  }

  render() {
    return (
      <div className="pokemon-abilities">
        {this.state.data
          .filter((ability) => !ability.is_hidden)
          .map((ability) => {
            return (
              <div key={`${ability.ability.name}-${ability.slot}`} className="pokemon-ability">
                {ability.ability.name.toUpperCase()}
              </div>
            );
          })}
      </div>
    );
  }
}
