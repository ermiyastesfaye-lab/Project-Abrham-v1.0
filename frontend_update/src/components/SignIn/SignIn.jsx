import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically validate the user's credentials
    // For now, we'll just call onSignIn and navigate to the dashboard
    onSignIn();
    navigate("/dashboard");
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinLeft}>
        <h2>WELCOME BACK</h2>
        <p>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
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
          <div className={styles.formOptions}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password</a>
          </div>
          <button type="submit" className={styles.signinButton}>
            Login
          </button>
        </form>
        <div className={styles.divider}>OR</div>
        <button className={styles.googleButton}>
          <img src="/placeholder.svg?height=20&width=20" alt="Google Icon" />
          Continue with Google
        </button>
        <p className={styles.signupLink}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div className={styles.signinRight}>
        <img
          src="/placeholder.svg?height=300&width=400"
          alt="Illustration"
          className={styles.signinIllustration}
        />
      </div>
    </div>
  );
};

export default SignIn;
