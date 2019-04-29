import React, { Component } from 'react';
import { filterBySearch } from '../actions/actions';
import { connect } from 'react-redux';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox-container">
                <input className="SearchBox" onChange={(e) => this.props.searchOnChange(e.target.value)} placeholder="search">
                </input>
                <i className="material-icons searchIcon">search</i>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    searchOnChange: status => dispatch(filterBySearch(status))
})

export default connect(null, mapDispatchToProps)(SearchBox);
