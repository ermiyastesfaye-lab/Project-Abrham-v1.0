import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logoImage/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinNowClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <Link
          to="/"
          className={styles.navLink}
          onClick={() => scrollToSection("about-us")}
        >
          About Us
        </Link>
        <Link
          to="/"
          className={styles.navLink}
          onClick={() => scrollToSection("how-it-works")}
        >
          How it works
        </Link>
        <Link to="/contact" className={styles.navLink}>
          Contact Us
        </Link>
        <Link to="/payment" className={styles.navLink}>
          Subscribe
        </Link>
      </nav>
      <div className={styles.actions}>
        <button className={styles.joinNow} onClick={handleJoinNowClick}>
          Join now
        </button>
        <button className={styles.login} onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <button
        className={`${styles.hamburger} ${
          isOpen ? styles.hamburgerActive : ""
        }`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
