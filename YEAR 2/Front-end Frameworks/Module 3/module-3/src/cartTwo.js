import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  return (
    <div>
      <h2>Cart</h2>
      <p>Total: ${cartTotal}</p>
      {/* Other cart contents can be displayed here */}
    </div>
  );
};

export default Cart;