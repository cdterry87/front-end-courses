import React, { useEffect, useRef } from 'react'
import AuthContext from '../../context/auth-context'

import classes from './Cockpit.css'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null)

  // useEffect combines componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('Cockpit.js useEffect')

    // const timer = setTimeout(() => {
    //   // alert('saved data to cloud')
    // }, 1000)

    toggleBtnRef.current.click()

    // You can use this like you'd use componentWillUnmount to cleanup before something is removed from DOM
    // It runs after every render cycle
    return () => {
      console.log('Cockpit.js cleanup work in useEffect')
    }
  }, [props.persons]) // Adding the second argument here makes it so useEffect only updates if persons changes
  // If you add an empty array [] as the second argument, it'll only run the first time and never again

  // You can use useEffect multiple times if you want. This one will run every time even if persons is not updated
  useEffect(() => {
    console.log('Cockpit.js 2nd useEffect')
    return () => {
      console.log('Cockpit.js cleanup work in 2nd useEffect')
    }
  })

  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.Red
  }

  let assignedClasses = []
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>

      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(cockpit)
// React.memo stores a snapshop of this component and if the inputs don't change for this component, it won't re-render
// This is an alternative to shouldComponentUpdate optimization for functional components