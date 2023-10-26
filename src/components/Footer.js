import React from "react";
import { Link } from "react-router-dom";
import restauranfood from "../asset/restauranfood.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='about' className="d-flex flex-column flex-sm-row justify-content-md-evenly my-2 container-fluid bg-primary text-white p-4">
      <img className="rounded-2 m-2" src={restauranfood} width={200} alt="footer"></img>
      <div>
        <Link className="nav-link m-2" to="/">Home</Link>
        <Link className="nav-link m-2" to="/#about">About</Link>
        <Link className="nav-link m-2" to="/#menu">Menu</Link>
        <Link className="nav-link m-2" to="/booking">Reservations</Link>
        <Link className="nav-link m-2" to="/#order">Order Online</Link>
        <Link className="nav-link m-2" to="/">Log in</Link>
      </div>
      <div className="d-flex flex-column m-2">
        <h5>Contact</h5>
        <address>
          <p>
            No.16, 7<sup>th</sup> street
          </p>
          <p>+95976299900</p>
          <p>hello@gmail.com</p>
        </address>
      </div>

      <div className="d-flex flex-column m-2">
        <FaFacebook size={32} className="m-2" />
        <FaInstagram size={32} className="m-2" />
        <FaTwitter size={32} className="m-2" />
      </div>
    </footer>
  );
};

export default Footer;
