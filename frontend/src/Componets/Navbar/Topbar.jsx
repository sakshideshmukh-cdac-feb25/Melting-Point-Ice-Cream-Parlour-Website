import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './BarStyle.css';

export default function Topbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    // Watch for localStorage changes (e.g., from Login page)
    window.addEventListener("storage", checkLogin);
    checkLogin();

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false); // Manually trigger re-render
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/Assets/Logo1.png" alt="Ice Cream" className="logo" />
        <h3>Fr<span>o</span>st B<span>i</span>te</h3>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {!isLoggedIn ? (
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
