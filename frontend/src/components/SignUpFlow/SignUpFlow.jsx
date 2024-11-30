import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpFlow.module.css";
import { signup } from "../../api/auth";
import { postCompany } from "../../api/company";
import { useCookies } from "react-cookie";

const STEPS = {
  INITIAL: "INITIAL",
  COMPANY_INFO: "COMPANY_INFO",
  DOCUMENTS: "DOCUMENTS",
  QUESTIONS: "QUESTIONS",
};

function SignUpFlow() {
  const [cookie] = useCookies(["userId"]);
  const [userId, setUserId] = useState(cookie.userId);
  console.log(`Cookie: ${userId}`);
  const [currentStep, setCurrentStep] = useState(STEPS.INITIAL);
  const [formData, setFormData] = useState({
    initial: {
      userName: "",
      email: "",
      role: "",
      password: "",
    },
    companyInfo: {
      companyCreator: userId,
      companyName: "",
      country: "",
      city: "",
      websiteUrl: "",
      sector: "",
      stage: "",
      businessSummary: "",
      pitchDeck: "",
      otherDocuments: "",
    },
    // documents: {
    //   pitchDeck: null,
    //   otherDocuments: null,
    // },
  });

  useEffect(() => {
    setUserId(cookie.userId);
    setFormData((prevData) => ({
      ...prevData,
      companyInfo: {
        ...prevData.companyInfo,
        companyCreator: cookie.userId,
      },
    }));
  }, [cookie.userId]);

  const navigate = useNavigate();

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.initial);
      const res = await signup(formData.initial);
      setCurrentStep(STEPS.COMPANY_INFO);
    } catch (err) {
      alert("Signup failed! Please try again");
      console.log("Error Signing up: ", err);
    }
  };
  const handleCompanyInfoSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      companyInfo: {
        ...prevData.companyInfo,
        companyCreator: userId,
      },
    }));

    setCurrentStep(STEPS.DOCUMENTS);
  };

  const handleDocumentsSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postCompany(formData.companyInfo);
      console.log(res);
      navigate("/listings");
    } catch (err) {
      alert("Posting company failed! Please try again");
      console.log("Error Signing up: ", err);
    }
    console.log(cookie);
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
              placeholder="User name"
              value={formData.initial.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, userName: e.target.value },
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
            <select
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, role: e.target.value },
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
              value={formData.initial.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  initial: { ...formData.initial, password: e.target.value },
                })
              }
              required
            />
            <button type="submit">Signup</button>
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
            <input
              type="text"
              placeholder="Website url"
              value={formData.companyInfo.websiteUrl}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    websiteUrl: e.target.value,
                  },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="sector"
              value={formData.companyInfo.sector}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    sector: e.target.value,
                  },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="stage"
              value={formData.companyInfo.stage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    stage: e.target.value,
                  },
                })
              }
              required
            />
            <textarea
              placeholder="Business summary"
              value={formData.companyInfo.businessSummary}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    businessSummary: e.target.value,
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
            <input
              type="text"
              placeholder="pitchDeck"
              value={formData.companyInfo.pitchDeck}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    pitchDeck: e.target.value,
                  },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Other documents"
              value={formData.companyInfo.otherDocuments}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyInfo: {
                    ...formData.companyInfo,
                    otherDocuments: e.target.value,
                  },
                })
              }
              required
            />
            {/* <div className={styles.uploadBox}>
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
            </div> */}
            <button type="submit">Next</button>
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
