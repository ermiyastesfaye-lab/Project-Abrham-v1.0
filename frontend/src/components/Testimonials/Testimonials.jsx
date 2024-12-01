import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testimonials.module.css";
import testimonialBackground from "../../assets/Images/test.jpg";

function Testimonials() {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/signup");
  };

  return (
    <section
      className={styles.testimonials}
      style={{ backgroundImage: `url(${testimonialBackground})` }}
    >
      <h2>Get your startup funded by TOP Investors</h2>
      <p>
        Accelerate your startup's growth with name, the fastest-growing
        community trusted by over 100 startups. Level up your fundraising,
        showcase your startup to global investors and get tailored
        introductions.
      </p>
      <button className={styles.joinNow} onClick={handleJoinNow}>
        Join now
      </button>
      <div className={styles.testimonialList}>
        <div className={styles.testimonial}>
          <div className={styles.stars}>★★★★★</div>
          <p>
            We are incredibly appreciative of all of our investors and the vital
            support we received from them.
          </p>
          <h3>John Doe - CEO</h3>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.stars}>★★★★★</div>
          <p>
            We are incredibly appreciative of all of our investors and the vital
            support we received from them.
          </p>
          <h3>Jane Smith - CTO</h3>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.stars}>★★★★★</div>
          <p>
            We are incredibly appreciative of all of our investors and the vital
            support we received from them.
          </p>
          <h3>Mike Johnson - Founder</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
