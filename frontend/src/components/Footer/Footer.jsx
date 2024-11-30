import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Name</h3>
          <p>
            Welcome to Name, where brilliance meets innovation! We're helping
            startups and investors to deliver exceptional products and services
            to satisfy your needs.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#startups">Startups</a>
            </li>
            <li>
              <a href="#manufacturing">Manufacturing</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Customer care</h3>
          <ul>
            <li>
              <a href="#help-center">Help center</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
            <li>
              <a href="#feedback">Survey & feedback</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Pages</h3>
          <ul>
            <li>
              <a href="#startups">Startups</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Subscribe Now</h3>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Submit</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="#facebook" className={styles.socialIcon}>
              FB
            </a>
            <a href="#twitter" className={styles.socialIcon}>
              TW
            </a>
            <a href="#instagram" className={styles.socialIcon}>
              IG
            </a>
            <a href="#linkedin" className={styles.socialIcon}>
              LI
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2023 Name Inc. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
