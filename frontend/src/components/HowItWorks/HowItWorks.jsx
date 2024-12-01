import React from "react";
import { Link } from "react-router-dom";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2>How it works</h2>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <h3>SIGN UP</h3>
          <p>
            Create your account and complete your profile with relevant
            information.
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <h3>POST YOUR IDEA</h3>
          <p>
            Share your startup idea or investment opportunity with our
            community.
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <h3>GET INVESTMENT</h3>
          <p>
            Connect with investors and secure funding to bring your ideas to
            life.
          </p>
        </div>
      </div>

      <div className={styles.getFunded}>
        <h2>Get your startup funded</h2>
        <p>
          Join the funding platform for startups and investors, get funded by
          top VCs, angel investors, and corporate partners!
        </p>
        <Link to="/signup" className={styles.joinNow}>
          Join now
        </Link>
      </div>
    </section>
  );
}

export default HowItWorks;
