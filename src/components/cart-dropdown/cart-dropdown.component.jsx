import React from 'react';
import _ from 'lodash';
import ApparelBasketButton from '../apparel-basket-button/apparel.basket.button.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';


const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            _.map(cartItems, (item) => (
                <CartItem key={item.id} item={item}></CartItem>
            ))
        }
        </div>
        <ApparelBasketButton>
            Go To Checkout
        </ApparelBasketButton>
    </div>
)

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps, null)(CartDropDown);