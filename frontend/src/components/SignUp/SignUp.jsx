import React, { useEffect, useState } from "react";
import styles from "../CreateCompany/SignUpFlow.module.css";
import { Link } from "react-router-dom";

import { signup } from "../../api/auth";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    const clearCookies = () => {
      Object.keys(cookies).forEach((cookieName) => {
        removeCookie(cookieName);
      });
    };
    clearCookies();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(formData);
      alert("Signup Successful!");
      formData.role === "company"
        ? navigate("/createCompany")
        : navigate("/listings");
    } catch (err) {
      alert("Signup Failed! Please try again");
      console.log("Error Signing up: ", err);
    }
    console.log(formData);
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Create your account</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                userName: e.target.value,
              })
            }
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value,
              })
            }
            required
          >
            <option value="">Role</option>
            <option value="company">company</option>
            <option value="investor">investor</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
        <p className={styles.loginLink}>
          Already have an account? <Link to="/signin">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
