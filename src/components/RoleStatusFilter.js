import React, { Component } from 'react';
import './RoleStatusFilter.css';

class RoleStatusFilter extends Component {
  render() {
    return (
        <div class="RoleStatusFilter-container">
            <label class="rsf-label" htmlFor="RoleStatusFilter">
                Role Status
            </label>
            <select class="RoleStatusFilter">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="ActiveAndInactive">Active and Inactive</option>
            </select> 
        </div>
        
    );
  }
}

export default RoleStatusFilter;

