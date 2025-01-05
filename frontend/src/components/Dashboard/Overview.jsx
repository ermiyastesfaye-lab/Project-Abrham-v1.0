import React, { useEffect, useState } from "react";
import styles from "./Overview.module.css";
import { getCompany } from "../../api/company";
import { useCookies } from "react-cookie";

const Overview = () => {
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
    </div>
  );
};

export default Overview;
