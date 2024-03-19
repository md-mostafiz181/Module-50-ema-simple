import React, { useEffect, useState } from 'react';
import "./Shop.css"

const Shop = () => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>all product comes here: {products.length}</h2>
            </div>
            <div className="order-history">
                <h2>Product pricing history come here</h2>
            </div>
            
        </div>
    );
};

export default Shop;