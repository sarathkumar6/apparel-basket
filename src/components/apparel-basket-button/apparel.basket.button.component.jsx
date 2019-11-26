import React from 'react';
import './apparel.basket.component.styles.scss';

const AppBasketButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } app-basket-button`}
        {...otherProps}>
        {children}
    </button>
);

export default AppBasketButton;