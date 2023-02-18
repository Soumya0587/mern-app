import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/allnote"}>all notes</Link>
      <Link to={"/createnote"}>create note</Link>
    </div>
  );
};

export default Navbar;