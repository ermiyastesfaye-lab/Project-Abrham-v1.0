import React, { useEffect, useState } from "react";
import styles from "../CreateCompany/SignUpFlow.module.css";
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
    <div className={styles.signUpFlow}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Create your account</h2>
        <input
          type="text"
          placeholder="User name"
          value={formData.userName}
          onChange={(e) =>
            setFormData({
              ...formData,
              userName: e.target.value,
            })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
