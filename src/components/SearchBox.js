import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div class="SearchBox-container">
        <input className="SearchBox" placeholder="search">
            
        </input>
        <i class="material-icons">search</i>
      </div>
    );
  }
}

export default SearchBox;
