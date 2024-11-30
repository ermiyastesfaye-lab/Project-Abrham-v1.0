import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Overview from "./Overview";
import Documents from "./Documents";
import QuestionAndAnswers from "./QuestionAndAnswers";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const location = useLocation();
  const selectedListing = location.state?.selectedListing;

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <main>
          <div className={styles.companyInfo}>
            <div className={styles.companyLogo}></div>
            <div className={styles.companyDetails}>
              <h1>{selectedListing?.name || "Company name"}</h1>
              <p>{selectedListing?.description || "Short description"}</p>
              <div className={styles.companyMeta}>
                <input
                  type="text"
                  placeholder="Website URL"
                  defaultValue={selectedListing?.website}
                />
                <input
                  type="text"
                  placeholder="Country"
                  defaultValue={selectedListing?.location}
                />
              </div>
            </div>
          </div>
          <nav className={styles.tabs}>
            <NavLink
              to="overview"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Overview
            </NavLink>
            <NavLink
              to="documents"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Documents
            </NavLink>
            <NavLink
              to="qa"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Question and Answers
            </NavLink>
          </nav>
          <div className={styles.content}>
            <Routes>
              <Route
                path="/"
                element={<Overview listing={selectedListing} />}
              />
              <Route
                path="overview"
                element={<Overview listing={selectedListing} />}
              />
              <Route path="documents" element={<Documents />} />
              <Route path="qa" element={<QuestionAndAnswers />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
