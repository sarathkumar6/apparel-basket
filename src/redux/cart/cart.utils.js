import _ from 'lodash';
export const addItemToCart = (cartItems, addItem) => {
    const alreadyExists = _.find(cartItems, (item)=> item.id === addItem.id);

     if(alreadyExists) {
        return _.map(cartItems, function updatedCart(item) {
            return _.isEqual(item.id, addItem.id) ? 
            {...item, quantity: item.quantity + 1} : item;
        });
     }
     addItem.quantity = 1;
     return [...cartItems, {...addItem, quantity: 1}];
     
}   