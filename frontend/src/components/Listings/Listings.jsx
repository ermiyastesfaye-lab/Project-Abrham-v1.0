import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Listings.module.css";
import { getCompanies } from "../../api/company";

const Company = ({ company }) => {
  const navigate = useNavigate();
  const handleListingClick = (company) => {
    localStorage.setItem("company_id", company._id);
    navigate("overview");
  };

  return (
    <div
      className={styles.listingCard}
      onClick={() => handleListingClick(company)}
    >
      <div className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{company.companyName}</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>{company.country}</span>
          <span className={styles.tag}>{company.city}</span>
          <span className={styles.tag}>{company.sector}</span>
        </div>
      </div>
      <div>
        <button>Detail</button>
      </div>
    </div>
  );
};
function Listings() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCompanies();
      setCompanies(response.data);
    };
    fetchData();
    localStorage.removeItem("company_id");
  }, []);
  return (
    <div className={styles.listingsContainer}>
      <main className={styles.mainContent}>
        <div className={styles.filters}>
          <select className={styles.filter}>
            <option>All Locations</option>
            <option>San Francisco</option>
            <option>New York</option>
            <option>London</option>
          </select>
          <select className={styles.filter}>
            <option>All Stages</option>
            <option>Pre-Revenue</option>
            <option>Early Stage</option>
            <option>Growth</option>
          </select>
        </div>

        <div className={styles.listingsGrid}>
          {companies.map((company) => {
            return <Company company={company} key={company._id} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default Listings;
