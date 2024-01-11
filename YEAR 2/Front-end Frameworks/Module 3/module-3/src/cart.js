import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from './configStore';

const ProductCart = ({ products }) => {
    
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addProduct(product))
    }

    return (
        <div>
          <h2>Product List</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      );
}



export default ProductCart;