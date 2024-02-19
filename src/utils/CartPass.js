import React from 'react'
import { CartItem } from '../CartItems';

const CartPass = (props) => {
    console.log(props);
    const cartData = props.cartData;
    return Object.entries(cartData).map(([productString, count]) => {
        const product = JSON.parse(productString);
        return <CartItem key={product.id} item={product} count={count} />;
    });
};

export default CartPass