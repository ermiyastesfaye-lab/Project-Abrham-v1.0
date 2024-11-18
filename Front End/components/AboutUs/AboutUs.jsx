import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p className={styles.description}>
          We are a platform dedicated to connecting innovative startups with
          visionary investors. Our mission is to facilitate meaningful
          connections that drive innovation and growth in the startup ecosystem.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Our Mission</h3>
            <p>
              To democratize access to funding and support for startups
              worldwide.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Our Vision</h3>
            <p>
              Creating a world where every innovative idea has the chance to
              become reality.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Our Values</h3>
            <p>
              Innovation, Transparency, Collaboration, and Excellence in
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
