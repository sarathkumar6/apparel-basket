import React from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign.in.sign.up.component'
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

// connect is a higher order component - 

const HatsPage = (props) => (
  <div>
      <h1>
        HATS PAGE
      </h1>
    </div>
  );

class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // Useful to get the user session persistence - who's currently logged in
    // Subscription - observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        })
      }
      setCurrentUser({
        currentUser: userAuth
      }, ()=>console.log(this.state));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignUpPage} />
          </Switch>
      </div>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  console.log('What the fuck is dispatch here? ', dispatch)
  return {
    setCurrentUser: (user) => {
      console.log('Who the fuck is user here? ', user);
      dispatch(setCurrentUser(user))
    }
}}
export default connect(null, mapDisPatchToProps)(App);
