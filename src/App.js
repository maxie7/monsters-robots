import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'asc1',
          name: 'Frankenstein'
        },
        {
          id: 'asc2',
          name: 'Dracula'
        },
        {
          id: 'asc3',
          name: 'Zombie'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map( monster => <h1 key={monster.id}>{ monster.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
