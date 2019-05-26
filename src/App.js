import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'



class App extends Component {
  

  

  render() {
    return (
      <div className="App" >
        <div>
          <h1>Welcome to city stats</h1>
        </div>
        <div>
          <Search />
        </div>
        

      </div>
    );
  }
}

export default App;
