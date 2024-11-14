import React, { useState } from "react";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accountNumber: "",
    phoneNumber: "",
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setFormData({
      name: "",
      email: "",
      accountNumber: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", { paymentMethod, ...formData });
    // Here you would typically send the data to your server or payment processor
  };

  return (
    <div className={styles.paymentPage}>
      <h1 className={styles.title}>Payment Page</h1>
      <div className={styles.paymentOptions}>
        <button
          className={`${styles.paymentOption} ${
            paymentMethod === "cbe" ? styles.selected : ""
          }`}
          onClick={() => handlePaymentMethodChange("cbe")}
        >
          CBE Birr
        </button>
        <button
          className={`${styles.paymentOption} ${
            paymentMethod === "tele" ? styles.selected : ""
          }`}
          onClick={() => handlePaymentMethodChange("tele")}
        >
          Tele-birr
        </button>
      </div>
      {paymentMethod && (
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          {paymentMethod === "cbe" && (
            <div className={styles.formGroup}>
              <label htmlFor="accountNumber">CBE Bank Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {paymentMethod === "tele" && (
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <button type="submit" className={styles.submitButton}>
            Submit Payment
          </button>
        </form>
      )}
    </div>
  );
}

export default PaymentPage;
