import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroBackground from "../../assets/Images/hero-bg.jpg";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className={styles.content}>
        <h1>Fueling Innovation: Where Startups Meet Investors</h1>
        <p>
          Empowering visionaries and investors to connect, collaborate, and
          build the next generation of innovative startups.
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/signup" className={styles.joinNow}>
            Join now
          </Link>
          <Link to="/signin" className={styles.login}>
            Login
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>startups and investors</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
