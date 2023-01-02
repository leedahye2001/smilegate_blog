import React from "react";
import Logo from "../img/slog_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=daily">
            <h6>DAILY</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=fashion">
            <h6>FASHION</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <span>이다혜</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              글쓰기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
