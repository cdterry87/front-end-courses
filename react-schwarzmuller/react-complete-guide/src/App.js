import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  const [ personsState, setPersonsState] = useState(
    {
      persons: [
        { name: 'Chase', age: 33 },
        { name: 'Danielle', age: 28 },
        { name: 'Caiden', age: 5 },
      ]
    }
  )

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState(
      {
        persons: [
          { name: 'Chase', age: 3 },
          { name: 'Danielle', age: 2 },
          { name: 'Caiden', age: 1 },
        ]
      }
    )
  }

  return (
    <div className="App">
      <h1></h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobbies: Coding, Anime, and Screamo
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  )
}

export default App;
