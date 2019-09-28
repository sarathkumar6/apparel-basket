import React from 'react';
import './apparel.basket.component.styles.scss';

const AppBasketButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in' : ''} app-basket-button`}
        {...otherProps}>
        {children}
    </button>
);

export default AppBasketButton;