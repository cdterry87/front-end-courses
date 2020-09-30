import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Chase',
        age: 33
      },
      {
        name: 'Danielle',
        age: 28
      },
      {
        name: 'Caiden',
        age: 4
      }
    ]
  }

  switchNameHandler = () => {
    console.log('on click')
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: art</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}

export default App;
