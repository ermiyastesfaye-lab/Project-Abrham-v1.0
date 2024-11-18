import React from "react";
import styles from "./ForUsers.module.css";

function ForUsers() {
  return (
    <section className={styles.forUsers}>
      <h2>
        The startup landscape is fragmented and overwhelming, making it
        difficult for everyone to thrive. We're here to bring clarity and
        simplify the journey.
      </h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>FOR STARTUP OWNERS</h3>
          <p>
            Turning ideas into reality is tough, but you don't have to do it
            alone.
          </p>
          <ul>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
          </ul>
          <button>SIGN UP AS A STARTUP OWNER</button>
        </div>
        <div className={styles.card}>
          <h3>FOR INVESTORS</h3>
          <p>
            Turning ideas into reality is tough, but you don't have to do it
            alone.
          </p>
          <ul>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
          </ul>
          <button>SIGN UP AS AN INVESTOR</button>
        </div>
        <div className={styles.card}>
          <h3>For INDUSTRY OWNERS</h3>
          <p>
            Turning ideas into reality is tough, but you don't have to do it
            alone.
          </p>
          <ul>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
            <li>Lorem ipsum, minim lorem</li>
          </ul>
          <button>SIGN UP AS AN INDUSTRY OWNER</button>
        </div>
      </div>
    </section>
  );
}

export default ForUsers;
