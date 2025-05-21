import React, { useState, useEffect, useContext } from "react";
import axios from "axios"; // Axios import
import "./ManuStyle.css"; // Make sure the file name is correct
import { CartContext } from "../OrderPage/CartContext"; // Ensure correct path

export default function Menu() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const { cart, addToCart } = useContext(CartContext); // Use shared cart

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Fetch ice cream data using Axios
  useEffect(() => {
    axios
      .get("/Data.json") // Replace this with your actual API endpoint if needed
      .then((response) => {
        // Assuming response.data contains the array of ice cream data
        const dataWithIds = response.data.map((item, index) => ({ ...item, id: index + 1 }));
        setItems(dataWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Render stars based on rating
  const renderStars = (rating) => {
    return (
      <span className="stars">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={
              i < rating
                ? "https://img.icons8.com/ios-filled/50/000000/star.png"
                : "https://img.icons8.com/ios/50/000000/star.png"
            }
            alt="star"
            className="star-icon"
          />
        ))}
      </span>
    );
  };

  // Toggle favorite status
  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === item.id)
        ? prevFavorites.filter((fav) => fav.id !== item.id)
        : [...prevFavorites, item]
    );
  };

  // Filter items based on search and brand selection
  const filteredItems = items.filter(
    (item) =>
      (selectedBrand === "All" || item.brand === selectedBrand) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      {/* Navbar */}
      <div className="navbar-content">
        <ul>
          {["All", "Amul", "Arun", "Kwality Walls", "Mother Dairy", "Top'N Town"].map((brand) => (
            <li key={brand}>
              <a href="#" onClick={() => setSelectedBrand(brand)}>
                {brand}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons for favorites and cart */}
        <div className="cart-icons">
          <div className="fav-section">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Like" />
            <span className="count">{favorites.length}</span>
          </div>
          <div className="cart-section">
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" />
            <span className="count">{cart.length}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Ice Cream..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Ice Cream List */}
      <div className="cart-container">
        {filteredItems.length === 0 ? (
          <div>No ice creams found</div>
        ) : (
          filteredItems.map((item) => (
            <div className="cart" key={item.id}>
              <div className="box">
                <img src={item.imageUrl} alt={item.name} />
              </div>

              <div className="title">
                <h1>{item.name}</h1>
                {renderStars(item.rating)}
              </div>

              <p>{item.description}</p>
              <h3 className="brand-name">{item.brand}</h3>

              <div className="price-tag">
                <h1>₹ {item.price.toFixed(2)}/-</h1>
              </div>
              <div className="actions">
                <button className="order-btn" onClick={() => addToCart(item)}>Order Now</button>
                <button className="fav-btn" onClick={() => toggleFavorite(item)}>
                  {favorites.some((fav) => fav.id === item.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
