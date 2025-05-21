import React from "react";
import "./ContactStyle.css";

import { BiCurrentLocation, BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs";

export default function ContactPage() {
  return (
    <div className="content-container">
      <div className="content-detail">
        <h3>Contact</h3>
        <ul>
          <li>
            <BiCurrentLocation /> Vani Vihar, Bhubaneswar, Odisha <br />
            <BiCurrentLocation /> Whitefield, Bangalore, Karnataka <br />
            <BiCurrentLocation /> Thane, Mumbai, Maharashtra <br />
            <BiCurrentLocation /> Jamshedpur, Jharkhand <br />
          </li>
          <br />
          <li>
            <BiPhoneCall /> +91 9090-123-143 (Bhubaneswar) <br />
            <BiPhoneCall /> +91 9090-123-143 (Bangalore) <br />
            <BiPhoneCall /> +91 9090-123-143 (Mumbai) <br />
            <BiPhoneCall /> +91 9090-123-143 (Jamshedpur) <br />
          </li>
          <br />
          <li>
            <BiTimeFive /> <span>Mon - Sat : 10:00 AM - 10:00 PM</span>
            <BiTimeFive /> <span>Sunday is Holiday</span>
          </li>
        </ul>
      </div>

      <div className="service_items">
        <h3>Our Services</h3>
        <div className="lines">
          <h2>Fast Delivery</h2>
          <h2>Easy Payments</h2>
          <h2>24 x 7 Service</h2>
          <h2>Secure</h2>
        </div>
      </div>

      <div className="service_items">
        <h3>Follow</h3>
        <div className="icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsTelegram />
        </div>
      </div>
    </div>
  );
}
