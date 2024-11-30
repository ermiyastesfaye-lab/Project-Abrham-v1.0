import React, { useState } from "react";
import "./SignUp.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupLeft}>
        <h1>Join the Platform Connecting Startups with Investors</h1>
        <p>
          Whether you're a visionary entrepreneur or a seasoned investor, sign
          up today to unlock new opportunities.
        </p>
        <img
          src="/path-to-your-image.png"
          alt="Illustration"
          className={styles.signupIllustration}
        />
      </div>
      <div className={styles.signupRight}>
        <h2>Sign up now</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className={styles.input}
          >
            <option value="">Role</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="investor">Investor</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <p className={styles.passwordHint}>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" required />
            By creating an account, I agree to the Terms of use and Privacy
            Policy
          </label>
          <button type="submit" className={styles.signupButton}>
            Create an account
          </button>
        </form>
        <div className={styles.divider}>OR</div>
        <button className={styles.googleButton}>
          <img src="/path-to-google-icon.png" alt="Google Icon" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
