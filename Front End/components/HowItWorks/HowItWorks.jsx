import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/signup");
  };

  return (
    <section id="how-it-works" className={styles.howItWorks}>
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
      <div className={styles.cta}>
        <h3>Get your startup funded</h3>
        <p>
          Join the funding platform for startups and investors, get funded by
          top VCs, angel investors, and corporate partners!
        </p>
        <button className={styles.joinNow} onClick={handleJoinNow}>
          Join now
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;
