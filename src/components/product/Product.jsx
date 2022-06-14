import React from 'react';
import "./product.css";

const Product = ( { img, link, name } ) => {
  return (
    <div className='product'>
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <p className='product-bg-text'>{name}</p>
      <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="" className='product-img' />
      </a>
    </div>
  )
}

export default Product;