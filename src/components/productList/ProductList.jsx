import React from 'react';
import Product from "../product/Product"
import { products } from '../../data';
import "./productList.css";

const ProductList = () => {
  return (
    <div className='productList'>
        <div className="productList-texts">
            <h1 className="productList-title">Stay Goofy, Stay Weird</h1>
            <p className="productList-description">
                How can yuo define a developer? Of course by seeing his / her <strong>Builds</strong>. Here're mine...
                Please review them & contact with me. Obviously, another builds are on the way! 
            </p>
        </div>
        <div className="productList-items">
            {products.map((item) => (
              <Product key = {item.id} img = {item.img} link = {item.link} name={item.name} />
            ))}
        </div>
    </div>
  )
}

export default ProductList;