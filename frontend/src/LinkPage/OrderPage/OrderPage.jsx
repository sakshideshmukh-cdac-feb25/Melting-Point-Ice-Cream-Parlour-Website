import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./OrderStyle.css";

export default function OrderPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Simulated auth state (you can persist this using localStorage if needed)
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is stored in localStorage (simulate login persistence)
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!user) {
      const shouldSignup = window.confirm(
        "You must sign up before placing an order. Go to signup?"
      );
      if (shouldSignup) {
        navigate("/signup");
      }
      return;
    }

    alert(`Thank you, ${user.name}! Your order has been placed.`);
    clearCart();
  };

  return (
    <div className="OrderPage-container">
      <div className="left-side">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="item">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Qty: {item.quantity}</p>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <div className="right-side">
        <h1>Order Summary</h1>
        {cart.length > 0 && (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity} = ₹
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
            <button onClick={placeOrder}>Place Order</button>
          </>
        )}
      </div>
    </div>
  );
}
