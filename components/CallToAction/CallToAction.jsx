import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleGetFunded = () => {
    navigate("/signup");
  };

  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Get your startup funded by top investors
        </h2>
        <p className={styles.description}>
          Don't miss this opportunity to take your startup to the next level
        </p>
        <button className={styles.ctaButton} onClick={handleGetFunded}>
          Get Funded Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
