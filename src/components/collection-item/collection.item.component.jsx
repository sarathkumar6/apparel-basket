import React from 'react';
import './collection.item.styles.scss';
import AppBasketButton from '../apparel-basket-button/apparel.basket.button.component'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    // ToDo: Destructure item properties image url, name, price
    console.log('What is item here', item)
    return (
        <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <AppBasketButton onClick= {()=> addItem(item)} inverted>Add To Cart</AppBasketButton>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CollectionItem);