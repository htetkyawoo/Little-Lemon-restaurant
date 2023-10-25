import React from "react";
import logo2 from "../asset/logo_2.jpg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="container">
        <img src={logo2} alt="logo" height={48} />
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <NavLink to={"/booking"}>Reservations</NavLink>
          </li>
          <li>
            <a href="/order_online">Order Online</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
