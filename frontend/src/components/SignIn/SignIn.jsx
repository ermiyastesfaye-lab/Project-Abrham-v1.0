import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      navigate("/listings");
    } catch (err) {
      alert("Login failed! Please try again");
      console.log("Error Signing up: ", err);
    }
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinLeft}>
        <h2>WELCOME BACK</h2>
        <p>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Enter user name"
            value={formData.userName}
            onChange={handleChange}
            required
            className={styles.input}
          />
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
          <img src="/path-to-google-icon.png" alt="Google Icon" />
          Continue with Google
        </button>
        <p className={styles.signupLink}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div className={styles.signinRight}>
        <img
          src="/path-to-your-image.png"
          alt="Illustration"
          className={styles.signinIllustration}
        />
      </div>
    </div>
  );
};

export default SignIn;
