import React from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from './pages/sign-in-sing-up/sign.in.sign.up.component'
import { auth } from './firebase/firebase.utils';

const HatsPage = (props) => (
  <div>
      <h1>
        HATS PAGE
      </h1>
    </div>
  );

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    // Useful to get the user session persistence - who's currently logged in
    // Subscription - observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      console.log(user);
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignUpPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
