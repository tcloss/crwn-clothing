import React, {useEffect } from 'react';
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils'
import { checkUserSession } from './redux/user/users.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  useEffect( () => {
    checkUserSession();
  }, []);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        {/* <Route  path='/shop/:collectionId' component={CollectionPage}/> */}
        <Route exact path='/signin' render={() =>
        
            currentUser ? (
              <Redirect to = '/'/>
            ) : (
              <SignInAndSignUpPage/>
            )
          }
        />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
