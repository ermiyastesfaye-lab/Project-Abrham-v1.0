import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForUsers.module.css";

function ForUsers() {
  return (
    <section className={styles.forUsers}>
      <div className={styles.container}>
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
              <li>✓ Access to global investors</li>
              <li>✓ Mentorship opportunities</li>
              <li>✓ Resource library</li>
              <li>✓ Networking events</li>
            </ul>
            <Link to="/signup?type=startup" className={styles.signupButton}>
              SIGN UP AS A STARTUP OWNER
            </Link>
          </div>

          <div className={styles.card}>
            <h3>FOR INVESTORS</h3>
            <p>
              Turning ideas into reality is tough, but you don't have to do it
              alone.
            </p>
            <ul>
              <li>✓ Curated startup deals</li>
              <li>✓ Due diligence tools</li>
              <li>✓ Investment tracking</li>
              <li>✓ Co-investment opportunities</li>
            </ul>
            <Link to="/signup?type=investor" className={styles.signupButton}>
              SIGN UP AS AN INVESTOR
            </Link>
          </div>

          <div className={styles.card}>
            <h3>For INDUSTRY OWNERS</h3>
            <p>
              Turning ideas into reality is tough, but you don't have to do it
              alone.
            </p>
            <ul>
              <li>✓ Industry partnerships</li>
              <li>✓ Innovation access</li>
              <li>✓ Market insights</li>
              <li>✓ Strategic opportunities</li>
            </ul>
            <Link to="/signup?type=industry" className={styles.signupButton}>
              SIGN UP AS AN INDUSTRY OWNER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForUsers;
