import React, { useEffect, useState } from "react";
import styles from "./Overview.module.css";
import { getCompany } from "../../api/company";
import { useCookies } from "react-cookie";

const Overview = () => {
  const cookie = useCookies(["jwt"]);
  console.log(`Cookie: ${cookie.jwt} `);
  const [company, setCompany] = useState({});
  const company_id = localStorage.getItem("company_id");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCompany(company_id);
      setCompany(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <h1 className={styles.companyName}>{company.companyName}</h1>
        <div className={styles.tags}>
          <span className={styles.tag}>{company.sector}</span>
          <span className={styles.tag}>{company.location}</span>
          <span className={styles.tag}>{company.stage}</span>
        </div>
      </div>

      <div className={styles.description}>
        <h2>Company Description</h2>
        <p>{company.businessSummary}</p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailColumn}>
          <h2>Company Details</h2>
          <ul className={styles.detailList}>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${company.websiteUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.websiteUrl}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.detailColumn}>
          <h2>Company Overview</h2>
          <p>{company.businessSummary}</p>
        </div>
      </div>

      {/* <div className={styles.contact}>
        <h2>Contact Information</h2>
        <p>For more information about {name}, please contact:</p>
        <p>Email: info@{website}</p>
        <p>Phone: (123) 456-7890</p>
        <div className={styles.socialIcons}>
          <span className={styles.socialIcon}>FB</span>
          <span className={styles.socialIcon}>TW</span>
          <span className={styles.socialIcon}>LI</span>
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
