import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox-container">
        <input className="SearchBox" placeholder="search">
        </input>
        <i className="material-icons">search</i>
      </div>
    );
  }
}

export default SearchBox;
