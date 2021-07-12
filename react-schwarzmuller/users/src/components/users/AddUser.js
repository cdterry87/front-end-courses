import { useState } from 'react'

import Button from '../ui/Button'
import Card from '../ui/Card'

import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
  }

  const usernameChangedHandler = event => {
    setEnteredUsername(event.target.value)
    console.log('enteredUsername', enteredUsername)
  }

  const ageChangedHandler = event => {
    setEnteredAge(event.target.value)
    console.log('enteredAge', enteredAge)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={usernameChangedHandler} />
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" onChange={ageChangedHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser