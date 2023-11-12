import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="py-8">
      <a href="/">
        <img src={logo} alt="Bitcasino Logo - Click to go to homepage" />
      </a>
    </nav>
  );
};

export default Navbar;
