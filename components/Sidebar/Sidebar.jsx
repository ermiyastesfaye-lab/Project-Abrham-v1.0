import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/dashboard/overview", { state: { selectedListing: null } });
  };

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            onClick={handleProfileClick}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listings"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Listings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
