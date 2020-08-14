import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Authentication from './pages/authentication/authentication.component'
import Header from './components/header/header.component'
import { auth, createdUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  // will be overrided in componentDidMount() 
  unsubscribeFromAuth = null

  componentDidMount() {
    // when authentication object changes, this function returns the method to unsubscribe
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // check if correctly sign in
      if (userAuth) {
        // save the logged user in app state
        const userRef = await createdUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        // userAuth in this is is equivalent to null
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
