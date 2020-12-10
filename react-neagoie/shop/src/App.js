import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header'
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/login" component={SignInSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App
