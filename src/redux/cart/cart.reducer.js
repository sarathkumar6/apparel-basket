import CartActionTypes from './cart.types';

const INITIAL_STATE= {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    return action.type === CartActionTypes.TOGGLE_CART_HIDDEN ?
            {
                ...state,
                hidden: !state.hidden
            } :
            state;
}

export default cartReducer;