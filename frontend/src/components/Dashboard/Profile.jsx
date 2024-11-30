import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Profile.css";
import { useCookies } from "react-cookie";
import { editCompany, getCompany } from "../../api/company";

const Profile = () => {
  const [company, setCompany] = useState({});
  const [cookie] = useCookies(["userId"]);
  console.log(cookie);
  const userId = cookie.userId;
  console.log("User ID from cookie:", userId);
  console.log(document.cookie);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCompany(userId);
      setCompany(response.data);
    };
    fetchData();
  }, []);
  const [formData, setFormData] = React.useState({
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCompany = {};
    if (formData.companyName) updatedCompany.companyName = formData.companyName;
    if (formData.country) updatedCompany.country = formData.country;
    if (formData.city) updatedCompany.city = formData.city;
    if (formData.websiteUrl) updatedCompany.websiteUrl = formData.websiteUrl;
    if (formData.sector) updatedCompany.sector = formData.sector;
    if (formData.stage) updatedCompany.stage = formData.stage;
    if (formData.businessSummary)
      updatedCompany.businessSummary = formData.businessSummary;
    if (formData.pitchDeck) updatedCompany.pitchDeck = formData.pitchDeck;
    if (formData.otherDocuments)
      updatedCompany.otherDocuments = formData.otherDocuments;
    try {
      const res = await editCompany(updatedCompany);
      console.log(res);
      alert("Editing company successfull");
    } catch (err) {
      alert("Editing company failed! Please try again");
      console.log("Error Signing up: ", err);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-header">
          <div className="company-logo"></div>
          <div className="company-header-info">
            <h2>Company Name</h2>
            <div className="description-container">
              <p className="description">Short description</p>
              <input
                type="text"
                placeholder="Website URL"
                className="website-input"
              />
            </div>
            <div className="header-fields">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Website URL"
                  className="website-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Country"
                  className="country-input"
                />
              </div>
            </div>
          </div>
        </div>

        <nav className="horizontal-tabs">
          <Link
            to=""
            className={({ isActive }) => `tab-link ${isActive ? "active" : ""}`}
          >
            Overview
          </Link>
          <Link
            to=""
            className={({ isActive }) => `tab-link ${isActive ? "active" : ""}`}
          >
            Documents
          </Link>
          <Link
            to=""
            className={({ isActive }) => `tab-link ${isActive ? "active" : ""}`}
          >
            Question and Answers
          </Link>
        </nav>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-field">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder={company.companyName}
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Website URL</label>
            <input
              type="text"
              name="websiteUrl"
              placeholder="Website url"
              value={formData.websiteUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="details-section">
            <h3>Details</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Sector</label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="tech">Technology</option>
                  <option value="health">Healthcare</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              <div className="form-field">
                <label>Stage</label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="startup">Startup</option>
                  <option value="growth">Growth</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label>Business Summary</label>
            <textarea
              name="summary"
              placeholder="Here you can write a more detailed description of what your business does"
              value={formData.summary}
              onChange={handleInputChange}
            />
          </div>

          <div className="social-media-section">
            <h3>Social Media links</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Pitch Deck</label>
                <input
                  type="text"
                  name="pitchDeck"
                  placeholder="PitchDeck"
                  value={formData.pitchDeck}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>Other Documents</label>
                <input
                  type="text"
                  name="otherDocuments"
                  placeholder="Other Documents"
                  value={formData.otherDocuments}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
