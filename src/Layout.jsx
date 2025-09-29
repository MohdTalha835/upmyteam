import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "10px",
            padding: "3px 18px",
            fontSize: "30px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#1f5bbbff",
            color: "white",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Layout;
