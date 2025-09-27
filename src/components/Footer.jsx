import React from 'react';

const Footer = () => {
  return (
   <footer className="footer">
        <div className="footer-links">
          <a href="/">
            <i className="fas fa-home" />
            <span>Home</span>
          </a>
          <a href="/Leads">
            <i className="fas fa-user-friends" />
            <span>Leads</span>
          </a>
          <a href="/Buying">
            <i className="fas fa-shopping-cart" />
            <span>Buying</span>
          </a>
          <a href="/Team">
            <i className="fas fa-users" />
            <span>Team</span>
          </a>
          <a href="/Profile">
            <i className="fas fa-user" />
            <span>Profile</span>
          </a>
        </div>
      </footer>
  );
};

export default Footer;
