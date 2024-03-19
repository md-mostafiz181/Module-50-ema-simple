import React from 'react';
import "./Product.css"

const Product = ({product}) => {

    console.log(product)

    const {img,name,seller,price}=product;
    return (
        <div className='show-product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{seller}</h4>
            <p>{price}</p>

            <button>Add to Cart</button>
            
        </div>
    );
};

export default Product;