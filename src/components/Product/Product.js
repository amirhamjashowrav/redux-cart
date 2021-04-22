import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;

    return (
        <div style={{border: '2px solid tomato', margin: '15px', padding: '20px'}}>
            <h5>{product.name}</h5>
            <button onClick = {() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;