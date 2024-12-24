import React from "react";
import products from "../data/products";

const ProductList = ({ addToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.thumbnail} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;