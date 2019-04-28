import React, { Component } from 'react';
import './App.css';

import SearchBox from './components/SearchBox';
import RoleStatusFilter from './components/RoleStatusFilter';
import CreateRoleButton from './components/CreateRoleButton';
import RoleCardContainer from './components/RoleCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          User Roles Management
        </header>

        <div className="Control-bar">
          <SearchBox />
          <RoleStatusFilter/>
          <CreateRoleButton/>
        </div>
        <RoleCardContainer/>
      </div>
    );
  }
}

export default App;
