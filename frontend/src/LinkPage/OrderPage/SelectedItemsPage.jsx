import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function SelectedItemsPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="selected-items-page">
      <h2>Selected Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ₹{totalPrice}</h3>
      <button onClick={clearCart} disabled={cart.length === 0}>
        Clear Cart
      </button>
      <Link to="/order">
        <button disabled={cart.length === 0}>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default SelectedItemsPage;
