import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <footer className="footer">
        <div className="footer-links">
          <Link to="/">
            <i className="fas fa-home" />
            <span>Home</span>
          </Link>
          <Link to="/Leads">
            <i className="fas fa-user-friends" />
            <span>Leads</span>
          </Link>
          <Link to="/Buying">
            <i className="fas fa-shopping-cart" />
            <span>Buying</span>
          </Link>
          <Link to="/Team">
            <i className="fas fa-users" />
            <span>Team</span>
          </Link>
          <Link to="/Profile">
            <i className="fas fa-user" />
            <span>Profile</span>
          </Link>
        </div>
      </footer>
  );
};

export default Footer;
