import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = React.useState({
    companyName: "",
    country: "",
    city: "",
    websiteUrl: "",
    sector: "",
    stage: "",
    summary: "",
    linkedinUrl: "",
    twitterUrl: "",
    facebookUrl: "",
    instagramUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-header">
          <div className="company-logo"></div>
          <div className="company-header-info">
            <h2>Company name</h2>
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
              placeholder="Company name"
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
                <label>LinkedIn URL</label>
                <input
                  type="text"
                  name="linkedinUrl"
                  placeholder="LinkedIn URL"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>Twitter URL</label>
                <input
                  type="text"
                  name="twitterUrl"
                  placeholder="Twitter URL"
                  value={formData.twitterUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Facebook URL</label>
                <input
                  type="text"
                  name="facebookUrl"
                  placeholder="Facebook URL"
                  value={formData.facebookUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>Instagram URL</label>
                <input
                  type="text"
                  name="instagramUrl"
                  placeholder="Instagram URL"
                  value={formData.instagramUrl}
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
