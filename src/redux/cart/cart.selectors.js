import { createSelector} from 'reselect';
import _ from 'lodash';

// Two types of selectors: Input and Output

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => _.reduce(cartItems, (accumulator, cartItem) => 
    _.add(accumulator, _.get(cartItem, 'quantity', 0)), 0)
)