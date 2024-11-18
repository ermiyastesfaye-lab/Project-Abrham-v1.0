import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpFlow.module.css";

const STEPS = {
  INITIAL: "INITIAL",
  COMPANY_INFO: "COMPANY_INFO",
  DOCUMENTS: "DOCUMENTS",
  QUESTIONS: "QUESTIONS",
};

function SignUpFlow() {
  const [currentStep, setCurrentStep] = useState(STEPS.INITIAL);
  const [formData, setFormData] = useState({
    initial: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      phoneNumber: "",
      password: "",
    },
    companyInfo: {
      companyName: "",
      description: "",
      country: "",
      city: "",
      websiteUrl: "",
      sector: "",
      stage: "",
    },
    documents: {
      pitchDeck: null,
      otherDocuments: null,
    },
    questions: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
    },
  });

  const navigate = useNavigate();

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(STEPS.COMPANY_INFO);
  };

  const handleCompanyInfoSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(STEPS.DOCUMENTS);
  };

  const handleDocumentsSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(STEPS.QUESTIONS);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Idea submitted successfully!");
    navigate("/listings");
  };

  const handleFileChange = (e, documentType) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      documents: {
        ...prevData.documents,
        [documentType]: file,
      },
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.INITIAL:
        return (
          <form onSubmit={handleInitialSubmit} className={styles.form}>
            <h2>Create your account</h2>
            <input
              type="text"
              placeholder="First name"
              value={formData.initial.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, firstName: e.target.value },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={formData.initial.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, lastName: e.target.value },
                })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.initial.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, email: e.target.value },
                })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.initial.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, password: e.target.value },
                })
              }
              required
            />
            <button type="submit">Next</button>
          </form>
        );

      case STEPS.COMPANY_INFO:
        return (
          <form onSubmit={handleCompanyInfoSubmit} className={styles.form}>
            <h2>Company Information</h2>
            <input
              type="text"
              placeholder="Company name"
              value={formData.companyInfo.companyName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    companyName: e.target.value,
                  },
                })
              }
              required
            />
            <textarea
              placeholder="Description"
              value={formData.companyInfo.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    description: e.target.value,
                  },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Country"
              value={formData.companyInfo.country}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    country: e.target.value,
                  },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="City"
              value={formData.companyInfo.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    city: e.target.value,
                  },
                })
              }
              required
            />
            <button type="submit">Next</button>
          </form>
        );

      case STEPS.DOCUMENTS:
        return (
          <form onSubmit={handleDocumentsSubmit} className={styles.form}>
            <h2>Upload Documents</h2>
            <div className={styles.uploadBox}>
              <label htmlFor="pitchDeck">
                Upload Pitch Deck
                <input
                  id="pitchDeck"
                  type="file"
                  onChange={(e) => handleFileChange(e, "pitchDeck")}
                  required
                />
              </label>
              {formData.documents.pitchDeck && (
                <p>Selected file: {formData.documents.pitchDeck.name}</p>
              )}
            </div>
            <div className={styles.uploadBox}>
              <label htmlFor="otherDocuments">
                Upload Other Documents
                <input
                  id="otherDocuments"
                  type="file"
                  onChange={(e) => handleFileChange(e, "otherDocuments")}
                />
              </label>
              {formData.documents.otherDocuments && (
                <p>Selected file: {formData.documents.otherDocuments.name}</p>
              )}
            </div>
            <button type="submit">Next</button>
          </form>
        );

      case STEPS.QUESTIONS:
        return (
          <form onSubmit={handleFinalSubmit} className={styles.form}>
            <h2>Additional Information</h2>
            <textarea
              placeholder="What does your company do?"
              value={formData.questions.question1}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  questions: {
                    ...formData.questions,
                    question1: e.target.value,
                  },
                })
              }
              required
            />
            <textarea
              placeholder="What is your target market?"
              value={formData.questions.question2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  questions: {
                    ...formData.questions,
                    question2: e.target.value,
                  },
                })
              }
              required
            />
            <button type="submit">Submit</button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.signUpFlow}>
      <div className={styles.progress}>
        <div
          className={`${styles.step} ${
            currentStep === STEPS.INITIAL ? styles.active : ""
          }`}
        >
          1
        </div>
        <div
          className={`${styles.step} ${
            currentStep === STEPS.COMPANY_INFO ? styles.active : ""
          }`}
        >
          2
        </div>
        <div
          className={`${styles.step} ${
            currentStep === STEPS.DOCUMENTS ? styles.active : ""
          }`}
        >
          3
        </div>
        <div
          className={`${styles.step} ${
            currentStep === STEPS.QUESTIONS ? styles.active : ""
          }`}
        >
          4
        </div>
      </div>
      {renderStep()}
    </div>
  );
}

export default SignUpFlow;
