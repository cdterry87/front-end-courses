import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('App.js constructor')
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props)

    return state
  }

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate')
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    // Objects are reference types so we want to create a copy of the person in the object rather than mutate persob object in state directly
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice() // make a copy of the original array
    const persons = [...this.state.persons] // make a copy of the original array
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  render () {
    console.log('App.js render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: !this.state.showCockpit})
        }}>Toggle Cockpit</button>
        {
          this.state.showCockpit ?
          <Cockpit 
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          : null
        }
        {persons}
      </WithClass>
    );

    // This is what the above code will compile to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;