import React from "react";
import styles from "./Documents.module.css";

const Documents = () => {
  return (
    <div className={styles.documents}>
      <div className={styles.uploadArea}>
        <div className={styles.uploadBox}>
          <p>Click to Upload</p>
          <button>Upload Pitch Deck</button>
        </div>
        <div className={styles.uploadBox}>
          <p>Click to Upload</p>
          <button>Upload Other Document</button>
        </div>
      </div>
      <button className={styles.submitBtn}>Submit</button>
    </div>
  );
};

export default Documents;
