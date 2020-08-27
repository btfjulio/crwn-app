import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Authentication from './pages/authentication/authentication.component'
import Header from './components/header/header.component'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'
class App extends Component {
  // will be overrided in componentDidMount() 
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // when authentication object changes, this function returns the method to unsubscribe
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // check if correctly sign in
      if (userAuth) {
        // save the logged user in app state
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        // userAuth in this is is equivalent to null
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => {
            debugger
            return (
            currentUser ? (<Redirect to='/' />) : (<Authentication />)
          )}} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // will add this.props.user to App Component
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => {
    return dispatch(setCurrentUser(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
