import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpFlow.module.css";
import { postCompany } from "../../api/company";
import { useCookies } from "react-cookie";

const STEPS = {
  COMPANY_INFO: "COMPANY_INFO",
  DOCUMENTS: "DOCUMENTS",
};

function CreateCompany() {
  const [cookie] = useCookies("userId");
  const [userId, setUserId] = useState(parseInt(cookie.userId, 10));
  console.log(`Cookie: ${userId}`);
  const [currentStep, setCurrentStep] = useState(STEPS.COMPANY_INFO);
  const [formData, setFormData] = useState({
    companyInfo: {
      companyCreator: userId,
      companyName: "",
      country: "",
      city: "",
      websiteUrl: "",
      sector: "",
      stage: "",
      businessSummary: "",
      pitchDeck: null,
      otherDocuments: null,
    },
  });

  useEffect(() => {
    setUserId(parseInt(cookie.userId, 10));
    setFormData((prevData) => ({
      ...prevData,
      companyInfo: {
        ...prevData.companyInfo,
        companyCreator: parseInt(cookie.userId),
      },
    }));
  }, [cookie.userId]);

  const navigate = useNavigate();
  const handleCompanyInfoSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      companyInfo: {
        ...prevData.companyInfo,
        // companyCreator: userId,
      },
    }));

    setCurrentStep(STEPS.DOCUMENTS);
  };

  const handleDocumentsSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();

    Object.keys(formData.companyInfo).forEach((key) => {
      formDataToSubmit.append(key, formData.companyInfo[key]);
    });

    if (formData.pitchDeck) {
      formDataToSubmit.append("pitchDeck", formData.companyInfo[pitchDeck]);
    }
    if (formData.otherDocuments) {
      formDataToSubmit.append(
        "otherDocuments",
        formData.companyInfo[otherDocuments]
      );
    }

    console.log("FormData being submitted:");
    for (let [key, value] of formDataToSubmit.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await postCompany(formDataToSubmit);
      alert("Company created successfully!");
      navigate("/listings");
    } catch (err) {
      alert("Posting company failed! Please try again");
      console.error("Error creating company:", err);
    }
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        companyInfo: {
          ...prevData.companyInfo,
          [name]: files[0],
        },
      }));
    }
  };
  const renderStep = () => {
    switch (currentStep) {
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
            <div>
              <label htmlFor="pitchDeck">
                Upload Pitch Deck
                <input
                  name="pitchDeck"
                  id="pitchDeck"
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="otherDocuments">
                Upload Other Documents
                <input
                  name="otherDocuments"
                  id="otherDocuments"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
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
            currentStep === STEPS.COMPANY_INFO ? styles.active : ""
          }`}
        >
          1
        </div>
        <div
          className={`${styles.step} ${
            currentStep === STEPS.DOCUMENTS ? styles.active : ""
          }`}
        >
          2
        </div>
      </div>
      {renderStep()}
    </div>
  );
}

export default CreateCompany;
