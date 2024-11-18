import React, { useState } from "react";
import styles from "./QuestionAndAnswers.module.css";

const QuestionAndAnswers = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    // Handle form submission here
  };

  return (
    <div className={styles.questionAndAnswers}>
      <form onSubmit={handleSubmit}>
        <div className={styles.question}>
          <p>What does your company do?</p>
          <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
            placeholder="Answer"
          />
        </div>
        <div className={styles.question}>
          <p>What does your company do?</p>
          <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
            placeholder="Answer"
          />
        </div>
        <div className={styles.question}>
          <p>What does your company do?</p>
          <input
            type="text"
            name="question3"
            value={answers.question3}
            onChange={handleChange}
            placeholder="Answer"
          />
        </div>
        <div className={styles.question}>
          <p>What does your company do?</p>
          <input
            type="text"
            name="question4"
            value={answers.question4}
            onChange={handleChange}
            placeholder="Answer"
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionAndAnswers;
