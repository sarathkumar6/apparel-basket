import React from 'react';

import ApparelBasketButton from '../apparel-basket-button/apparel.basket.button.component'

import './cart-dropdown.styles.scss';


const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <ApparelBasketButton>
            Go To Checkout
        </ApparelBasketButton>
    </div>
)

export default CartDropDown;