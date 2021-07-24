/*
github.com/ofk0
*/
import React from 'react';
import { ReactComponent as SearchIcon } from '../images/search-icon.svg';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
    };
  }

  onSearch(e) {
    const value = e.target.value;
    if (value.length < 3) return this.props.onInput('');
    this.props.onInput(value);
  }

  render() {
    return (
      <div className="ui-container ui-mt-20">
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search Pokemon..."
            className="search-input"
            onChange={this.onSearch.bind(this)}
          />
          <span className="search-icon">
            <SearchIcon />
          </span>
        </div>
      </div>
    );
  }
}
