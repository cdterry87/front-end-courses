import { useState } from 'react'

import Button from '../ui/Button'
import Card from '../ui/Card'
import ErrorModal from '../ui/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than zero'
      })
      return
    }

    onAddUser(enteredUsername, enteredAge)

    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangedHandler = event => {
    setEnteredUsername(event.target.value)
  }

  const ageChangedHandler = event => {
    setEnteredAge(event.target.value)
  }

  const confirmHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser