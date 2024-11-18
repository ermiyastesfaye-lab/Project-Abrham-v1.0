import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Listings.module.css";

function Listings() {
  const navigate = useNavigate();

  // Mock data for listings
  const listings = Array(8)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      name: `Company Name ${index + 1}`,
      sector: "Technology",
      location: "San Francisco",
      stage: "Pre-Revenue",
      description:
        "A Middleware that powers shipping for application-layer software companies.",
    }));

  const handleListingClick = (listing) => {
    navigate("/dashboard/overview", { state: { selectedListing: listing } });
  };

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
          {listings.map((listing) => (
            <div
              key={listing.id}
              className={styles.listingCard}
              onClick={() => handleListingClick(listing)}
            >
              <div className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{listing.name}</h3>
                <div className={styles.tags}>
                  <span className={styles.tag}>{listing.sector}</span>
                  <span className={styles.tag}>{listing.location}</span>
                  <span className={styles.tag}>{listing.stage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Listings;
