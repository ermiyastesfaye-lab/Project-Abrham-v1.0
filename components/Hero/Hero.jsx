import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Fueling Innovation: Where Startups Meet Investors</h1>
      <p>
        Empowering visionaries and investors to connect, collaborate, and build
        the next generation of innovative startups.
      </p>
      <Link to="/signup" className={styles.joinNow}>
        Join now
      </Link>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>100+</span>
          <span className={styles.statLabel}>startups and investors</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
