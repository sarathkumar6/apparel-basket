// Actual code combines all the states together
// Redux is so opinionated about how to use
import { combineReducers } from 'redux';
import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';

// combineReducers combines all the reducers/state together
export default combineReducers( {
    user: userReducer,
    cart: cartReducer
})