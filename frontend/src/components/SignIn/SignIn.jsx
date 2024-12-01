import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import { login } from "../../api/auth";
import signInBackground from "../../assets/Images/random.jpg";
import googleIcon from "../../assets/Images/google.png";

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
      console.log("Error Signing in: ", err);
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
            <Link to="/forgot-password">Forgot password</Link>
          </div>
          <button type="submit" className={styles.signinButton}>
            Login
          </button>
        </form>
        <div className={styles.divider}>OR</div>
        <button className={styles.googleButton}>
          <img src={googleIcon} alt="Google Icon" />
          Continue with Google
        </button>
        <p className={styles.signupLink}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <div
        className={styles.signinRight}
        style={{ backgroundImage: `url(${signInBackground})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2>Join our community of innovators and investors</h2>
          <p>Connect, collaborate, and create the future of startups</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
