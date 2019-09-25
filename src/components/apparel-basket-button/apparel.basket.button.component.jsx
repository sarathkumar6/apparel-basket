import React from 'react';
import './apparel.basket.component.styles.scss';

const AppBasketButton = ({children, ...otherProps}) => (
    <button className='app-basket-button'>
        {children}
    </button>
);

export default AppBasketButton;