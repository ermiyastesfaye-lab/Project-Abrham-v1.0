import React from "react";
import styles from "./Overview.module.css";

const Overview = ({ listing }) => {
  // Fallback data in case no listing is provided
  const {
    name = "Company Name",
    sector = "Technology",
    location = "San Francisco",
    stage = "Pre-Revenue",
    description = "A Middleware that powers shipping for application-layer software companies.",
    foundedYear = "2020",
    founderName = "John Doe",
    employeeCount = "10-50",
    fundingAmount = "$5M",
    website = "www.companyname.com",
  } = listing || {};

  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <h1 className={styles.companyName}>{name}</h1>
        <div className={styles.tags}>
          <span className={styles.tag}>{sector}</span>
          <span className={styles.tag}>{location}</span>
          <span className={styles.tag}>{stage}</span>
        </div>
      </div>

      <div className={styles.description}>
        <h2>Company Description</h2>
        <p>{description}</p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailColumn}>
          <h2>Company Details</h2>
          <ul className={styles.detailList}>
            <li>
              <strong>Founded:</strong> {foundedYear}
            </li>
            <li>
              <strong>Founder:</strong> {founderName}
            </li>
            <li>
              <strong>Employees:</strong> {employeeCount}
            </li>
            <li>
              <strong>Total Funding:</strong> {fundingAmount}
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.detailColumn}>
          <h2>Company Overview</h2>
          <p>
            Founded by industry experts with more than 15 years of experience in
            the logistics industry. As the technical co-founder, {founderName}{" "}
            brings a wealth of experience in software development and system
            integration to the team. Over the past years, the team has built
            enterprise-level software solutions for some of the largest
            logistics companies in North America.
          </p>
        </div>
      </div>

      <div className={styles.contact}>
        <h2>Contact Information</h2>
        <p>For more information about {name}, please contact:</p>
        <p>Email: info@{website}</p>
        <p>Phone: (123) 456-7890</p>
        <div className={styles.socialIcons}>
          {/* Add social media icons here */}
          <span className={styles.socialIcon}>FB</span>
          <span className={styles.socialIcon}>TW</span>
          <span className={styles.socialIcon}>LI</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
