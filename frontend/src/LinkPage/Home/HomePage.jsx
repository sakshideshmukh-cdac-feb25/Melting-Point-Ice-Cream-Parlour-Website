import React, { useEffect, useState } from "react";
import "./HomePageStyle.css";

export default function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000); // Change background every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-container bg-${bgIndex}`}>
      <div className="rotate-circle">
        <img src="./Tag/badge-2.png" alt="Badge" />
        <img src="./Tag/badge-2-bg.png" alt="Badge Background" className="rotate" />
      </div>

      <div className="header-content">
        <h2>Ice-Cream</h2>
        <h3>Delicious & Chilling!</h3>
        <p>
          Scoop into happiness with our rich, creamy, & irresistibly delicious
          ice creams!🍦 Made with love❤️ & the finest ingredients, every bite is
          a taste of pure joy.😋 From classic favorites to exciting new flavors,
          there's a perfect scoop for everyone🥰!!!
        </p>

        <div className="buy-order">
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
}