import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js getDerivedStateFromProps')
  //   return state
  // }

  // If you have to check ALL props in shouldComponentUpdate, you might want to extend React PureComponent and remove this function
  // PureComponent already implements shouldComponentUpdate and checks all props for you to see if they changed :)
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js shouldComponentUpdate')
  //   return (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  //   )
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js getSnapshopBeforeUpdate')
    return { message: 'Snapshot!' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons.js componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('Persons.js componentWillUnmount')
  }

  render() {
    console.log('Persons.js rendering...')

    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    })
  }
}

export default Persons