import React from "react";
import "./FooterStyle.css";

export default function Footer() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      <div className="scrolling">
        <button onClick={scrollToTop}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/892/892692.png" 
            alt="Scroll to top"
          />
        </button>
      </div>
      
      <div className="footer-title">
        <h3>Thank You ... Visit Again ...</h3>
      
      </div>
    </footer>
  );
}
