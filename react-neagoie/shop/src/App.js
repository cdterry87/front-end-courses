import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header'
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/login" component={SignInSignUp}/>
      </Switch>
    </div>
  )
}

export default App
