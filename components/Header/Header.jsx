import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";

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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <Link to="/listings" className={styles.navLink}>
          About Us
        </Link>
        <a
          href="#how-it-works"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("how-it-works");
          }}
          className={styles.navLink}
        >
          How it works
        </a>
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
        {isOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Header;
