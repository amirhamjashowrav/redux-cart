import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h3>This is Cart</h3>
            <ul>
                {
                    cart.map(product => <li key = {product.cartId}>{product.name} <button onClick = {() => removeFromCart(product.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);