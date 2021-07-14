import React, { useState, useRef } from 'react'

import Button from '../ui/Button'
import Card from '../ui/Card'
import ErrorModal from '../ui/ErrorModal'
import Wrapper from '../helpers/Wrapper'

import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()

    const inputName = nameInputRef.current.value
    const inputAge = ageInputRef.current.value

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      return
    }
    if (+inputAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than zero'
      })
      return
    }

    onAddUser(inputName, inputAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const confirmHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser