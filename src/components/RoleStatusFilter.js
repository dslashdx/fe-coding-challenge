import React, { Component } from 'react';
import { filterByStatus } from '../actions/actions';
import { connect } from 'react-redux';

import './RoleStatusFilter.css';

class RoleStatusFilter extends Component {
    render() {
        return (
            <div className="RoleStatusFilter-container">
                <label className="rsf-label" htmlFor="RoleStatusFilter">
                    Role Status
            </label>
                <select onChange={(e) => this.props.filterOnChange(e.target.value)} className="RoleStatusFilter">
                    <option value="ActiveAndInactive">Active and Inactive</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    filterOnChange: status => dispatch(filterByStatus(status))
})

export default connect(null, mapDispatchToProps)(RoleStatusFilter);

