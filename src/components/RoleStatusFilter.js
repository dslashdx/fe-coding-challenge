import React, { Component } from 'react';
import './RoleStatusFilter.css';

class RoleStatusFilter extends Component {
  render() {
    return (
        <div className="RoleStatusFilter-container">
            <label className="rsf-label" htmlFor="RoleStatusFilter">
                Role Status
            </label>
            <select className="RoleStatusFilter">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="ActiveAndInactive">Active and Inactive</option>
            </select> 
        </div>
        
    );
  }
}

export default RoleStatusFilter;

